import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormControl, Validators, NgModel, FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from '../shared/services/auth.service';
import { IUser, User } from '../shared/model/user';
import { ValidatorsPatterns } from '../shared/utils/validators-patterns';


@Component({
    selector: 'ey-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    user: IUser = null;
    loginFailed: boolean = false;

    //FormControls


    constructor(private _dialogRef: MatDialogRef<LoginComponent>, private _authService: AuthService, private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.user = new User();
        this.loginForm = this._formBuilder.group({
            passwordFormControl: ['', Validators.required],
            emailFormControl: ['', [Validators.required, Validators.pattern(ValidatorsPatterns.EMAIL_REGEX)]]
        });
    }

    login(): void {
        this._authService.login(this.user.email, this.user.password).subscribe(user => {
            this._dialogRef.close(user);
        }, error => {
            this.loginFailed = true;
        });
    }

    cancel(): void {
        this._dialogRef.close(null);
    }

    getErrorMessage(): string {
        return "Brak obsługi błedów";
    }
}
