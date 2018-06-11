// Angular Imports
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ValidatorUtil} from '../../shared/utils/validator.util';
import {AppUtils} from '../../shared/utils/app.util';

// importing utils




@Component({
  selector: 'eod-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error = '';

  constructor() {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, ValidatorUtil.emailValidator]),
      'password': new FormControl('', [Validators.required])
    });

  }

  onSubmit() {
    AppUtils.markAsDirty(this.loginForm);
    if (this.loginForm.valid) {
    }
  }

  resetError() {
    this.error = '';
  }

}
