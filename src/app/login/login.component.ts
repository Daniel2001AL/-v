import { Component, OnInit} from '@angular/core';
import {ServiceService} from '.././service.service'
import {AuthServiceService} from '../service/auth/auth-service.service'
import {Router} from '@angular/router';
import { AuthService } from '../shared/auth.service';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [],
  

})

export class LoginComponent implements OnInit { 

loginFormGroup:FormGroup;

  constructor(public servicesServices : ServiceService, private router: Router, public afth : AngularFireAuth, public authS : AuthService, 
    private _formBuilder:FormBuilder, private _authService : AuthServiceService ) { 
      if(_authService.isAuthenticated()){
        router.navigate(['dashboard'])
      }
    }




  ngOnInit(): void {
    this.loginFormGroup = this._formBuilder.group({
      email : ['', Validators.required],
      password :['', Validators.required],
    })
  }
   
loginGg(){
  
  this.authS.loginGgl().then((res)=> {
    this.router.navigate(['/dashboard'])
  }).catch((err)=> {console.log('FFFFFFFFf')})
}

login(){
  const data = this.loginFormGroup.value;
  if(data.email && data.password){
    this._authService.login(data.email, data.password).subscribe(access =>{
      localStorage.setItem('user', JSON.stringify(access));
      this.router.navigate(['dashboard'])
    }, error => {
      
    }
    );
  }
}



}
