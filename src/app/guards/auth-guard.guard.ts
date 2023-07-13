import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from "../service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService,  private router: Router,  private _snackBar: MatSnackBar) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      if (this.auth.isAuth()) {
        return of(true)
      } else {
         this.router.navigate(['/login'], {
           queryParams: {
             accessDenied: true
           }
         })
        this._snackBar.open('Please log in to use Form Builder', 'Ok', {
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
          duration: 2000
        })
        return of(false)
      }
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.canActivate(route, state)
  }

}
