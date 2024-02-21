import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginResponseI } from 'src/app/models/login-response.interface';
import { UserI } from 'src/app/models/user.interface';
import { JwtService } from 'src/app/services/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private jwtService: JwtService
  ) {}

  login(user: UserI): Observable<LoginResponseI> {
    return this.http.post<LoginResponseI>('api/users/login', user).pipe(
      tap((res: LoginResponseI) =>
        localStorage.setItem('amorsaude_token', res.access_token)
      ),
      tap(() =>
        this.snackbar.open('Login Successfull', 'Close', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        })
      )
    );
  }

  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken(
      this.jwtService.getToken() ?? ''
    );
    return decodedToken.user;
  }
}
