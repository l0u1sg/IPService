import { Injectable } from '@angular/core';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
  
@Injectable()
export class IPApiService {
 
  baseURL: string = "https://api.ipapi.com/";
 
  constructor(private http: HttpClient) {
  }
 
  getInformation(ip: string, accessKey: string): Observable<any> {
    return this.http.get(this.baseURL + ip + '/?' + accessKey)
  }
 
}