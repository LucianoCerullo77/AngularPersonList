import { Component, EventEmitter, Output } from '@angular/core';
import { Persons } from '../person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() personCreated = new EventEmitter<Persons>();

  inputName: string = '';
  inputLastName: string = '';

  addPerson() {
    let pushPerson = new Persons(this.inputName, this.inputLastName);
    this.personCreated.emit(pushPerson);
  }
}
