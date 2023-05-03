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

  LoadPersons() {
    return this.httpclient.get(
      'https://angularpersonlist-default-rtdb.firebaseio.com/datos.json'
    );
  }

  modifyPerson(index: number, person: Persons) {
    let url: string;
    url = `https://angularpersonlist-default-rtdb.firebaseio.com/datos/${index}.json`;
    this.httpclient.put(url, person).subscribe(
      (response) => console.log(`Result : ${response}`),
      (error) => {
        console.log(`error: ${error}`);
      }
    );
  }

  deletePerson(index: number) {
    let url: string;
    url = `https://angularpersonlist-default-rtdb.firebaseio.com/datos/${index}.json`;
    this.httpclient.delete(url).subscribe(
      (response) => console.log(`Result : ${response}`),
      (error) => {
        console.log(`error: ${error}`);
      }
    );
  }
}
