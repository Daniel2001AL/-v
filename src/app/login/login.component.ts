import { style } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { AppComponent } from '../app.component';
import {ServiceService} from '.././service.service'
import {Router} from '@angular/router';
import { AuthService } from '../shared/auth.service';
import {auth} from 'firebase/app';
import 'firebase/auth';
import { from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { mapTo, switchMap, take } from 'rxjs/operators';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [],
  

})

export class LoginComponent implements OnInit { 


  constructor(public servicesServices : ServiceService, public router: Router, public afth : AngularFireAuth, public authS : AuthService) { }




  ngOnInit(): void {
  }
   
loginGg(){
  
  this.authS.loginGgl().then((res)=> {
    this.router.navigate(['/dashboard'])
  }).catch((err)=> {console.log('FFFFFFFFf')})
}

}
