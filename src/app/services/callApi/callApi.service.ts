import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CallApiService {
  constructor(private http: HttpClient) {
    
  }

  configUrl  = 'https://mindicador.cl/api';

  getUsers(): Observable<any>{
    return this.http.get(this.configUrl);
  }

  getInfo(code: string):  Observable<any>{
    return this.http.get<boolean>(`${this.configUrl }/${code}`);
  }

 
  
 
}