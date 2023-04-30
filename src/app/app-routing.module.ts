import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormComponent } from './personas/form/form.component';

const routes: Routes = [
  { path: '', component: PersonasComponent },
  { path: 'personas', component: PersonasComponent },
  { path: 'personas/agregar', component: FormComponent },
  { path: 'personas/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
