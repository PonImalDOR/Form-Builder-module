import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormBuilderComponent} from './form-builder.component';
import {StoreModule} from "@ngrx/store";
import {dragReducer} from "../../../../store/reducers/drag.reducer";
import {ReactiveComponentModule} from "@ngrx/component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {of} from "rxjs";
import {findComponent} from "../../assets/findComponent/findComponent";
import {testField} from "../../../../assets/data/testField";
import {FormCreatorComponent} from "../form-creator/form-creator.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {FormDraggableFieldsComponent} from "../form-draggable-fields/form-draggable-fields.component";
import {FieldStylesFormComponent} from "../../assets/field-styles-form/field-styles-form.component";
import {ColorPickerModule} from "ngx-color-picker";
import {FormDynamicComponent} from "../form-creator/form-dynamic/form-dynamic.component";
import {InputFieldComponent} from "../form-draggable-fields/fields/input-field/input-field.component";
import {TextareaFieldComponent} from "../form-draggable-fields/fields/textarea-field/textarea-field.component";
import {SelectFieldComponent} from "../form-draggable-fields/fields/select-field/select-field.component";
import {ButtonFieldComponent} from "../form-draggable-fields/fields/button-field/button-field.component";
import {CheckboxFieldComponent} from "../form-draggable-fields/fields/checkbox-field/checkbox-field.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {IActiveFieldOptions} from "../../../../assets/models/IActiveField";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormCreatorPortalComponent} from "../form-creator/form-creator-portal/form-creator-portal.component";
import {
  DraggableFieldsPortalComponent
} from "../form-draggable-fields/draggable-fields-portal/draggable-fields-portal.component";
import {FormAccordionPortalComponent} from "../form-accordion/form-accordion-portal/form-accordion-portal.component";
import {PortalModule} from "@angular/cdk/portal";
import {UpperCasePipe} from "../../../pipes/upper-case.pipe";
import {FormAccordionComponent} from "../form-accordion/form-accordion.component";
import {ChangeDetectionStrategy, NO_ERRORS_SCHEMA} from "@angular/core";

describe('FormBuilderComponent', () => {

  let component: FormBuilderComponent;
  let fixture: ComponentFixture<FormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FormBuilderComponent,
        FormCreatorComponent,
        FormDraggableFieldsComponent,
        FieldStylesFormComponent,
        FormDynamicComponent,
        InputFieldComponent,
        TextareaFieldComponent,
        SelectFieldComponent,
        ButtonFieldComponent,
        CheckboxFieldComponent,
        MatLabel,
        FormCreatorPortalComponent,
        DraggableFieldsPortalComponent,
        FormAccordionPortalComponent,
        UpperCasePipe,
        FormAccordionComponent
      ],
      imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot({'formBuilder': dragReducer}),
        ReactiveComponentModule,
        ReactiveFormsModule,
        FormsModule,
        DragDropModule,
        ColorPickerModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        MatSelectModule,
        PortalModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .overrideComponent(FormBuilderComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();

    fixture = TestBed.createComponent(FormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render start text and components', () => {
    // get formBuilder components

    // FIND CHILD COMPONENTS

    // find draggableFields, formCreator by fixture and selector
    const formAccordion = findComponent(fixture, 'app-form-accordion')
    const draggableFields = findComponent(fixture, 'app-form-draggable-fields')
    const formCreator = findComponent(fixture, 'app-form-creator')

    // check is component be truthy
    expect(formAccordion).toBeTruthy()
    expect(draggableFields).toBeTruthy()
    expect(formCreator).toBeTruthy()
  });
  it('should render accordion component', () => {
    // here we check if edit field component render properly

    // set isEdit of true for render edit field component
    component.isEdit$ = of(true)

    // call ngOnInit and detectChanges
    component.ngOnInit();
    fixture.detectChanges();
    // find edit field form by fixture and selector
    const editFieldForm = findComponent(fixture, 'app-form-accordion')
    // check editField component will not to be null
    expect(editFieldForm).not.toBeNull();
  });
  it('should render form creator component', () => {
    // here we check if form creator render properly

    // set form of array with test field
    // this field it's the props of form creator component
    component.form$ = of([{field: testField}]);

    // find formCreator component by fixture and selector
    const formCreator = findComponent(fixture, 'app-form-creator');

    // call ngOnInit and detectChanges
    component.ngOnInit();
    fixture.detectChanges();

    // check if component exists
    expect(formCreator).not.toBeNull();
  });
  it('should render draggable fields component', () => {

    // find draggableFields component by fixture and selector
    const draggableFields = findComponent(fixture, 'app-form-accordion');

    // check draggableField will not be null
    expect(draggableFields).not.toBeNull();
  });
  it('should add and edit and remove field', () => {

    // create spy to store method dispatch
    const storeSpy = spyOn(component.store, 'dispatch').and.callThrough();

    // call ngOnInit and detectChanges
    component.ngOnInit();
    fixture.detectChanges();

    // call addField, it will add new field to form
    // add field will dispatch to store twice, store spy in this time will be called 2 times
    component.addField(<IActiveFieldOptions>{label: 'test label', placeholder: 'test placeholder', styles: {}})

    // call editField, it will change existed field from form by id
    // edit field will dispatch to store once time, and spy now will be called 3 times
    component.editField(<IActiveFieldOptions>{
      label: 'test label',
      placeholder: 'test placeholder',
      styles: {}
    }, 'test label')

    // remove field calls once, and it will remove field from the form array
    // now spy will be called 4 times
    component.removeField(0, 'test label')

    // expected spy have been called 4 times
    expect(storeSpy).toHaveBeenCalledTimes(4);
  });

});
