import {TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth-guard.guard';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {Location} from "@angular/common";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

function fakeRouterState(url: string): RouterStateSnapshot {
  return {
    url,
  } as RouterStateSnapshot;
}

describe('AuthGuardGuard', () => {
  let guard: AuthGuard;
  let location: Location;
  let service: AuthService
  let routeS: ActivatedRouteSnapshot;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, MatSnackBarModule, BrowserAnimationsModule]
    });
    location = TestBed.get(Location);
    guard = TestBed.inject(AuthGuard);
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router)
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should redirect to login page',  () => {
    // create spy on router method navigate
    const spy = spyOn(router, 'navigate');
    // if token = '', then service.isAuth() returned false
    service.token = '';
    // then guard.canActivate will be redirected to /login, by if condition
    guard.canActivate(routeS, fakeRouterState('/create-form'))
    const url = spy.calls.first().args[0]
    // if spy called, then method navigate been called
    expect(spy).toHaveBeenCalled()
    // and check if url match
    expect(url).toEqual(['/login'])
  });
  it('should pass to "/create-form"', () => {
    // create spy on router method navigate
    const spy = spyOn(router, 'navigate');
    // if token not empty, service.isAuth returned true
    service.token = '111';
    // and guard activate this route, without redirect to login page
    guard.canActivate(routeS, fakeRouterState('/create-form'))
    // and spy will not be called
    expect(spy).not.toHaveBeenCalled()
  })
});
