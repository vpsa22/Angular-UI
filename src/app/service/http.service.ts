import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApiMethod } from '../common/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}
  requestCall(api: string, method: ApiMethod, data?: any, options?: any): Observable<any> {

    let response!: Observable<any>;

    switch (method) {
      case ApiMethod.GET:
        alert("requestcall " + api);
        response = this.http.get(api);       
        break;
      case ApiMethod.POST:
        response = this.http.post(api, data, { ...options });
        break;
      case ApiMethod.PUT:
        response = this.http.put(api, data, { ...options });
        break;
      case ApiMethod.DELETE:
        response = this.http.delete(api, { ...options });
        break;
        default:
          break;
    }
    return response;
  }
}

