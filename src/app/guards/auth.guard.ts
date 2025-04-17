import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';
import { Router } from 'express';

//Guard que controla si se ha hecho login a la app.
export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if(loginService.hasToken()){
    return true;
  } else {
    route = router.navigate(['/login'])
    return false;
  }
};
