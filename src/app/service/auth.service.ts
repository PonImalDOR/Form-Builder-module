import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {IUser} from "../../assets/models/IUser";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = '';
  private _registerURL = 'http://localhost:5000/api/auth/register';
  private _loginURL = 'http://localhost:5000/api/auth/login';

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  registerUser(user: IUser) {
    return this.http.post<any>(this._registerURL, user).pipe(
      tap(({access_token}) => {
          localStorage.setItem('access_token', access_token);
          this.setToken(access_token)
          this._snackBar.open('Register successfully', 'Okay', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 1500
          })
        },
        (error) => {
          this._snackBar.open(`Registration failed, ${error.message}`, 'Try again', {
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
            duration: 1500
          })
        }
      )
    )
  }

  loginUser(user: IUser) {
    return this.http.post<any>(this._loginURL, user).pipe(
      tap(({access_token}) => {
          localStorage.setItem('access_token', access_token);
          this.setToken(access_token);
          this._snackBar.open(`Welcome back, ${user.username}`, 'Okay', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 1500
          })
        },
        (error) => {
          this._snackBar.open(`Login failed, ${error.message}`, 'Try again', {
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
            duration: 1500
          })
        }
      )
    )
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isAuth(): boolean {
    return !!this.token;
  }

  logout() {
    this.setToken('');
    localStorage.clear()
  }
}
