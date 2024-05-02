import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetChirrupsService {

  private apiUrl = 'http://localhost:4231/api/news';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

