import { Component,OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private service:AuthService,private router:Router){}
  Loginform=this.fb.group({
  name:['',[Validators.required]],
  password:['',[Validators.required]]
  })
result:any;

 userdata:any;
 
 proceedlogin(){

  
       if (this.Loginform){
        this.service.getbyid(this.Loginform.value.name).subscribe(item=>{
          this.result=item
          console.log(this.result)
          if (this.result[0].password === this.Loginform.value.password){
            sessionStorage.setItem('user',this.result[0].name);
            sessionStorage.setItem('id',this.result[0].id)
            this.router.navigate(['home']);
          }
        else{
          alert("invalid password")
        }
        })
         
         
        }
      
        else{
              alert("invalid password")
              this.router.navigate([''])
        }
       
       
      
 }
}
