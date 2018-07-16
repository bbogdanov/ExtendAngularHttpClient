import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpHandler } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

export function applicationHttpClientCreator(httpHandler: HttpHandler) {
  return new ApplicationHttpClient(httpHandler);
}

@Injectable()
export class ApplicationHttpClient extends HttpClient {

  private api = '';

  /**
   * GET request
   * @param {string} endPoint it doesn't need / in front of the end point
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @param {string} api use if there is needed to send request to different back-end than the default one.
   * @returns {Observable<T>}
   */
  public Get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.get<T>(this.api + endPoint, options);
  }

  /**
   * POST request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Post<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
    return this.post<T>(this.api + endPoint, params, options);
  }

  /**
   * PUT request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Put<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
    return this.put<T>(this.api + endPoint, params, options);
  }

  /**
   * DELETE request
   * @param {string} endPoint end point of the api
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.delete<T>(this.api + endPoint, options);
  }
}
