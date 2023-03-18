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
  personData: Persons[] = [];

  constructor(private logginService: LogginService) {}

  PersonsAdded(person: Persons) {
    this.logginService.sendConsoleMessage(
      `Person added to Array ${person.name}`
    );
    this.personData.push(person);
  }
}
