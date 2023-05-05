import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormComponent } from './personas/form/form.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guard.service';

const routes: Routes = [
  { path: '', component: PersonasComponent, canActivate: [LoginGuardian] },
  {
    path: 'personas',
    component: PersonasComponent,
    canActivate: [LoginGuardian],
    children: [
      { path: 'agregar', component: FormComponent },
      { path: ':id', component: FormComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
