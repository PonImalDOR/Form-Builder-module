import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TextareaFieldComponent} from './textarea-field.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../../../store/reducers/drag.reducer";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {testField} from "../../../../../../assets/data/testField";
import {MatCardModule} from "@angular/material/card";

describe('TextareaFieldComponent', () => {
  let component: TextareaFieldComponent;
  let fixture: ComponentFixture<TextareaFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextareaFieldComponent],
      imports: [
        StoreModule.forRoot({'formBuilder': dragReducer}),
        MatCardModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TextareaFieldComponent);
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
