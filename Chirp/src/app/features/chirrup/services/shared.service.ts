import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private newChirrupSubject = new Subject<void>();

  /**
   * Notify any component subscribed this service for change
   */
  notifyChirrupListRefresh(): void {
    this.newChirrupSubject.next();
  }

  /**
   * Get an observable to subscribe in order to receive broadcast of notification
   * @returns Observable<void>
   */
  getChirrupListRefreshNotifier(): Observable<void> {
    return this.newChirrupSubject.asObservable();
  }
}
