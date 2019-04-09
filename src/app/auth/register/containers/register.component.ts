import { Component } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  template: `
    <div class="uk-flex uk-flex-center uk-flex-middle">
      <app-auth-form class="uk-width-1-2" (submitted)="registerUser($event)">
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
export class RegisterComponent {

  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  async registerUser(event) {
    const {email, password} = event.value;
    try {
      await this.authService.createUser(email, password);
      this.router.navigate(['/']);
    } catch (e) {
      this.error = e.message;
    }
  }

}
