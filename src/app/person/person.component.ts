import { Component, Input } from '@angular/core';
import { Persons } from '../person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  @Input() person: Persons;
  @Input() indice: number;
}
