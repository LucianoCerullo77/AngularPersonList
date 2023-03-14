import { Component } from '@angular/core';
import { Persons } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Person List';
  personData: Persons[] = [
    new Persons('Juan', 'Perez'),
    new Persons('Laura', 'Perez'),
    new Persons('Karla', 'Perez'),
  ];

  inputName: string = '';
  inputLastName: string = '';

  addPerson() {
    let pushPerson = new Persons(this.inputName, this.inputLastName);
    this.personData.push(pushPerson);
  }
}
