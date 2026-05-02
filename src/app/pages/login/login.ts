import { Component, inject } from '@angular/core';
import { UserLogin } from '../../core/models/classes/User.Model';
import { UserService } from '../../core/services/user-service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   
    userSrv = inject(UserService);

    loginObj : UserLogin = {
       userName: '',
       password: ''
    }

    onLogin(){
       const loginDat = {};
       this.userSrv.login(this.loginObj).subscribe({

       })
    }
}
