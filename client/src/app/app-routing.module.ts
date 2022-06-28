import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesModule} from "./employees/employees.module";

const routes: Routes = [
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {
    path: 'employees',
    loadChildren: () =>
      import('./employees/employees.module').then(
        (m) => m.EmployeesModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
