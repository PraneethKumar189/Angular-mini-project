import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { MyorderComponent } from './myorder/myorder.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},/*{path:'',redirectTo:'home',pathMatch:'full'},*/
{  path:'register',component:RegisterComponent},
{path:'',component:LoginComponent},
{path:'course',component:CourseComponent},
{path:'profile',component:ProfileComponent},
{path:'mycrs',component:MyorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
