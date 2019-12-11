import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', {
          validators: [
            Validators.required
          ]
        }
      ],
      lastName: ['', {
        validators: [
          Validators.required
        ]
      }],
      email: ['', {
        validators: [
          Validators.required,
          Validators.email
        ]
      }],
      password: ['', {
        validators: [
          Validators.required,
          Validators.minLength(6)
        ]
      }]
    });
  }

  public submit(form): void {
    alert('Signup object: ' + JSON.stringify(form, null , 1));
  }

}
