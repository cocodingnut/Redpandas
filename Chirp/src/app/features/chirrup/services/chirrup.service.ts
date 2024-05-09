import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, Observable, Subject, BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chirrup } from '../../../core/models/chirrup'

@Injectable({
  providedIn: 'root'
})
export class ChirrupService {

  private apiUrl: string = environment.apiUrl;
  private _news: Chirrup[] = [];
  private newsSubject = new BehaviorSubject<Chirrup[]>([]);

  constructor(private http: HttpClient) { }

  get news(): Observable<Chirrup[]> {
    return this.newsSubject.asObservable();
  }

  // retrieve news items from the backend
  getNews(): Observable<Chirrup[]> {
    const url = `${this.apiUrl}/news`;
    return this.http.get<Chirrup[]>(url);
  }

  private updateNews(data: Chirrup[]): void {
    const transformedData = data.map(this.transformChirrup.bind(this));
    this.newsSubject.next(transformedData);
  }

  loadChirrups() {
    this.getNews().subscribe({
      next: (data: Chirrup[]) => {
        this.updateNews(data);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

  postChirrup(chirrup: Chirrup): Observable<Chirrup> {
    const url = `${this.apiUrl}/news`;
    return this.http.post<Chirrup>(url, chirrup).pipe(
      map(newChirrup => {
        this.updateNews([...this.newsSubject.value, this.transformChirrup(newChirrup)]);
        return newChirrup;
      }),
      catchError(error => {
        throw new Error('Error posting chirrup: ' + error.message);
      })
    );
  }

  private transformChirrup(chirrup: Chirrup): Chirrup {
    let isLiked = false;
    if (chirrup._id !== undefined) {
      const storedIsLiked = localStorage.getItem(chirrup._id);
      isLiked = storedIsLiked === 'true';
    }
    return {
      ...chirrup,
      islike: isLiked,
      showComments: false
    };
  }

}
