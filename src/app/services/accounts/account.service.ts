import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService<T> {

  private baseUrl = 'https://localhost:7264';

  constructor(private http: HttpClient) { }

  getAll(endpoint: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${endpoint}`);
  }

  getById(endpoint: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${endpoint}`);
  }
}
