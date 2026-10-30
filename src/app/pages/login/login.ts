import { Component, inject, signal } from '@angular/core';
import { UserLogin } from '../../core/models/classes/User.Model';
import { UserService } from '../../core/services/user-service';
import { CommonImports } from '../../core/constant/CommonImports';
import { LoginResponse } from '../../core/models/interfaces/api-response.model';
import { Router } from '@angular/router';
import { GlobalConstant } from '../../core/constant/Constant';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonImports.FORM_IMPORTS, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   
    userSrv = inject(UserService);
    router = inject(Router);

    loginObj : UserLogin = new UserLogin();
    isLoginFormVisiable = signal<boolean>(false); 

    onToggleForm(isShow: boolean){
      this.isLoginFormVisiable.set(isShow);
    }
    onLogin(){
      debugger;
       this.userSrv.login(this.loginObj).subscribe({
         next:(res : LoginResponse)=>{
          debugger;
          localStorage.setItem(GlobalConstant.LOCAL_LOGIN_KEY, JSON.stringify(res.data));
          this.router.navigateByUrl("/home");
         },
         error:(error)=>{
           alert("Wrong Credentials");
         }
       })
    }
}
