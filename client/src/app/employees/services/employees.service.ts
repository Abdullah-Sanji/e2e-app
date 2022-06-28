import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmployeesInterface} from "./interfaces";
import {environment} from "../../../environments/environment";

@Injectable()
export class EmployeesService {

  constructor(private _http: HttpClient) { }

  getEmployees(): Observable<EmployeesInterface[]> {
    return this._http.get<EmployeesInterface[]>(environment.serverUrl + '/employees');
  }

  getEmployeesById(id: number): Observable<EmployeesInterface[]> {
    return this._http.get<EmployeesInterface[]>(environment.serverUrl + '/employees/' + id);
  }

  addEmployee(employee: any) {
    return this._http.post<EmployeesInterface[]>(environment.serverUrl + '/employees', employee);
  }

  deleteEmployee(id: number) {
    return this._http.delete<EmployeesInterface[]>(environment.serverUrl + '/employees/' + id);
  }

  updateEmployeesById(employee: EmployeesInterface): Observable<EmployeesInterface[]> {
    return this._http.patch<EmployeesInterface[]>(environment.serverUrl + '/employees/', employee);
  }
}
