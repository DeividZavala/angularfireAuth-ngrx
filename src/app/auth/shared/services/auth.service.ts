import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';
import {Store} from 'store';
import {AngularFireAuth} from '@angular/fire/auth';

export interface User {
  email: string;
  uid: string;
  authenticated: boolean;
}

@Injectable()
export class AuthService {

  $auth = this.af.authState.pipe(
    tap(next => {
      if (!next) {
        this.store.set('user', null);
      }
      const {email, uid} = next;
      const user: User = {
        email,
        uid,
        authenticated: true
      };
      this.store.set('user', user);
    })
  );

  constructor(
    private store: Store,
    private af: AngularFireAuth
  ) { }

  get authState() {
    return this.af.authState;
  }

  get user() {
    return this.af.auth.currentUser;
  }

  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.af.auth.signOut();
  }

}
