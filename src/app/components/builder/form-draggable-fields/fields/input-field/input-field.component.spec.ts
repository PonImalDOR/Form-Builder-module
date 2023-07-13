import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputFieldComponent} from './input-field.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../../../store/reducers/drag.reducer";
import {testField} from "../../../../../../assets/data/testField";
import {MatCardModule} from "@angular/material/card";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('InputFieldComponent', () => {
  let component: InputFieldComponent;
  let fixture: ComponentFixture<InputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldComponent ],
      imports: [
        StoreModule.forRoot({'formBuilder': dragReducer}),
        MatCardModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check if field render properly', () => {
    component.formField = new FormGroup<any>({
        'test input': new FormControl()
    })
    component.field = testField;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.field).toEqual(testField)
  });
});
