import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GlobalConstant } from '../constant/Constant';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../models/interfaces/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class Master {

  http = inject(HttpClient);

  getAllRoles(): Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + GlobalConstant.API_ENDPOINTS.GET_ALL_ROLES);
  }
  
}
