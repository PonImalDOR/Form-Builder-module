import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFieldComponent } from './select-field.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../../../store/reducers/drag.reducer";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {testField} from "../../../../../../assets/data/testField";
import {MatCardModule} from "@angular/material/card";

describe('SelectFieldComponent', () => {
  let component: SelectFieldComponent;
  let fixture: ComponentFixture<SelectFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFieldComponent ],
      imports: [
        StoreModule.forRoot({'formBuilder': dragReducer}),
        MatCardModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFieldComponent);
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
