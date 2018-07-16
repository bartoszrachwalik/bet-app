import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import * as firebase from 'firebase';
import {UserModel} from '../shared/user.model';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {
  }

  signUp(email: string, password: string, user: UserModel) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      (response) =>
        console.log('User successfully registered!'),
      (error) => console.log(error['message']),
    );
  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
              },
              (error) => console.log(error['message'])
            )
          ;
        },
        error => console.log(error['message'])
      );

  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
