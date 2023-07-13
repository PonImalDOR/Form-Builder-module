import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FieldStylesFormComponent} from './field-styles-form.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../store/reducers/drag.reducer";
import {ReactiveComponentModule} from "@ngrx/component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ColorPickerModule} from "ngx-color-picker";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UpperCasePipe} from "../../../pipes/upper-case.pipe";

describe('FieldStylesFormComponent', () => {
  let component: FieldStylesFormComponent;
  let fixture: ComponentFixture<FieldStylesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldStylesFormComponent, MatLabel, UpperCasePipe],
      imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot({'formBuilder': dragReducer}),
        ReactiveComponentModule,
        ReactiveFormsModule,
        FormsModule,
        ColorPickerModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FieldStylesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check initial values for styleForm', () => {

    // get styleForm from component
    const styleForm = component.styleForm;

    // write all fields with initial values
    const styleFormValues = {
      label: '',
      text: '',
      color: '',
      placeholder: '',
      width: '',
      height: '',
      fontWeight: '',
      fontSize: '',
      borderStyle: '',
      required: false
    }

    // check if styleForm values equal our values
    expect(styleForm.value).toEqual(styleFormValues)

  });
  it('check form value after enter it and validation', () => {
    // here we check if we can input some value, and how it works

    // get elements
    const styleFormLabelElement: // label element
      HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#styleForm')!.querySelector('#label')!;
    const styleFormPlaceholderElement: // placeholder element
      HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#styleForm')!.querySelector('#placeholder')!;
    const styleFormTextElement: // text element
      HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#styleForm')!.querySelector('#text')!;

    // set values to elements that we get from querySelector
    styleFormLabelElement.value = 'test label'; // set value to label element
    styleFormPlaceholderElement.value = 'test placeholder' // set value to placeholder element
    styleFormTextElement.value = 'test text'; // set value to text element

    // dispatch input event and detectChanges
    styleFormTextElement.dispatchEvent(new Event('input'))
    styleFormPlaceholderElement.dispatchEvent(new Event('input'))
    styleFormLabelElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // check if form values equal to value that we input
    expect(styleFormLabelElement.value).toEqual(component.styleForm.get('label')?.value);
    expect(styleFormPlaceholderElement.value).toEqual(component.styleForm.get('placeholder')?.value);
    expect(styleFormTextElement.value).toEqual(component.styleForm.get('text')?.value);
    expect(component.styleForm?.errors).toBeNull();

    // these 3 fields works good, then next more fields works too
  });
});
