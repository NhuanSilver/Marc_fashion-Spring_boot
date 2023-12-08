import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {LoginRequest} from "../../model/auth/LoginRequest";
import {Observable} from "rxjs";
import {User} from "../../model/user/User";
import {StorageService} from "../../service/storage.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService : AuthService,
              private storageService : StorageService,
              private toast : ToastrService,
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
            this.storageService.saveUser(user);
            if (user.authorities.includes('ROLE_ADMIN')){
              this.router.navigateByUrl('/admin')
            } else{
              this.router.navigateByUrl('')
            }
          }

        },
        error : err => this.toast.error("Tài khoản hoặc mật khẩu không chính xác")
      }
    )
  }
}
