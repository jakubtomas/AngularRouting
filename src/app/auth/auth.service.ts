import {Injectable, NgZone} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
//import { auth } from 'firebase/app';
import {Router} from '@angular/router';

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userState: any;

    //todo what is ngZone
    constructor(private db: AngularFireDatabase,
                public router: Router,
                public afs: AngularFirestore,
                public afAuth: AngularFireAuth,
                public ngZone: NgZone) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                console.log("I have user set localStorage ");
                console.log(user);
                console.log("////////");
                
                
              this.userState = user;
              localStorage.setItem('user', JSON.stringify(this.userState));
              JSON.parse(localStorage.getItem('user'));
            } else {
                console.log("I do not have user set null");
                
              localStorage.setItem('user', null);
              JSON.parse(localStorage.getItem('user'));
            }
        });

    }// end constructor body

    SignIn(email, password) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                this.ngZone.run(() => {

                    // todo navigation
                  //  this.router.navigate(['dashboard']);
                   //todo message

                });
                this.SetUserData(result.user);
            }).catch((error) => {

                //todo message
                window.alert(error.message);
            });
    }

    SignUp(email, password): Promise<any> {

        return this.afAuth.createUserWithEmailAndPassword(email, password)
            .then((result) => {

                // delete comment
                //this.SendVerificationMail();
                console.log('result of create User');
                console.log(result);
                console.log("result user");
                console.log(result.user);
                
                console.log("re");
                
                
                console.log(result.user.email);
                console.log(result.user.emailVerified);

                //  result.user.sendEmailVerification()

                this.SendVerificationMail();
                this.SetUserData(result.user);
            }).catch((error) => {
                console.log('Auth Service: signup error', error);

                if (error.code)
                    return { isValid: false, message: error.message };

            });
    }

    SendVerificationMail() {
        return this.afAuth.currentUser.then(u => u.sendEmailVerification())
            .then(() => {
                this.router.navigate(['email-verification']);
            });
    }

    ForgotPassword(passwordResetEmail) {
        return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
                window.alert('Password reset email sent, check your inbox.');
            }).catch((error) => {
                window.alert(error);
            });
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false) ? true : false;
    }

    /*GoogleAuth() {
      return this.AuthLogin(new auth.GoogleAuthProvider());
    }*/

    AuthLogin(provider) {
        return this.afAuth.signInWithPopup(provider)
            .then((result) => {
                this.ngZone.run(() => {
                    this.router.navigate(['dashboard']);
                });
                this.SetUserData(result.user);
            }).catch((error) => {
                window.alert(error);
            });
    }

    SetUserData(user) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        const userState: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userState, {
            merge: true
        });
    }

    SignOut() {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['sign-in']);
        });
    }

}
