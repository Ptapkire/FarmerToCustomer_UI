import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserLogin, UserModel } from '../../core/models/classes/User.Model';
import { UserService } from '../../core/services/user-service';
import { CommonImports } from '../../core/constant/CommonImports';
import { ApiResponseModel, IRole, LoginResponse } from '../../core/models/interfaces/api-response.model';
import { Router } from '@angular/router';
import { GlobalConstant } from '../../core/constant/Constant';
import { NgClass } from '@angular/common';
import { Master } from '../../core/services/master';

@Component({
  selector: 'app-login',
  imports: [CommonImports.FORM_IMPORTS, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  userSrv = inject(UserService);
  router = inject(Router);
  masterSrv = inject(Master);
  private formBuilder = inject(FormBuilder);

  loginObj: UserLogin = new UserLogin();
  registerForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{7,15}$/)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    roleId: [0, [Validators.required, Validators.min(1)]],
    address: ['', Validators.required],
  });
  registerMessage = signal('');
  registerError = signal('');
  isLoginFormVisiable = signal<boolean>(true);
  roleList = signal<IRole[]>([]);

  getAllRoles() {
    if(this.roleList().length == 0) {
      this.masterSrv.getAllRoles().subscribe({
        next: (res: ApiResponseModel) => {
          const allowedRoles = res.data.filter((m: IRole) => m.roleName != 'SUPER_ADMIN');
          this.roleList.set(allowedRoles);
        }
      });
    }
  }

  onToggleForm(isShow: boolean) {
    this.isLoginFormVisiable.set(isShow);
    if (isShow == false) {
      this.getAllRoles();
    }
  }
  onLogin() {
    debugger;
    this.userSrv.login(this.loginObj).subscribe({
      next: (res: LoginResponse) => {
        debugger;
        localStorage.setItem(GlobalConstant.LOCAL_LOGIN_KEY, JSON.stringify(res.data));
        this.router.navigateByUrl("/home");
      },
      error: (error) => {
        alert("Wrong Credentials");
      }
    })
  }

  onRegister() {
    this.registerMessage.set('');
    this.registerError.set('');

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const user: UserModel = {
      userId: 0,
      ...this.registerForm.getRawValue(),
      createdAt: new Date(),
    };

    this.userSrv.createUser(user).subscribe({
      next: (res: ApiResponseModel) => {
        this.registerMessage.set(res.message || 'Account created successfully.');
        this.registerForm.reset();
      },
      error: () => this.registerError.set('Unable to create account. Please try again.'),
    });
  }
}
