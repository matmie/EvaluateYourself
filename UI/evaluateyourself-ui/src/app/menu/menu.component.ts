import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { LoginComponent } from '../login/login.component';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ey-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    @Output() toggleSidenav = new EventEmitter<void>();
    constructor(private _dialog: MatDialog, private _snackBar: MatSnackBar, private _authService: AuthService, private _router: Router) { }

    ngOnInit() {
    }

    openLoginDialog(): void {
        let dialogRef = this._dialog.open(LoginComponent, { width: '300px', disableClose: true });
        dialogRef.afterClosed().subscribe(
            result => {
                if (result) {
                    this._snackBar.open("Loggin accepted", null, { duration: 3000 });
                    this._router.navigate(['/news']);
                }
            }
        )
    }

    logout(): void {
        this._authService.logout().subscribe(result => {
            this._snackBar.open("Logout accepted", null, { duration: 3000 });
            this._router.navigate(['/news']);
        })
    }

    isAuthenticated(): boolean {
        return this._authService.isAuthenticated();
    }

}
