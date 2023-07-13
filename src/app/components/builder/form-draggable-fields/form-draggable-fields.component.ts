import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {dragData} from "../../../../assets/data/dragData";
import {Observable, of, Subscription} from "rxjs";
import {IActiveField} from "../../../../assets/models/IActiveField";
import {Store} from "@ngrx/store";
import {dragState} from "../../../../store/reducers/drag.reducer";
import {FormBuilder, FormGroup} from "@angular/forms";
import {testField} from "../../../../assets/data/testField";

@Component({
  selector: 'app-form-draggable-fields',
  templateUrl: './form-draggable-fields.component.html',
  styleUrls: ['./form-draggable-fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDraggableFieldsComponent implements OnInit, OnDestroy{
  field$: Observable<IActiveField> | null;
  data = dragData;
  showForm: FormGroup;
  controlSub: Subscription | undefined;
  constructor(private store: Store<dragState>, private fb: FormBuilder) {
    this.field$ = of(testField)
    this.showForm = new FormGroup({})
  }
  ngOnInit() {
    this.controlSub = this.field$?.subscribe(field => this.showForm.addControl(field.options.label, this.fb.control('')))
  }
  ngOnDestroy() {
    this.controlSub?.unsubscribe()
  }
}
