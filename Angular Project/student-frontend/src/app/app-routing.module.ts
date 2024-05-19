import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewStudentComponent } from './component/view-student/view-student.component';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { UpdateStudentComponent } from './component/update-student/update-student.component';
import { DeleteStudentComponent } from './component/delete-student/delete-student.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'' ,component:ViewStudentComponent},
  {path:'addStudent',component:AddStudentComponent},
  {path:'updateStudent/:id',component:UpdateStudentComponent},
  {path:'deleteStudent/:id',component:DeleteStudentComponent},
  {path:'login/:name/:password',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
