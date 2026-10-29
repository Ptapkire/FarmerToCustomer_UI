import { CanActivateFn, Router } from '@angular/router';
import { GlobalConstant } from '../constant/Constant';
import { inject } from '@angular/core';

// upto v15 this service but after v16 this is arrow function.
export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  // In Gaurd and interceptor, we have arrow function, we don't have the constructor. 
  // so for that from v16 this inject() we got.
  const router = inject(Router);
  const isLocalDataPresent = localStorage.getItem(GlobalConstant.LOCAL_LOGIN_KEY);
  if(isLocalDataPresent == null){
     router.navigateByUrl("/login");
     return false;
  }else{
   return true;
  }
};
