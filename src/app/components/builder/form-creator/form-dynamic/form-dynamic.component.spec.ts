import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDynamicComponent } from './form-dynamic.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../../store/reducers/drag.reducer";
import {ReactiveComponentModule} from "@ngrx/component";
import {testField} from "../../../../../assets/data/testField";
import {findComponent} from "../../../assets/findComponent/findComponent";
import {InputFieldComponent} from "../../form-draggable-fields/fields/input-field/input-field.component";
import {ChangeDetectionStrategy, NO_ERRORS_SCHEMA} from "@angular/core";

describe('FormDynamicComponent', () => {
  let component: FormDynamicComponent;
  let fixture: ComponentFixture<FormDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDynamicComponent, InputFieldComponent ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({'formBuilder': dragReducer}),
        ReactiveComponentModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .overrideComponent(FormDynamicComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
    .compileComponents();

    fixture = TestBed.createComponent(FormDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render 1 of 5 fields(by switch case)', () => {
    component.field = testField; // here input


    fixture.detectChanges()
    // find input component, because this component will render after switch case
    const inputComponent = findComponent(fixture, 'app-input-field');
    expect(inputComponent).toBeTruthy()
    const inputField = inputComponent.componentInstance.field;
    expect(inputField).toEqual(testField)
  })
});
