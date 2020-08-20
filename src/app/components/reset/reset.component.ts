import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from'@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  resetForm: FormGroup;


  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.createForm();
  }

  createForm(){
    this.resetForm = this.fb.group({
      email: ['',Validators.required]
    })
  }

  forgotPassword(value){
    this.authService.resetPassword(value.email).then(() => {
      this.router.navigate(['/sign-in']);
    })
  }

  ngOnInit(): void {
  }

}
