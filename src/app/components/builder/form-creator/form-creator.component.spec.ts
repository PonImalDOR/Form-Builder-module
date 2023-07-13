import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormCreatorComponent} from './form-creator.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../store/reducers/drag.reducer";
import {ReactiveComponentModule} from "@ngrx/component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {of} from "rxjs";
import {findComponent} from "../../assets/findComponent/findComponent";
import {FormDynamicComponent} from "./form-dynamic/form-dynamic.component";
import {InputFieldComponent} from "../form-draggable-fields/fields/input-field/input-field.component";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {testField} from "../../../../assets/data/testField";
import {UpperCasePipe} from "../../../pipes/upper-case.pipe";
import {DragDropModule} from "@angular/cdk/drag-drop";

describe('FormCreatorComponent', () => {
  let component: FormCreatorComponent;
  let fixture: ComponentFixture<FormCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreatorComponent, FormDynamicComponent, InputFieldComponent, UpperCasePipe ],
      imports: [
        ReactiveFormsModule,
        MatIconModule,
        MatCardModule,
        StoreModule.forRoot({'formBuilder': dragReducer}),
        ReactiveComponentModule,
        DragDropModule,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should dynamically render field component', () => {

    // create form group with field 'test input'
    component.form_result = new FormGroup<any>({
      'field label': new FormControl()
    })

    // crete form of array with testField
    component.form$ = of([{field: testField}]);

    // detectChanges
    component.ngOnInit()
    fixture.detectChanges();
    // find dynamic field component, here by switch case will be rendered 1 of 5 field component
    const formDynamicField = findComponent(fixture, 'app-form-dynamic');

    // find field from component Instance
    const formDynamicComponentField = formDynamicField.componentInstance.field;

    // check if dynamicField component exists
    expect(formDynamicField).not.toBeNull();

    // check if field that have dynamicField component it's the field that we want
    expect(formDynamicComponentField).toEqual(testField)
  });
});
