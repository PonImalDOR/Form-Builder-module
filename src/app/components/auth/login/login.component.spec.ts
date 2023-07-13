import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AuthInputComponent} from "../../assets/auth-input/auth-input.component";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent, AuthInputComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatSnackBarModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render login form', () => {

    // get login form html
    const loginForm: HTMLElement = fixture.nativeElement

    // get titles from h2, button, p
    const title = loginForm.querySelector('h2')!;
    const submitButton = loginForm.querySelector('button')!;
    const helpText = loginForm.querySelector('p')!;

    // check if titles equal to title that we want
    expect(title.textContent).toEqual('Login');
    expect(submitButton.textContent).toEqual('Submit');
    expect(helpText.textContent).toEqual('Do not have account? Register')

    // get input fields, email, password
    const usernameInput = loginForm.querySelector('#username')!;
    const passwordInput = loginForm.querySelector('#password');

    // check if fields truthy
    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  })
});
