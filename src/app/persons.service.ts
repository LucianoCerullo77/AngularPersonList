import { EventEmitter, Injectable } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Persons } from './person.model';
import { DataServices } from './data.services';

@Injectable()
export class PersonsServices {
  personData: Persons[] = [];

  greeting = new EventEmitter<Number>();

  constructor(
    private logginServices: LogginService,
    private dataServices: DataServices
  ) {}

  getPersons() {
    return this.dataServices.LoadPersons();
  }

  setPersons(persons: Persons[]) {
    this.personData = persons;
  }

  PersonsAdded(person: Persons) {
    this.logginServices.sendConsoleMessage(`Sending person ${person.name}`);
    if (this.personData == null) {
      this.personData = [];
    }
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
    this.dataServices.modifyPerson(index, person);
  }

  deletePerson(index: number) {
    this.personData.splice(index, 1);
    this.dataServices.deletePerson(index);
    //saved again to regenerate index on DB
    this.modifyPersons();
  }

  modifyPersons() {
    if (this.personData != null) {
      this.dataServices.savePersons(this.personData);
    }
  }
}
