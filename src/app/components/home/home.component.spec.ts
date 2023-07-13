import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {RouterTestingModule} from "@angular/router/testing";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {UpperCasePipe} from "../../pipes/upper-case.pipe";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let location: Location;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, UpperCasePipe ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should redirect to "/create-form"', inject([Router],(router: Router) => {

    // create spy on router to method navigateByUrl
    const spy = spyOn(router, 'navigateByUrl')

    // call function that have method navigateByUrl, and will redirect to /create-form
    component.toFormBuilder();

    // get url path, (/create-form)
    const url = spy.calls.first().args[0]

    // expected url will be /create-form
    expect(url).toBe('/create-form')
  }));
  it('should render text "Want create form easily? Try out this form builder", "EXPLORE"', () => {

    // get page content text
    const pageContent: HTMLElement = fixture.nativeElement;

    // by selector, we get h1
    // by selector, we get button
    const h1 = pageContent.querySelector("h1")!;
    const button = pageContent.querySelector("button")!;

    // expected h1, button text content equal text, that we want to see
    expect(h1.textContent).toEqual('Want create form easily? Try out this form builder');
    expect(button.textContent).toEqual('EXPLORE')
  });
});
