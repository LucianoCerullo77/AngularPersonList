import { Component } from '@angular/core';
import { LogginService } from './LogginService.service';
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

  constructor(private logginService: LogginService) {
  }


  PersonsAdded(person: Persons) {
    this.logginService.sendConsoleMessage(`Person added to Array ${person.name}`)
    this.personData.push(person);
  }
}
