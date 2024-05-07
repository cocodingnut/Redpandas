import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Chirrup } from '../../../core/models/chirrup';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private chirrupSubject = new Subject<Chirrup>();

  emitChirrup(chirrup: Chirrup) {
    this.chirrupSubject.next(chirrup);
  }

  getChirrupListRefreshNotifier(): Observable<Chirrup> {
    return this.chirrupSubject.asObservable();
  }
}
