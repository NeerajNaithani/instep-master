import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { MentorDashboardComponent } from './mentor-dashboard/mentor-dashboard.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent },
  { path: 'mentor-dashboard', component: MentorDashboardComponent },
  { path: 'travel', component: TravelComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
