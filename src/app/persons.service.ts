import { EventEmitter, Injectable } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Persons } from './person.model';
import { DataServices } from './data.services';

@Injectable()
export class PersonsServices {
  personData: Persons[] = [
    new Persons('Juan', 'Perez'),
    new Persons('Laura', 'Perez'),
    new Persons('Karla', 'Perez'),
  ];

  greeting = new EventEmitter<Number>();

  constructor(
    private logginServices: LogginService,
    private dataServices: DataServices
  ) {}

  PersonsAdded(person: Persons) {
    this.logginServices.sendConsoleMessage(`Sending person ${person.name}`);
    this.personData.push(person);
    this.dataServices.savePersons(this.personData);
  }

  findPersona(index: number) {
    let persona: Persons = this.personData[index];
    return persona;
  }

  modifyPerson(index: number, person: Persons) {
    let pushPerson = this.personData[index];
    pushPerson.name = person.name;
    pushPerson.lastName = person.lastName;
  }

  deletePerson(index: number) {
    this.personData.splice(index, 1);
  }
}
