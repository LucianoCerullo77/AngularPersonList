import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Person List';

  constructor() {}

  ngOnInit(): void {
    firebase.default.initializeApp({
      apiKey: 'AIzaSyAxWiA735tCO-o8MQGGg_fd0Y16zXBcq80',
      authDomain: 'angularpersonlist.firebaseapp.com',
    });
  }
}
