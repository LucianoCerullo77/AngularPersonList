import { Persons } from './person.model';

export class PersonsServices {
  personData: Persons[] = [
    new Persons('Juan', 'Perez'),
    new Persons('Laura', 'Perez'),
    new Persons('Karla', 'Perez'),
  ];
  PersonsAdded(person: Persons) {
    this.personData.push(person);
  }
}
