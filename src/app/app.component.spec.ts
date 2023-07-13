import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {AuthService} from "./service/auth.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {MatSnackBarModule} from "@angular/material/snack-bar";

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>;
  let location: Location;
  let router: Router
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [AuthService]
    }).compileComponents();
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router);

    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('should set token', () => {

    // create spy on component method onInit
    const spy = spyOn(component, "ngOnInit");

    // in method onInit we set token from localstorage to authService
    component.ngOnInit()

    // expect ngOnInit to be called
    expect(spy).toHaveBeenCalled()
  });
  it('should redirect to "/" ' ,() => {

    // create spy to router
    const spy = spyOn(router, 'navigateByUrl')

    // call component function toHome()
    component.toHome()

    // get url path (will be '/')
    const url = spy.calls.first().args[0]

    // check if url equal '/'
    expect(url).toBe('/')
  });
  it('should contain text "Angular Form Builder"', () => {

    // get app content
    const appContent: HTMLElement = fixture.nativeElement;

    // select from app content h1
    const headerText = appContent.querySelector('h1')!;

    // check if h1 text to equal text that we want
    expect(headerText.textContent).toEqual('Angular Form Builder');
  });
});
