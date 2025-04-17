import { HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';


const loginService = inject(LoginService);

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req.clone({
    setHeaders: {
      Authorization: `Bearer ${loginService.getAuthToken}`
    }
  }));
};
