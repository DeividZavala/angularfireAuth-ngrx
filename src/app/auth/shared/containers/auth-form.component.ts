import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  template: `
    <div class="uk-text-center">
      <ng-content select="h1"></ng-content>
      <form class="uk-width-1-1">

        <div class="uk-margin">
          <div class="uk-inline uk-width-1-2">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input class="uk-input" type="text">
          </div>
        </div>

        <div class="uk-margin">
          <div class="uk-inline uk-width-1-2">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input class="uk-input" type="text">
          </div>
        </div>

        <ng-content select=".error"></ng-content>

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
export class AuthFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
