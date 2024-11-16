import { Component } from '@angular/core';
import { AuthService } from '../authservice.service';
import { repos } from '../repos';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit{
constructor(private service:AuthService,private router:Router){}

dat=sessionStorage.getItem('user');
repos:any;

ngOnInit(){
  this.service.getByname(this.dat).subscribe(item=>{
    this.repos=item;
    console.log(this.repos)
  })

}
del(a1:any){
  
  console.warn(a1);
  this.service.deleteItem(a1).subscribe(resolve=>{
    alert("Deleted succsessfully")
  }
  
  )
}

}
