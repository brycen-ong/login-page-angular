import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm(){
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      occupation: ['', Validators.required]      
    })
  }

  signUp(value){
    this.authService.signUp(value).then(data => {
      console.log(data);
      this.errorMessage = '';
      this.successMessage = 'Success!';
      this.router.navigate(['/dashboard']);
    },err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = '';
    })
  }

  ngOnInit(): void {
  }

}
