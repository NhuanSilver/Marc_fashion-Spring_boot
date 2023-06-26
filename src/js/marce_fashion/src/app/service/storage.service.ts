import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {User} from "../model/user/User";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  static USER_KEY = 'auth-user';
  isAuthenticate : BehaviorSubject<User> = new BehaviorSubject(this.getUser())

  signOut(): void {
    localStorage.removeItem(StorageService.USER_KEY);
    this.isAuthenticate.next( this.getUser())
  }

  public saveUser(user: User): void {
    localStorage.removeItem(StorageService.USER_KEY);
    localStorage.setItem(StorageService.USER_KEY, JSON.stringify(user));
    this.isAuthenticate.next(this.getUser())
  }

  public getUser(): User{
    const user = JSON.parse(localStorage.getItem(StorageService.USER_KEY) || 'null')
    return user;
  }
}
