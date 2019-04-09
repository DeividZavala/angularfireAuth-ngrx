import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './containers/auth-form.component';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AuthFormComponent
  ]
})
export class SharedModule { }
