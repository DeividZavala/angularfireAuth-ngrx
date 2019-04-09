import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
    <div class="uk-flex uk-flex-center uk-flex-middle">
      <app-auth-form class="uk-width-1-2">
        <h1>Register</h1>
        <button class="uk-button uk-button-primary">Register</button>
        <a routerLink="/auth/login">Already have an account?</a>
        <div class="uk-alert-danger" uk-alert *ngIf="error">
          <p>{{error}}</p>
        </div>
      </app-auth-form>
    </div>
  `,
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error: string;

  constructor() { }

  ngOnInit() {
  }

}
