import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ///todo inject service here
  constructor(public authService: AuthService,
  public afAuth: AngularFireAuth, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

}
