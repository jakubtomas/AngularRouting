import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';
import {childOfKind} from 'tslint';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  error: string = null;
  message:object = null;
  firebaseErrorMessage: string;


  constructor(private authService: AuthService) {
    this.firebaseErrorMessage = '';
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;

    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    if (this.isLoginMode) {
      //todo doplinti
      console.log("run function login");

      this.authService.SignIn(email,password).then((result) => {
        if (result == null) {// null is success, false means there was an error
          console.log('result is null');
          console.log("som prihalsenz ");
          

        } else {
          console.log("chyba niesom prishalsenz ");
          
          console.log('result is not null');
          //console.log(result.isValid);
          console.log('resut message ');
         // console.log(result.message);


          this.firebaseErrorMessage = result.message;
        }
      }).catch((error) => {
        console.log("odchytavam error");
        console.log(error);
        

      });
    } else {
      /*this.authService.SignUp(email, password).subscribe(
          resData => {
            console.log(resData);
            this.isLoading = false;
          },
          errorMessage => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
          }
      );*/

      console.log("run registration");

     // this.message =  this.authService.SignUp(email, password);
      this.authService.SignUp(email, password).then((result) => {
        if (result == null) {// null is success, false means there was an error
          console.log('result is null');

        } else {
          console.log('result is not null');
          console.log(result);
          console.log('resut message ');
          console.log(result.message);


          this.firebaseErrorMessage = result.message;
          form.reset();
        }

      }).catch((error) => {

      });

    }
  }

  ngOnInit(): void {
  }

}
