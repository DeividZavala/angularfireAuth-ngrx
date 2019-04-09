import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', loadChildren: './login/login.module#LoginModule'},
      {path: 'register', loadChildren: './register/register.module#RegisterModule'}
    ]
  }
];

const config = {
  apiKey: 'AIzaSyBR9uyKk1AblYSsSywTRN_e1vIL2U4e91Y',
  authDomain: 'orgones-mexico.firebaseapp.com',
  databaseURL: 'https://orgones-mexico.firebaseio.com',
  projectId: 'orgones-mexico',
  storageBucket: 'orgones-mexico.appspot.com',
  messagingSenderId: '192998613959'
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ]
})
export class AuthModule { }
