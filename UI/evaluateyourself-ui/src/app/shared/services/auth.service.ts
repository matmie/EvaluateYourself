import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../model/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class AuthService {

    private _currentUser: IUser = null;
    private _usersUrl: string = "./api-mock/users.json";

    constructor(private _http: HttpClient) { }

    getUsers(): Observable<IUser[]> {
        return this._http.get(this._usersUrl).catch(this.handleError);
    }


    login(email: string, password: string): Observable<IUser> {
        return this.getUsers().map((users: IUser[]) => users.find(u => u.email === email && u.password === password))
            .do(data => {
                if (!data) {
                    Observable.throw("Cannot find user " + email);
                }
                else {
                    this._currentUser = data;
                    console.log("Zalogowany użytkownik:", this._currentUser, data);
                }
            });
    }

    logout(): EmptyObservable<boolean> {
        this._currentUser = null;
        return new EmptyObservable();
    }

    isAuthenticated(): boolean {
        return !!this._currentUser;
    }

    handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }


}
