import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthServiceService} from '../service/auth/auth-service.service'
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users = [];
  addRegistro : FormGroup;
  name : string;
  age: string;
  email: string;
  id: string;

  constructor(private _router : Router, private _authService : AuthServiceService, private _formBuilder:FormBuilder) {
    if(_authService.isAuthenticated() == false){
      _router.navigate(['/'])
    }
   }

  ngOnInit(): void {
    this._authService.getUser().subscribe((data: any[])=>{
      console.log(data);
      this.users = data;
    })
    this.addRegistro = this._formBuilder.group({
      name: ['',Validators.required],
      age: ['',Validators.required],
      email: ['',Validators.required]
    })
    
  }

  logout() : void{
    localStorage.removeItem('user')
    this._router.navigate(['/'])
  }

  deleteUser(id:string):void{
    console.log(id)
    this._authService.deleteUser(id).subscribe(access=>{
      console.log("Todo bien")
      window.location.reload();
    },error=>{
      console.log("Datos inválidos")
    })
  }

  addUser():void{
    const data = this.addRegistro.value;
    if(data.name&& data.age && data.email){
      this._authService.addUser(data.name,data.age,data.email).subscribe(access=>{
        window.location.reload();
      },error=>{
        console.log("Datos inválidos")
      })
    }
  }

  update(id:string):void{
    this._authService.getOneUser(id).subscribe((data:JSON)=>{
      let registro = data;
      this.name = registro['name']
      this.age= registro['age']
      this.email = registro['email']
      this.addRegistro = this._formBuilder.group({
        name: [this.name],
        age: [this.age],
        email: [this.email]
    });
   
    })
  }


}
