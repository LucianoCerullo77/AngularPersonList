import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
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

  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputLastName') inputLastName: ElementRef;

  addPerson() {
    let pushPerson = new Persons(
      this.inputName.nativeElement.value,
      this.inputLastName.nativeElement.value
    );
    this.personCreated.emit(pushPerson);
  }
}
