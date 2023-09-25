import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentEditComponent} from "./student-edit/student-edit.component";
import {StudentCreateComponent} from "./student-create/student-create.component";
import {StudentDetailsComponent} from "./student-details/student-details.component";

const routes: Routes = [
  {path : '' ,redirectTo: 'students' , pathMatch:'full'},
  {path : 'students', component : StudentListComponent},
  {path : 'students/create', component : StudentCreateComponent},
  {path : 'students/edit/:id', component : StudentEditComponent},
  {path : 'students/details/:id', component : StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
