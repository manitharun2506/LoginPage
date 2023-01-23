import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: any;
  teacherAccess: boolean = false;
  title = 'material-login';

  constructor(private router: Router, private titleService: Title) {
    this.titleService.setTitle('Login title');
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
        ),
      ]),
    });
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
    this.router.navigate(['/signup']);
    console.log("HandleClickSignUp")
  }

   teacherSignIn(){
    console.log(" TEACHER SIGN IN  1")
   }
   
   studentSignIn(){
    console.log(" STUDENT SIGN IN  2")
    
   }
   

}
