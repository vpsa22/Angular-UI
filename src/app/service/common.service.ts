import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  companymode: string = 'Company Login';
  constructor() { }
    //removed private http:HttpClient from constructor
  // requestCall(api:ApiEndPoint, method:ApiMethod, data?: any, options?: any): Observable<any> {
  //   let response!: Observable<any>;
  //   switch(method){
  //     case ApiMethod.GET:
  //       response = this.http.get('${environment.getHomeApi()}${api}',data);
  //       break;        
  //     case ApiMethod.POST:
  //       response = this.http.get('${environment.getHomeApi()}${api}',data);
  //       break;   
  //   }
  //   return response;
  // }

  //Local storage
  // public getFromLocalStorage(key: string):string {
  //   return JSON.parse(localStorage.getItem(key)!);
  // }
  // public setToLocalStorage(key: string, value:string){
  //   localStorage.setItem(key, JSON.stringify(value));
  // }
  // public removeFromLocalStorage(key: string){
  //   localStorage.removeItem(key);
  // }
  clearLocalStorage(){
    localStorage.clear();
  }

  //Session Storage
  // public geFromoSession(key:string): any{
  //   return JSON.parse(sessionStorage.getItem(key)!);    
  // }

  // public setToSession(key: string, value:string){
  //   sessionStorage.setItem(key, JSON.stringify(value));
  // }
  // public removeFromSession(key: string){
  //   sessionStorage.removeItem(key);
  // }
  clearSession(){
    sessionStorage.clear();
  }
}
