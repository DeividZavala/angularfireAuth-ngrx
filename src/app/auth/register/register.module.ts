import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './containers/register.component';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const ROUTES: Routes = [
  {path: '', component: RegisterComponent}
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ]
})
export class RegisterModule { }
