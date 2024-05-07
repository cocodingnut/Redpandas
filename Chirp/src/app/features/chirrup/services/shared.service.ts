import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Chirrup } from '../../../core/models/chirrup';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private chirrupSubject = new Subject<Chirrup>();
  /**
   * Notify any component subscribed this service for change
   */
  emitChirrup(chirrup: Chirrup) {
    this.chirrupSubject.next(chirrup);
  }
  /**
   * Get an observable to subscribe in order to receive broadcast of notification
   * @returns Observable<Chirrup>
   */
  getChirrupListRefreshNotifier(): Observable<Chirrup> {
    return this.chirrupSubject.asObservable();
  }
}
