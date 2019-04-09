import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  template: `
    <div class="uk-text-center">
      <ng-content select="h1"></ng-content>
      <form class="uk-width-1-1" [formGroup]="form" (ngSubmit)="handleSubmit()">

        <div class="uk-margin">
          <div class="uk-inline uk-width-1-2">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input class="uk-input" type="email" formControlName="email" placeholder="Enter email">
          </div>
        </div>

        <div class="uk-margin">
          <div class="uk-inline uk-width-1-2">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input class="uk-input" type="password" formControlName="password" placeholder="Enter password">
          </div>
        </div>

        <ng-content select=".uk-alert-danger"></ng-content>

        <div class="uk-margin">
          <ng-content select="button"></ng-content>
        </div>

        <div class="uk-margin">
          <ng-content select="a"></ng-content>
        </div>

      </form>
    </div>
  `,
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {

  @Output()
  submitted = new EventEmitter<FormGroup>();

  constructor(
    private fb: FormBuilder
  ) { }

  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });

  handleSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }

  get getEmailFormat() {
    const control = this.form.get('email');
    return control.hasError('email') && control.touched;
  }

  get passwordInvalid() {
    const control = this.form.get('password');
    return control.hasError('required') && control.touched;
  }

}
