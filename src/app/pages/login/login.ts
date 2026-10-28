import { Component, inject } from '@angular/core';
import { UserLogin } from '../../core/models/classes/User.Model';
import { UserService } from '../../core/services/user-service';
import { Roles } from '../../core/enums/Roles.enum';
import { CommonImports } from '../../core/constant/CommonImports';
import { LoginResponse } from '../../core/models/interfaces/api-response.model';
import { Router } from '@angular/router';
import { GlobalConstant } from '../../core/constant/Constant';

@Component({
  selector: 'app-login',
  imports: [CommonImports.FORM_IMPORTS],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   
    userSrv = inject(UserService);
    router = inject(Router);

    loginObj : UserLogin = new UserLogin();

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
