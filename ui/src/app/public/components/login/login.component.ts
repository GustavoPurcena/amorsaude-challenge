import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UserService } from '../../services/user-service/user-service.service';
import { AuthService } from '../../services/auth-service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.setValidators();
    if (this.form.valid) {
      this.authService
        .login({
          email: this.email.value,
          password: this.password.value,
        })
        .pipe(tap(() => this.router.navigate(['../../private/dashboard'])))
        .subscribe();
    }
  }

  setValidators() {
    this.email.setValidators([Validators.required, Validators.email]);
    this.email.updateValueAndValidity();
    this.password.setValidators([Validators.required]);
    this.password.updateValueAndValidity();
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
