import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AuthInputComponent} from "../../assets/auth-input/auth-input.component";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent, AuthInputComponent ],
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

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render register form', () => {

    // get register form
    const registerForm: HTMLElement = fixture.nativeElement

    // get titles from h2, button, p
    const title = registerForm.querySelector('h2')!;
    const submitButton = registerForm.querySelector('button')!;
    const helpText = registerForm.querySelector('p')!;

    // expect titles will be equal to title that we want
    expect(title.textContent).toEqual('Registration');
    expect(submitButton.textContent).toEqual('Submit');
    expect(helpText.textContent).toEqual('Already have account? Log in')

    // get input fields, email, password
    const emailInput = registerForm.querySelector('#email')!;
    const passwordInput = registerForm.querySelector('#password');

    // check if fields truthy
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });
});
