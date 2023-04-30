import { Component, OnInit } from '@angular/core';
import { LogginService } from '../../LogginService.service';
import { Persons } from '../../person.model';
import { PersonsServices } from '../../persons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  inputName: string;
  inputLastName: string;

  constructor(
    private logginService: LogginService,
    private personService: PersonsServices,
    private router: Router
  ) {
    this.personService.greeting.subscribe((indice: Number) => {
      alert(`Index number = ${indice}`);
    });
  }

  ngOnInit(): void {}

  onGuardarPersona() {
    let pushPerson = new Persons(this.inputName, this.inputLastName);
    this.personService.PersonsAdded(pushPerson);
    this.router.navigate(['personas']);
  }
}
