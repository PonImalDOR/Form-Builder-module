import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {
  addFieldToForm,
  editField,
  removeFieldFromForm,
  setActiveField,
  setActiveFieldStyles,
  setEditMode
} from "../../../../store/actions/drag.actions";
import {select, Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {
  editFieldLabel,
  isEdit,
  selectActiveField,
  selectForm,
  updatedAtSelector
} from "../../../../store/selectors/drag.selector";
import {IActiveField, IActiveFieldOptions} from "../../../../assets/models/IActiveField";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {dragState} from "../../../../store/reducers/drag.reducer";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBuilderComponent implements OnInit, OnDestroy {
  // for form creator & accordion
  form$: Observable<Array<{field?: IActiveField}>> = this.store.pipe(select(selectForm));
  form_result: FormGroup = new FormGroup({
    form_label: new FormControl('My form')
  });
  activeField$: Observable<string> = this.store.pipe(select(selectActiveField));
  isEdit$: Observable<boolean> = this.store.pipe(select(isEdit));
  editFieldLabel$: Observable<string> = this.store.pipe(select(editFieldLabel));
  updatedAt$: Observable<number> = this.store.pipe(select(updatedAtSelector))
  // for control subscriptions
  controlSub: Subscription  = new Subscription();
  // for draggable objects
  data: any

  constructor(public store: Store<dragState>, private fb: FormBuilder) {}
  ngOnInit(): void {
    // create form controls by form$ array
    this.controlSub = this.form$.subscribe(
      value => value.map(
        field => this.form_result.addControl(<string>field.field?.options.label, this.fb.control(''))
      )
    );
  }
  // 1 for accordion and form-creator
  addField(options:IActiveFieldOptions) {
    this.store.dispatch(setActiveFieldStyles({options}));
    this.store.dispatch(addFieldToForm());
  }
  editField(options:IActiveFieldOptions, controlName: string) {
    this.store.dispatch(editField({options}));
    this.form_result.removeControl(controlName)
  }
  removeField(id:number, controlName:string) {
    this.store.dispatch(removeFieldFromForm({id: id}));
    this.form_result.removeControl(controlName);
  }
  setEditMode(id:number, name:string, label:string) {
    this.store.dispatch(setEditMode({id, name, label}));
  }
  // 2  for draggable objects
  drop(event: CdkDragDrop<string[]>) {
    this.store.dispatch(setActiveField({name: event.item.data, id: Date.now()}));
  }
  ngOnDestroy() {
    this.controlSub.unsubscribe()
  }
}
