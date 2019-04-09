import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login.component';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const ROUTES: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ]
})
export class LoginModule { }
