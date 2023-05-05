import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Person List';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    firebase.default.initializeApp({
      apiKey: 'AIzaSyAxWiA735tCO-o8MQGGg_fd0Y16zXBcq80',
      authDomain: 'angularpersonlist.firebaseapp.com',
    });
  }

  isAuthenticated() {
    return this.loginService.isAuthenticated();
  }

  logOutBtn(){
    this.loginService.logOut()
  }
}
