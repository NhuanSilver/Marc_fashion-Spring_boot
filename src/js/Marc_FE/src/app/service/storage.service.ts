import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {User} from "../model/user/User";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  static USER_KEY = 'auth-user';
  private authSubject: BehaviorSubject<User> = new BehaviorSubject(this.getUser())
  isAuthenticate = this.authSubject.asObservable();

  signOut(): void {
    localStorage.removeItem(StorageService.USER_KEY);
    this.authSubject.next(this.getUser())
  }

  public saveUser(user: User): void{
    localStorage.removeItem(StorageService.USER_KEY);
    localStorage.setItem(StorageService.USER_KEY, JSON.stringify(user));
    this.authSubject.next(this.getUser())
  }

  public getUser(): User {
    return JSON.parse(localStorage.getItem(StorageService.USER_KEY) || "null")
  }
}
