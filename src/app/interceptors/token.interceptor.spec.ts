import {TestBed} from '@angular/core/testing';

import {TokenInterceptor} from './token.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "../service/auth.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";

describe('TokenInterceptor', () => {
  let interceptor: TokenInterceptor;
  let mockHttp: HttpTestingController;
  let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [
      {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true,
      },
      TokenInterceptor, AuthService
      ],
    imports: [HttpClientModule, HttpClientTestingModule, MatSnackBarModule]
    })
    service = TestBed.inject(AuthService);
    mockHttp = TestBed.inject(HttpTestingController);
    interceptor = TestBed.inject(TokenInterceptor);
  });
  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
  it('should add access token to headers', () => {

    // set mock token to service
    service.setToken('some_token')

    // create mock request for check if interceptor work properly
    service.loginUser({username: 'testEmail', password: 'testPassword'})
      .subscribe((access_token) => expect(access_token).toBeTruthy()) // check if we get 'some_token'
    const httpRequest = mockHttp.expectOne({});

    // expected access_token in request headers, and this token must equal to our mock token
    expect(httpRequest.request.headers.has("access_token")).toEqual(true);
    expect(httpRequest.request.headers.get("access_token")).toBe('some_token')

  });
});
