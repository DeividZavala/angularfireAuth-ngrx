import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <header>
      <nav class="uk-navbar-container" uk-navbar>

        <div class="uk-navbar-left">

          <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
          </ul>

        </div>

      </nav>
    </header>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
