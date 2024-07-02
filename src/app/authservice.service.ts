import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 apiurl="http://localhost:3000/";
 apiurl1="http://localhost:3000/user"
 apiurl2="http://localhost:3000/clist";
 
  constructor(private http:HttpClient) { }
  regesterUser(inputdata:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(inputdata);
    console.log(body)
    return this.http.post(this.apiurl + 'user', body,{'headers':headers , observe: 'response'})
  }
  regesterC(inputdata:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(inputdata);
    console.log(body)
    return this.http.post(this.apiurl + 'clist', body,{'headers':headers , observe: 'response'})
  }

  
  getbyid(dat:any){
    
    return this.http.get(this.apiurl1+'/?name='+dat)
  }
  getAll(){
    return this.http.get(this.apiurl)
  }
  
  proceedReg(inputdata:any){
    return this.http.put(this.apiurl,inputdata)
  }
  isLoggedin(){
    return sessionStorage.getItem('id')!=null;
  }
  AddCour(inputdata:any): Observable<any> {
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(inputdata);
      console.log(body)
      return this.http.post(this.apiurl + 'clist', body,{'headers':headers , observe: 'response'})
    }
    getByname(data:any){
      return this.http.get(this.apiurl2+'/?user='+data)
    }
    deleteItem(id1:any){
      return this.http.delete(this.apiurl2+'/'+id1)
    }
  }

