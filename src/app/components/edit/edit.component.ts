import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from'@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  user$ = this.authService.user$;

  constructor(
    public authService: AuthService,
    public afAuth: AngularFireAuth,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.createForm();
  }

  createForm(){
    this.editForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      occupation: ['', Validators.required]
    })
    this.user$.subscribe(data => {
      this.editForm.setValue({
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        age: data.age,
        address: data.address,
        occupation: data.occupation,
      })
    })
  }


  edit(value){
    this.authService.edit(value).then(data => {
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
