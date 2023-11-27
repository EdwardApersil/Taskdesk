// auth.service.ts

import { Injectable, Inject, InjectionToken } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

export const AUTH_SERVICE = new InjectionToken<AuthService>('AUTH_SERVICE');

@Injectable({
  providedIn: 'root',
  useFactory: (afAuth: AngularFireAuth) => new AuthService(afAuth),
  deps: [AngularFireAuth],
})
export class AuthService {
  user$: Observable<firebase.default.User | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  signUp(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }
}
