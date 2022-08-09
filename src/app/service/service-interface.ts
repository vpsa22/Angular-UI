import { HttpResponseBase } from '@angular/common/http';
export interface HttpCommonResponse<T> extends HttpResponseBase {
    timestamp: string;
    httpStatusCode: number;
    httpStatus: string;
    erorMessage: string;
    data: T | null;
}