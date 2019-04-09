import { Injectable } from '@angular/core';

export interface User {
  email: string;
  uid: string;
  authenticated: boolean;
}

@Injectable()
export class AuthService {

  constructor() { }
}
