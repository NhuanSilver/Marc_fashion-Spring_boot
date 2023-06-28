import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {LoginRequest} from "../../model/auth/LoginRequest";
import {Observable} from "rxjs";
import {User} from "../../model/user/User";
import {StorageService} from "../../service/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService : AuthService,
              private storageService : StorageService,
              private router: Router) {
  }

  onSubmit(f: NgForm) {
    let loginRequest : LoginRequest = {
      username : f.value.username,
      password : f.value.password
    }
    let user : User;
    this.authService.login(loginRequest).subscribe(
      {
        next : res => {
          user = res;
          if (user){
            console.log(user)
            this.storageService.saveUser(user);
            this.router.navigateByUrl('');
          }

        },
        error : err => alert("some thing was wrong: " + err)
      }
    )
  }
}
