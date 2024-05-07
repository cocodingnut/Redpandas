import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [];
  private apiUrl: string = environment.apiUrl;

  private userTmp: User = {
    userName: "",
    password: "",
    userEmail: ""
  }

  private source: BehaviorSubject<User>;
  private _currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.source = new BehaviorSubject<User>(this.userTmp)
    this._currentUser = this.source.asObservable();
  }

  getAllData() {
    const url: string = `${this.apiUrl}/users/getAllUsers`;
    return this.http.get<User[]>(url);
  }

  getUserInfo(userName: string) {
    const url: string = `${this.apiUrl}/users/getProfile/${userName}`
    return this.http.get(url)
      .subscribe(
        res => {
          this.source.next(<User>res);
        });
  }

  get currentUser() {
    return this._currentUser;
  }

  updateCurrentUser(updateUser: User) {
    this.source.next(updateUser);
  }
}
