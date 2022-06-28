import {Component, OnInit} from '@angular/core';
import {EmployeesService} from "../services/employees.service";
import {EmployeesInterface} from "../services/interfaces";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'age', 'actions'];
  employees!: EmployeesInterface[];
  addEmployeeForm!: FormGroup;

  constructor(private _employeesService: EmployeesService,
              private _fb: FormBuilder,
              private _router: Router) {
    this.addEmployeeForm = this._createForm();
    this._getEmployees();
  }

  ngOnInit(): void {
  }

  private _createForm(): FormGroup {
    return this._fb.group({
      first_name: [''],
      last_name: [''],
      age: []
    })
  }

  private _getEmployees() {
    this._employeesService.getEmployees().subscribe({
      next: response => {
        this.employees = response;
      }
    })
  }

  addEmployee() {
    this._employeesService.addEmployee(this.addEmployeeForm.value).subscribe({
      next: () => {
        this._getEmployees()
      }
    })
  }

  deleteEmployee(id: number) {
    this._employeesService.deleteEmployee(id).subscribe({
      next: () => {
        this._getEmployees()
      }
    })
  }

  updateEmployee(id: number) {
    this._router.navigate(['/employees/details'], {queryParams: {id}})
  }

}
