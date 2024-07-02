import { Component } from '@angular/core';
import { AuthService } from '../authservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private service:AuthService){}
  dat=sessionStorage.getItem('user');
  result:any;
  id:any;
  email:any;
  name;
  gender;
  pn;

  getuser(){
    this.service.getbyid(this.dat).subscribe(item=>{
      this.result=item
      this.id=item[0].id;
      this.name=item[0].name;
      this.gender=item[0].gender;
      this.email=item[0].email;
      this.pn=item[0].phoneNum
    })
  }
}
 

