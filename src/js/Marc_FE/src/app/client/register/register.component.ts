import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {StorageService} from "../../service/storage.service";
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {RegistrationRequest} from "../../model/auth/RegistrationRequest";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {debounceTime, of, switchMap} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isUsernameExisted: boolean = false;

  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toast: ToastrService,
              private storageService: StorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm.get('username')?.valueChanges
      .pipe(
        debounceTime(300),
        switchMap(value => {
          if (this.registerForm.get('username')?.valid && value != null) {
            return this.authService.validateUsername(value);
          }
          return of(false);
        }))
      .subscribe(value => {
        this.isUsernameExisted = value;
      })

  }

  onSubmit() {
    if (this.registerForm.valid && !this.isUsernameExisted) {
      let registrationRequest: RegistrationRequest = {
        firstName: this.registerForm.get('firstName')?.value,
        lastName: this.registerForm.get('lastName')?.value,
        username: this.registerForm.get('username')?.value,
        password: this.registerForm.get('password')?.value,
      }

      this.authService.register(registrationRequest).subscribe({
          next: success => {
            this.router.navigateByUrl('/dang-nhap');
            this.toast.success("Đăng ký thành công")
          },
          error: error => {
            this.toast.error("Lỗi không xác định")
          }
        }
      )
    }
  }


}
