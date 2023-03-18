import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LogginService } from '../LogginService.service';
import { Persons } from '../person.model';
import { PersonsServices } from '../persons.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputLastName') inputLastName: ElementRef;

  constructor(
    private logginService: LogginService,
    private personService: PersonsServices
  ) {}

  ngOnInit(): void {}

  addPerson() {
    let pushPerson = new Persons(
      this.inputName.nativeElement.value,
      this.inputLastName.nativeElement.value
    );
    // this.logginService.sendConsoleMessage(`Sending Person ${pushPerson.name} ${pushPerson.lastName}`);
    // this.personCreated.emit(pushPerson);
    this.personService.PersonsAdded(pushPerson);
  }
}
