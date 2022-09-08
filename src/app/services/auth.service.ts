import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

const base = `api/user/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  array = [];
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any>  {
    console.log('base '+ base)
    return this.http.post(`api/user/login`, {
      email,
      password
    }, httpOptions);
  }


  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`api/user/add`, {
      name: name,
      email: email,
      password: password
    }, httpOptions);

  }

}
