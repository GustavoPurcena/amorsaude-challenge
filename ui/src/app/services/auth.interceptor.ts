import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from './jwt.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  allowedDomains = ['localhost:3000'];

  constructor(private jwtService: JwtService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the token from JwtService
    const token = this.jwtService.getToken();

    // Check if the request URL is in the list of allowed domains
    const isAllowedDomain = this.allowedDomains.some((domain) =>
      request.url.includes(domain)
    );

    if (token && isAllowedDomain) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
