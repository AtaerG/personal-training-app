import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  private readonly tokenKey = 'auth_token';

  //constructor checks for token, because we dont want relogging when user reloaded web page
  constructor() {
    if (this.hasToken()) {
      this.isAuthenticatedSubject.next(true);
    }
  }

  //method that indicates if state has changed
  isAuthenticatedObservable() {
    return this.isAuthenticatedSubject.asObservable();
  }

  //method that has all logic for login
  login(username: string, password: string): Observable<boolean> {
    return of('jwt-token-abc123').pipe(
      tap(token => {
        localStorage.setItem(this.tokenKey, token);
        this.isAuthenticatedSubject.next(true);
      }),
      map(() => true)
    );
  }

  //method that extrets username from token
  getUser() {
    const token = this.getAuthToken();
    if (!token) return null;
  
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.username;
  }

  //method that gets back the authorization token
  getAuthToken() {
    return localStorage.getItem(this.tokenKey);
  }

  //method that checks if user has a token 
  hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }


  


}