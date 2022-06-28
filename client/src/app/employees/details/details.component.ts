import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeesService} from "../services/employees.service";
import {Subscription} from "rxjs";
import {EmployeesInterface} from "../services/interfaces";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  updateEmployeeForm!: FormGroup;
  routeSubscription: Subscription = new Subscription();
  params: any;
  employeeDetails!: any

  constructor(private _employeesService: EmployeesService,
              private _fb: FormBuilder,
              private _router: Router,
              private _route: ActivatedRoute) {

    this.routeSubscription = this._route.queryParams
      .subscribe(params => {
          this.params = params;
        }
      );
    if (this.params?.id) {
      this._getEmployeeById(this.params?.id);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  private _createForm(employee: any): FormGroup {
    return this._fb.group({
      first_name: [employee?.first_name],
      last_name: [employee?.last_name],
      age: [employee?.age]
    })
  }

  private _getEmployeeById(id: number) {
    this._employeesService.getEmployeesById(id).subscribe({
      next: response => {
        this.employeeDetails = response;
        this.updateEmployeeForm = this._createForm(response);
      }
    });
  }

  updateEmployee() {

    const {id, first_name, last_name, age} = this.updateEmployeeForm.value;
    const employeeToUpdate: EmployeesInterface = {
      id: this.params?.id,
      first_name,
      last_name,
      age
    }
    this._employeesService.updateEmployeesById(employeeToUpdate).subscribe({
      next: () => {
        this._router.navigate(['/employees/list']);
      }
    });
  }

}
