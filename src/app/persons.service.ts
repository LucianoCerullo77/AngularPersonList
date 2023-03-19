import { LogginService } from './LogginService.service';
import { Persons } from './person.model';

export class PersonsServices {
  personData: Persons[] = [
    new Persons('Juan', 'Perez'),
    new Persons('Laura', 'Perez'),
    new Persons('Karla', 'Perez'),
  ];

  constructor(private logginServices : LogginService){}


  PersonsAdded(person: Persons) {
    this.logginServices.sendConsoleMessage(`Sending person ${person}`)

    this.personData.push(person);
  }
}
