import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  error: string = null;



  constructor(private authService: AuthService) {}


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
      // ...
      console.log("run function login");
      
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
      
      this.authService.SignUp(email, password)

    }

    form.reset();
  }

  ngOnInit(): void {
  }

}
