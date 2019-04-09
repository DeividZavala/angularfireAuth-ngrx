import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import {AuthModule} from './auth/auth.module';
// @ts-ignore
import {Store} from 'store';

const ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'todos'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
