import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { FormComponent } from './form/form.component';
import { LogginService } from './LogginService.service';
import { PersonsServices } from './persons.service';

@NgModule({
  declarations: [AppComponent, PersonComponent, FormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [LogginService, PersonsServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
