import {Component, OnDestroy} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {LoginRequest} from "../../model/auth/LoginRequest";
import {User} from "../../model/user/User";
import {StorageService} from "../../service/storage.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {of, Subscription, switchMap} from "rxjs";
import {Role} from "../../model/Enum/Role";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginSub !: Subscription

  constructor(private authService: AuthService,
              private storageService: StorageService,
              private toast: ToastrService,
              private router: Router) {
  }

  onSubmit(f: NgForm) {
    let loginRequest: LoginRequest = {
      username: f.value.username,
      password: f.value.password
    }
    this.authService.login(loginRequest)
      .subscribe({
          next: user => {
            this.storageService.saveUser(user);
            if (user.authorities.includes(Role.ADMIN)) {
              this.router.navigateByUrl('/admin');
            } else {
              this.router.navigateByUrl('');
            }
          },
          error: error => {
            this.toast.error("Tài khoản hoặc mật khẩu không chính xác");
          }
        }
      )
  }


}
