import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormControl, Validators, NgModel, FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from '../shared/services/auth.service';
import { ValidatorsPatterns } from '../shared/utils/validators-patterns';
import { User } from '../shared/model/user';


@Component({
    selector: 'ey-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    private loginForm: FormGroup;
    private passwordFormControl: FormControl;
    private emailFormControl: FormControl;

    private loginFailed: boolean = false;

    private user: User;

    constructor(private _dialogRef: MatDialogRef<LoginComponent>, private _authService: AuthService, private _formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.passwordFormControl = new FormControl('', Validators.required);
        this.emailFormControl = new FormControl('', [Validators.required, Validators.pattern(ValidatorsPatterns.EMAIL_REGEX)]);
        this.loginForm = this._formBuilder.group({
            passwordFormControl: this.passwordFormControl,
            emailFormControl: this.emailFormControl
        });
    }

    login(): void {
        this._authService.login(this.emailFormControl.value, this.passwordFormControl.value).subscribe(user => {
            this._dialogRef.close(user);
        }, error => {
            this.loginFailed = true;
        });
    }

    cancel(): void {
        this._dialogRef.close(null);
    }

    getErrorMessage(): string {
        return "TODO:Brak obsługi błedów";
    }
}
