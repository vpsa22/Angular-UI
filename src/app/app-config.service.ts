import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './service/common.service';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private appConfig:any;
  constructor( private http: HttpClient, private commonService: CommonService) { }

  loadAppConfig(): Promise<void>{
    this.commonService.clearLocalStorage();

    return new Promise<void>((resolve, reject) =>{
      let configurl =null;
      const url = new URL(window.location.href);
      configurl ="/src/assets/config/app.config.local.json";
      //commenting for Azure 
      // if(url.hostname =='localhost'){
      //   configurl ="/src/assets/config/app.config.local.json";
      // }else{
      //   configurl ="/src/assets/config/app.config.json";
      // }
      this.http.get(configurl).toPromise().then((data:any) => {
       // window.config=data; fix uncommenting
        this.appConfig=data;
        resolve();
      } );
    } );
  }
  public getConfig(): any {
    return this.appConfig;
  }

}
