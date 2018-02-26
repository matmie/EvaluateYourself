import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '../shared/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsPatterns } from '../shared/utils/validators-patterns';
import { User } from '../shared/model/user';

@Component({
    selector: 'ey-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    private registerForm: FormGroup;
    private emailFormControl: FormControl;
    private passwordFormControl: FormControl;
    private passwordConfirmationFormControl: FormControl;

    private user: User;

    constructor(private _dialogRef: MatDialogRef<RegisterComponent>, private _authService: AuthService, private _formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.emailFormControl = new FormControl('', [Validators.required, Validators.pattern(ValidatorsPatterns.EMAIL_REGEX)]);
        this.passwordFormControl = new FormControl('', Validators.required);
        this.passwordConfirmationFormControl = new FormControl('', Validators.required);
        this.registerForm = new FormGroup({
            emailFormControl: this.emailFormControl,
            passwordFormControl: this.passwordFormControl,
            passwordConfirmationFormControl: this.passwordConfirmationFormControl
        });
    }
    cancel(): void {
        this._dialogRef.close(null);
    }
    setTestData(): void {
        this.registerForm.setValue({
            emailFormControl: "test@test.pl",
            passwordFormControl: "test@test.pl",
            passwordConfirmationFormControl: "test@test.pl"
        });
    }
    setAddressEmail(): void {
        this.registerForm.patchValue({
            emailFormControl: "test@test.pl"
        });
    }


}
