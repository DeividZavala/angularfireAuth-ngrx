import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div  class="uk-flex uk-flex-center uk-flex-middle">
      <app-auth-form class="uk-width-1-2" (submitted)="loginUser($event)">
        <h1>Login</h1>
        <button class="uk-button uk-button-primary">Login</button>
        <a routerLink="/auth/register">Not registered?</a>
        <div class="uk-alert-danger" uk-alert *ngIf="error">
          <p>{{error}}</p>
        </div>
      </app-auth-form>
    </div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  async loginUser(event) {
    const {email, password} = event.value;
    try {
      await this.authService.loginUser(email, password);
      this.router.navigate(['/']);
    } catch(e) {
      this.error = e.message;
    }
  }

}
