import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IActiveField} from "../../../../../assets/models/IActiveField";
import {dragData} from "../../../../../assets/data/dragData";
import {FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDynamicComponent implements OnInit {
  @Input() field: IActiveField | undefined
  @Input() form_result: FormGroup | any;
  @Input() removeField: any
  @Input() setEditMode: any
  field_name = dragData;
  // do not remove, it's for onRemoveField()
  constructor(private store: Store<Store>) {
  }


  ngOnInit(): void {

  }

}
