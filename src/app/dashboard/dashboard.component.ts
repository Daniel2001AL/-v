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

  deleteProduct(id:string):void{
    this._authService.deleteUser(id).subscribe(access=>{
      console.log("Todo bien")
      window.location.reload();
    },error=>{
      console.log("Datos inválidos")
    })
  }

  addProducto():void{
    const data = this.addRegistro.value;
    if(data.name&& data.age && data.email){
      this._authService.addUser(data.name,data.age,data.age).subscribe(access=>{
        window.location.reload();
      },error=>{
        console.log("Datos inválidos")
      })
    }
  }


}
