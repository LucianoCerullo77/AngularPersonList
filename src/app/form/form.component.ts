import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { LogginService } from '../LogginService.service';
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

  constructor(private logginService: LogginService) {}

  addPerson() {
    let pushPerson = new Persons(
      this.inputName.nativeElement.value,
      this.inputLastName.nativeElement.value
    );
    this.logginService.sendConsoleMessage(`Sending Person ${pushPerson.name} ${pushPerson.lastName}`);
    this.personCreated.emit(pushPerson);
  }
}
