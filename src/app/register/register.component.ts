import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { AuthService } from '../authservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb:FormBuilder,private service:AuthService,private router:Router){}
 RegisterForm=this.fb.group({
  name:['',[Validators.required,Validators.minLength(7)]],
  id:['',[Validators.required,Validators.minLength(5)]],
  
  password:['',[Validators.required]],
  email:['',[Validators.required,Validators.email]],
  gender:['',[Validators.required]],
  phoneNum:['',[Validators.required]]
  
 })

 ProceedRegistration(){
  console.log(this.RegisterForm.value)
  if (this.RegisterForm){
    this.service.regesterUser(this.RegisterForm.value).subscribe((res:any)=>{
    
      alert("Regestration  complete")})
   this.router.navigate(['']);
  }
  else 
  {
    alert("please try again");
  }
 }
}
