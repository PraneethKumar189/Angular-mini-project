import { Component } from '@angular/core';
import { AuthService } from '../authservice.service';
import { OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {
  constructor(private service:AuthService){}
  title1='buy';
  title2='buy';
  title3='buy';
  title4='buy';
  title5='buy';
  title6='buy';
  
  dat=sessionStorage.getItem('user');
  dat1=sessionStorage.getItem('id');
  
  


  isDisabled1=false
  isDisabled2=false
  isDisabled3=false
  isDisabled4=false
  isDisabled5=false
  isDisabled6=false
c1:object={
  user:this.dat,
  
  cid:11,
  cname:'Web Development',
  }
 c2:object={
  user:this.dat,
  
    cid:12,
    cname:'Graphic Desighning',
    
    }
    
c3:object={
  user:this.dat,

      cid:13,
      cname:'Programing in Java',
      }
        
c4:object={
  user:this.dat,
  
        cid:14,
        cname:'Networking',
        }
c5:object={
  user:this.dat,

          cid:15,
          cname:'Programming in Python',
          }
              
    
c6:object={
  user:this.dat,
  
            cid:16,
            cname:'Data Science',
            }
            
 buy1(){
 this.title1='Broght'
 this.isDisabled1=true
 this.service.regesterC(this.c1).subscribe((res:any)=>{
    
  alert("Added your collections")})
 }
 buy2(){
  this.title2='Broght'
  this.isDisabled2=true
  this.service.regesterC(this.c2).subscribe((res:any)=>{
    
    alert("Added your collections")})
 }
 buy3(){
  this.title3='Broght'
  this.isDisabled3=true
  this.service.regesterC(this.c3).subscribe((res:any)=>{
    
    alert("Added your collections")})
 }
 buy4(){
  this.title4='Broght'
  this.isDisabled4=true
  this.service.regesterC(this.c4).subscribe((res:any)=>{
    
    alert("Added your collections")})
 }
 buy5(){
  this.title5='Broght'
  this.isDisabled5=true
  this.service.regesterC(this.c5).subscribe((res:any)=>{
    
    alert("Added your collections")})
 }
 buy6(){
  this.title6='Broght'
  this.isDisabled6=true
  this.service.regesterC(this.c6).subscribe((res:any)=>{
    
    alert("Added your collections")})
 }
}
