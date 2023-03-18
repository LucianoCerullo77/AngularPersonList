import { Component, OnInit } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Persons } from './person.model';
import { PersonsServices } from './persons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Person List';
  personData: Persons[] = [];

  constructor(
    private logginService: LogginService,
    private PersonService: PersonsServices
  ) {}

  ngOnInit(): void {
    this.personData = this.PersonService.personData;
  }

  PersonsAdded(person: Persons) {
    // this.logginService.sendConsoleMessage(
    //   `Person added to Array ${person.name}`
    // );
    // this.personData.push(person);

    this.PersonService.PersonsAdded(person);
  }
}
