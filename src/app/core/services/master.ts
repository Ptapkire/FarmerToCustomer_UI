import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GlobalConstant } from '../constant/Constant';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../models/interfaces/api-response.model';
import { Category, Role } from '../models/classes/Master.model';

@Injectable({
  providedIn: 'root',
})
export class MasterService {

  http = inject(HttpClient);

  getAllRoles(): Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + GlobalConstant.API_ENDPOINTS.GET_ALL_ROLES);
  }

  createRole(roleObj: Role): Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.API_URL + GlobalConstant.API_ENDPOINTS.CREATE_ROLE, roleObj);
  }
  updateRole(roleObj: Role): Observable<ApiResponseModel>{
    return this.http.put<ApiResponseModel>(environment.API_URL + GlobalConstant.API_ENDPOINTS.UPDATE_ROLE + roleObj.roleId, roleObj);
  }

  updateCategory(categoryObj: Category): Observable<ApiResponseModel>{
    return this.http.put<ApiResponseModel>(environment.API_URL + GlobalConstant.API_ENDPOINTS.UPDATE_CATEGORY + categoryObj.categoryId, categoryObj);
  }
  createCategory(categoryObj: Category): Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.API_URL + GlobalConstant.API_ENDPOINTS.CREATE_CATEGORY, categoryObj);
  }

  getAllCategory(): Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + GlobalConstant.API_ENDPOINTS.GET_ALL_CATEGORY);
  }
}
