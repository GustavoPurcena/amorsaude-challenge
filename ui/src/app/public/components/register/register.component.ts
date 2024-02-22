import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UserService } from '../../services/user-service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl(null),
    username: new FormControl(null),
    password: new FormControl(null),
  });

  constructor(private userService: UserService, private router: Router) {}

  register() {
    this.setValidators();
    console.log(this.form);
    if (this.form.valid) {
      this.userService
        .create({
          email: this.email.value,
          password: this.password.value,
          username: this.username.value,
        })
        .pipe(tap(() => this.router.navigate(['auth/login'])))
        .subscribe();
    }
  }

  setValidators() {
    this.email.setValidators([Validators.required, Validators.email]);
    this.email.updateValueAndValidity();
    this.username.setValidators([Validators.required]);
    this.username.updateValueAndValidity();
    this.password.setValidators([Validators.required]);
    this.password.updateValueAndValidity();
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
