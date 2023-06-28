import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {StorageService} from "../../service/storage.service";
import {NgForm} from "@angular/forms";
import {LoginRequest} from "../../model/auth/LoginRequest";
import {User} from "../../model/user/User";
import {RegistrationRequest} from "../../model/auth/RegistrationRequest";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService : AuthService,
              private storageService : StorageService,
              private router : Router) {
  }

  onSubmit(f: NgForm) {
    let registrationRequest : RegistrationRequest = {
      firstName: f.value.firstName,
      lastName: f.value.lastName,
      username : f.value.username,
      password : f.value.password
    }
    this.authService.register(registrationRequest).subscribe({
      next: success => {
        this.router.navigateByUrl('/dang-nhap');
      },
      error: error =>{
        console.log(error)
      }}
    )
  }
}
