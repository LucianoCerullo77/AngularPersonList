import { Component, OnInit } from '@angular/core';
import { LogginService } from '../../LogginService.service';
import { Persons } from '../../person.model';
import { PersonsServices } from '../../persons.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  inputName: string;
  inputLastName: string;
  index: number;
  editMode: number;

  constructor(
    private logginService: LogginService,
    private personService: PersonsServices,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personService.greeting.subscribe((indice: Number) => {
      alert(`Index number = ${indice}`);
    });
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.editMode = +this.route.snapshot.queryParams['editMode'];
    if (this.editMode != null && this.editMode === 1) {
      let persona: Persons = this.personService.findPersona(this.index);
      this.inputName = persona.name;
      this.inputLastName = persona.lastName;
    }
  }

  onSavePerson() {
    let pushPerson = new Persons(this.inputName, this.inputLastName);
    if (this.editMode != null && this.editMode === 1) {
      this.personService.modifyPerson(this.index, pushPerson);
    } else {
      this.personService.PersonsAdded(pushPerson);
    }
    this.router.navigate(['personas']);
  }

  deletePerson() {
    if (this.index != null) {
      this.personService.deletePerson(this.index);
    }
    this.router.navigate(['personas']);
  }
}
