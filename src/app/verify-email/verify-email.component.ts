import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public ngAuthService: AuthService) { }

  ngOnInit(): void {
  }

//  ngAuthService.SendVerificationMail()
  sendVerificationMail(){
    console.log('send verification ');
    this.ngAuthService.SendVerificationMail()
  }
}
