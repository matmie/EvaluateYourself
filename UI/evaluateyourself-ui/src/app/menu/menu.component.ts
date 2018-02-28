import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { LoginComponent } from '../login/login.component';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RegisterComponent } from '../register/register.component';

@Component({
    selector: 'ey-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    constructor(private _dialog: MatDialog, private _snackBar: MatSnackBar, private _authService: AuthService, private _router: Router, private _translate: TranslateService) { }

    ngOnInit() {
    }

    openLoginDialog(): void {
        let dialogRef = this._dialog.open(LoginComponent, { width: '400px', disableClose: true });
        dialogRef.afterClosed().subscribe(
            result => {
                if (result) {
                    this._translate.get("login.afterLogInSuccess").subscribe(translation => {
                        this._snackBar.open(translation, null, { duration: 3000 });
                        this._router.navigate(['/news']);
                    });
                }
            }
        );
    }

    openRegisterDialog(): void {
        let dialogRef = this._dialog.open(RegisterComponent, { width: '400px', disableClose: true });
        dialogRef.afterClosed().subscribe(
            result => {
                if (result) {
                    this._translate.get("register.afterRegisterSuccess").subscribe(translation => {
                        this._snackBar.open(translation, null, { duration: 3000 });
                        this._router.navigate(['/news']);
                    });
                }
            }
        );
    }

    logout(): void {
        this._authService.logout().subscribe(result => {
            this._translate.get("login.afterLogOutSuccess").subscribe(translation => {
                this._snackBar.open(translation, null, { duration: 3000 });
                this._router.navigate(['/news']);
            });
        })
    }

    isAuthenticated(): boolean {
        return this._authService.isAuthenticated();
    }

}
