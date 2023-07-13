import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BuilderComponent} from './builder.component';
import {ReactiveComponentModule} from '@ngrx/component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../store/reducers/drag.reducer";
import {findComponent} from "../assets/findComponent/findComponent";
import {FormBuilderComponent} from "./form-builder/form-builder.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormCreatorComponent} from "./form-creator/form-creator.component";
import {FormDraggableFieldsComponent} from "./form-draggable-fields/form-draggable-fields.component";
import {InputFieldComponent} from "./form-draggable-fields/fields/input-field/input-field.component";
import {ButtonFieldComponent} from "./form-draggable-fields/fields/button-field/button-field.component";
import {TextareaFieldComponent} from "./form-draggable-fields/fields/textarea-field/textarea-field.component";
import {SelectFieldComponent} from "./form-draggable-fields/fields/select-field/select-field.component";
import {CheckboxFieldComponent} from "./form-draggable-fields/fields/checkbox-field/checkbox-field.component";
import {MatCardModule} from "@angular/material/card";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {UpperCasePipe} from "../../pipes/upper-case.pipe";

describe('BuilderComponent', () => {
  let component: BuilderComponent;
  let fixture: ComponentFixture<BuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BuilderComponent,
        FormBuilderComponent,
        FormCreatorComponent,
        FormDraggableFieldsComponent,
        InputFieldComponent,
        ButtonFieldComponent,
        TextareaFieldComponent,
        SelectFieldComponent,
        CheckboxFieldComponent,
        UpperCasePipe
      ],
      imports: [
        StoreModule.forRoot({'formBuilder': dragReducer}),
        ReactiveComponentModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        DragDropModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render form-builder component', () => {

    // call ngOnInit
    component.ngOnInit();
    fixture.detectChanges();

    // find formBuilder component
    const formBuilder = findComponent(fixture, 'app-form-builder');

    // if formBuilder not null, then formBuilder render properly
    expect(formBuilder).not.toBeNull();
  });
});
