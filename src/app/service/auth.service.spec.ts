import {fakeAsync, flush, TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('AuthService', () => {
  let service: AuthService;
  let mockService: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, MatSnackBarModule, BrowserAnimationsModule]
    });
    service = TestBed.inject(AuthService);
    mockService = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should login', fakeAsync(() => {
    // set mock token, this token we get from mockService later
    const mockToken = 'fakeJWT'

    // login user will get mockToken from mockService, bcz we didn't send request to real server
    service.loginUser({username: 'testEmail', password: 'testPassword'})
      .subscribe(
        token => expect(token).toEqual(mockToken) // check if token equal mockToken
      )
    mockService.expectOne({
      method: 'POST',
      url: 'http://localhost:5000/api/auth/login'
    }).flush(mockToken)
    flush();
  }));
  it('should register', fakeAsync(() => {
    // set mock token, this token we get from mockService later
    const mockToken = 'fakeJWT'

    // register user will get mockToken from mockService, bcz we didn't send request to real server
    service.registerUser({username: 'testEmail', password: 'testPassword'})
      .subscribe(
        token => expect(token).toEqual(mockToken)
      )
    mockService.expectOne({
      method: 'POST',
      url: 'http://localhost:5000/api/auth/register'
    }).flush(mockToken);
    flush();
  }));
});
