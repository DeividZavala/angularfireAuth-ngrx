import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {AuthService, User} from '../../auth/shared/services/auth.service';
import {Store} from 'store';
import {Router} from '@angular/router';

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

        <div class="uk-navbar-right" *ngIf="(user$ | async)?.authenticated">

          <ul class="uk-navbar-nav">
            <li class="uk-active" (click)="onLogout()"><a href="#">Logout</a></li>
          </ul>

        </div>

      </nav>
    </header>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  suscription: Subscription;
  user$: Observable<User>;

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) { }

  async onLogout() {
    await this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  ngOnInit() {
    this.suscription = this.authService.$auth.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

}
