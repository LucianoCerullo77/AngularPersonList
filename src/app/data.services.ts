import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persons } from './person.model';

@Injectable()
export class DataServices {
  constructor(private httpclient: HttpClient) {}

  savePersons(persons: Persons[]) {
    this.httpclient
      .put(
        'https://angularpersonlist-default-rtdb.firebaseio.com/datos.json',
        persons
      )
      .subscribe(
        (response) => console.log(`Saved results ${response}`),
        (error) => console.log(`error on save results ${error}`)
      );
  }
}
