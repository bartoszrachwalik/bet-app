import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import * as firebase from 'firebase';
import {UserModel} from '../shared/user.model';
import {DataStorageService} from '../shared/data-storage.service';

@Injectable()
export class AuthService {
  token: string;
  users = [];

  constructor(private router: Router,
              private dataStorageService: DataStorageService) {
  }

  signUp(email: string, password: string, name: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      (userData) => {
        const user = new UserModel(userData.user.uid, name, null, null, null, null);
        this.addUserToDatabase(user);
      },
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

  private addUserToDatabase(user) {
    this.dataStorageService.getUsers().subscribe(
      (users: UserModel[]) => {
        if (users != null) {
          this.users = users;
        }
        this.users.push(user);
        this.dataStorageService.updateUsers(this.users).subscribe(
          () => console.log('Successfully added user!'),
          (error) => console.log('Could not add user!')
        );
        console.log('User successfully registered!');
      }
    );
  }
}
