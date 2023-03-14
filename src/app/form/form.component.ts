import { Component, EventEmitter, Output } from '@angular/core';
import { Persons } from '../person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() personCreated = new EventEmitter<Persons>();

  // inputName: string = '';
  // inputLastName: string = '';

  addPerson(inputName: HTMLInputElement, inputLastName: HTMLInputElement) {
    let pushPerson = new Persons(inputName.value, inputLastName.value);
    this.personCreated.emit(pushPerson);
  }
}
