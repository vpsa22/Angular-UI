import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiEndPoint, ApiMethod } from '../common/constants/constants';
import { User } from '../common/interface/user.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CreatorService {

  constructor(private httpService: HttpService) { }

  getUserAPI(       
    endPoint: ApiEndPoint,
    apiMethod: ApiMethod,
    request:any,
    params:HttpParams) : Observable<User>{ 
      //const endpointWithParams =params ? endPoint + params :endPoint;  
      
      const endpointWithParams ="https://totazi-middleware.azurewebsites.net" + endPoint ;  
      alert(endpointWithParams);    
      return this.httpService.requestCall(`${endpointWithParams}` ,apiMethod,request,null);
      // .pipe(map((response:User) => {
      //   alert("resss");
      //   return response;
      //   }));
     
  }
}
