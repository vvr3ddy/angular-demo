import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8000/employee';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, employee)
  }

  updateEmployee(id: number, employee:Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, employee);
  }
  
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/{id}`)
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get`);
  }
}
