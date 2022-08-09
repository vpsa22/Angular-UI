import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg='';
        if(error.error instanceof ErrorEvent){
          errorMsg='Error: ${error.error.message}';
        } else{
          errorMsg='Error Code: ${error.status}, Message:${error.message}';
        }
        return throwError(errorMsg);
      }),
      finalize(() => {
        //this.spinner.hide();
      }),
    );
  }
}
