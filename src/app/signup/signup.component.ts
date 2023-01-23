import { AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PasswordMatch } from 'src/validators/passwordMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  teacherAccess: boolean = false;
  loginForm: any;

  constructor(private router: Router, private titleService: Title) {
    this.titleService.setTitle('SignUp title');
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'
          ),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
          ),
        ]),
        name: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      [PasswordMatch('password', 'confirmPassword')]
    );
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('qwerty');
    console.log(this.loginForm);
    if (!this.loginForm.valid) {
      return;
    }
    localStorage.setItem('user', this.loginForm.value);
    // this.router.navigate(['/home']);
  }

  HandleClickSignUp() {
    this.router.navigate(['/login']);
    console.log('HandleClickSignUp');
  }
  getControl(name: any): AbstractControl | null {
    return this.loginForm.get(name);
  }

  teacherSignUp() {
    console.log('  TEACHER   SIGNUP ');
  }

  studentSignUp() {
    console.log('  STUDENT   SIGNUP ');
  }
}
