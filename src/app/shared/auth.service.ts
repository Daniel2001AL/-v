import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from "firebase";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore} from '@angular/fire/firestore'


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    public user: User;
    constructor(private afAuth : AngularFireAuth, private afs: AngularFirestore, private router : Router) {
    }
async loginGgl(){
    const provider = new auth.GoogleAuthProvider();
    const credential =  this.afAuth.signInWithPopup(provider);
    return credential
}

}