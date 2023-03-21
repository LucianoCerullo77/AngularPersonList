import { EventEmitter, Injectable } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Persons } from './person.model';

@Injectable()
export class PersonsServices {
  personData: Persons[] = [
    new Persons('Juan', 'Perez'),
    new Persons('Laura', 'Perez'),
    new Persons('Karla', 'Perez'),
  ];

  greeting = new EventEmitter<Number>()

  constructor(private logginServices: LogginService) {}

  PersonsAdded(person: Persons) {
    this.logginServices.sendConsoleMessage(`Sending person ${person.name}`);
    this.personData.push(person);
  }
}
