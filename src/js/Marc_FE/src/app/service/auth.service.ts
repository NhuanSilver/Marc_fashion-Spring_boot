import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user/User";
import {environment} from "../../environments/environment.development";
import {LoginRequest} from "../model/auth/LoginRequest";
import {RegistrationRequest} from "../model/auth/RegistrationRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api_url = environment.api_url
  constructor(private http : HttpClient) { }
  public login(request : LoginRequest) : Observable<User>{
    return this.http.post<User>(`${this.api_url}/login`, request);
  }
  public register(request : RegistrationRequest) : Observable<string> {
    return this.http.post<string>(`${this.api_url}/register`, request);
  }
}
