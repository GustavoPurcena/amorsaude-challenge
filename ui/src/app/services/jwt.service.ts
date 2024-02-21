import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  getToken(): string | null {
    return localStorage.getItem('amorsaude_token');
  }

  decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.getToken() ?? undefined;
    }
    if (!token) return true;

    const decoded = this.decodeToken(token);
    if (!decoded) return true;

    const exp = decoded.exp;
    if (!exp) return true;

    return Date.now() >= exp * 1000;
  }
}
