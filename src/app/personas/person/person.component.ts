import { Component, Input } from '@angular/core';
import { Persons } from '../../person.model';
import { PersonsServices } from '../../persons.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  @Input() person: Persons;
  @Input() indice: number;

  constructor(private personsServices: PersonsServices) {}

  emitGreeting() {
    this.personsServices.greeting.emit(this.indice);
  }
}
