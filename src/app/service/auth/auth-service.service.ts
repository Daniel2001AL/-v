import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  api: String = 'http://backprojectweb.herokuapp.com/'
  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean{
    let user  = JSON.parse(localStorage.getItem('user'));

    if(user){
        return user['token']? true : false
    }else{
      return false
    }
  }

  login(username : String, password : String) : Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json', 
      })
    };
    return this.http.post(`${this.api}api/v1/login/`, {username, password}, httpOptions); 
  }

  getUser(){
    let user = JSON.parse(localStorage.getItem('user'));
    let token = user['token']
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      })
    };
    return this.http.get(`${this.api}api/v1/profile/profileModelGeneral_url`,httpOptions);
  }

  getOneUser(id: string){
    let user = JSON.parse(localStorage.getItem('user'));
    let token = user['token']
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      })
    };
    return this.http.get(`${this.api}api/v1/profile/profileModelSpecific_url/${id}`,httpOptions);
  }

  addUser(name: string, age: string,email: string):Observable<any>{
    let user = JSON.parse(localStorage.getItem('user'));
    let token = user['token']
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      })
    };
    return this.http.post(`${this.api}api/v1/profile/profileModelGeneral_url`,{name,age,email},httpOptions);
  }

  deleteUser(id: string):Observable<any>{
    let user = JSON.parse(localStorage.getItem('user'));
    let token = user['token']
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      })
    };
    return this.http.delete(`${this.api}api/v1/profile/profileModelSpecific_url/${id}`,httpOptions);
  }

  updateUser(id: string, name: string, age:string,email:string):Observable<any>{
    let user = JSON.parse(localStorage.getItem('user'));
    let token = user['token']
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      })
    };
    return this.http.put(`${this.api}api/v1/profile/profileModelSpecific_url/${id}`,{name,age,email},httpOptions);
  }
}

