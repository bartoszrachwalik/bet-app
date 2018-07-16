import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {UserModel} from '../../shared/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  onSignup() {
    const user = new UserModel(null, this.signupForm.get('name').value, null, null, null, null);
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    this.authService.signUp(email, password, user);
  }

}
