import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, Observable, Subject, BehaviorSubject } from 'rxjs';
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
  getNews(): Observable<any> {
    const url = `${this.apiUrl}/news`;
    return this.http.get(url);
  }

  //post a new "chirrup" to the backend.
  postChirrup(chirrup: Chirrup): Observable<any> {
    const url = `${this.apiUrl}/news`;
    return this.http.post(url, chirrup).pipe(
      catchError(error => {
        throw 'Error posting story: ' + error.message;
      })
    );
  }

  private newChirrupSubject = new Subject<void>();
  //trigger a notification
  notifyChirrupListRefresh(): void {
    this.newChirrupSubject.next();
  }

  getChirrupListRefreshNotifier(): Observable<void> {
    return this.newChirrupSubject.asObservable();
  }

  private updateNews(data: Chirrup[]) {
    this._news = data.map(item => {
      let isLiked = false;
      if (item._id !== undefined) {
        const storedIsLiked = localStorage.getItem(item._id);
        isLiked = storedIsLiked === 'true';
      }
      return {
        ...item,
        islike: isLiked,
        showComments: false
      };
    });
    this.newsSubject.next(this._news);
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

}
