import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'' , component:LoginComponent
  },
  {
    path:'dashboard' , component:DashboardComponent
  },
  {
    path:'register' , component:RegisterComponent
  },
  {
    path:'courses' , component:CoursesComponent
  },
  {
    path:'assignment' , component:AssignmentComponent
  },
  {
    path:'attendance' , component:AttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
