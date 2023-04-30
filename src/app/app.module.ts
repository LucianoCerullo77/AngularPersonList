import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { FormComponent } from './form/form.component';
import { LogginService } from './LogginService.service';
import { PersonsServices } from './persons.service';
import { PersonasComponent } from './personas/personas.component';

@NgModule({
  declarations: [AppComponent, PersonComponent, FormComponent, PersonasComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [LogginService, PersonsServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
