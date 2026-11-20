import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserLogin, UserModel } from '../models/classes/User.Model';
import { environment } from '../../../environments/environment';
import { GlobalConstant } from '../constant/Constant';
import { Observable } from 'rxjs';
import { ApiResponseModel, LoginResponse } from '../models/interfaces/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  apiUrl : string = environment.API_URL;

  http = inject(HttpClient);

  login(obj:UserLogin): Observable<LoginResponse>{
    // return this.http.post(this.apiUrl + "login",obj);
    debugger;
    console.log("success");
    return this.http.post<LoginResponse>(this.apiUrl + GlobalConstant.API_ENDPOINTS.LOGIN,obj);  
  }  

  createUser(user: UserModel): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(this.apiUrl + GlobalConstant.API_ENDPOINTS.CREATE_USER, user);
  }

  getUserById(id:number){
    return this.http.get(`${this.apiUrl}${GlobalConstant.API_ENDPOINTS.GET_USER_BY_ID}${id}`);
  }
}
