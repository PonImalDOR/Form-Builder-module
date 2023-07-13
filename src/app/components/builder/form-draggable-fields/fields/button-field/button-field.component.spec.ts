import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonFieldComponent} from './button-field.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../../../store/reducers/drag.reducer";
import {testField} from "../../../../../../assets/data/testField";
import {MatCardModule} from "@angular/material/card";

describe('ButtonFieldComponent', () => {
  let component: ButtonFieldComponent;
  let fixture: ComponentFixture<ButtonFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFieldComponent ],
      imports: [
        StoreModule.forRoot({'formBuilder': dragReducer}),
        MatCardModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check if field render properly', () => {
    component.field = testField;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.field).toEqual(testField)
  });
});
