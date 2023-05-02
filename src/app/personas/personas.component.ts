import { Component } from '@angular/core';
import { Persons } from '../person.model';
import { LogginService } from '../LogginService.service';
import { PersonsServices } from '../persons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  personData: Persons[] = [];

  constructor(
    private logginService: LogginService,
    private PersonService: PersonsServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.PersonService.getPersons().subscribe((persons : any ) => {
      this.personData = persons;
      this.PersonService.setPersons(persons)
    });
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }
}
