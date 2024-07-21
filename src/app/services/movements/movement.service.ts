import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../../models/Customer';
import { Observable } from 'rxjs';
import { Movement } from '../../models/Movement';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  private baseUrl = 'https://localhost:7264';
  
  constructor(private http: HttpClient) { }

  createMovement(endpoint: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${endpoint}`, data);
  }
}
