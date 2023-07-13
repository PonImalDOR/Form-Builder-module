import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IActiveField} from "../../../../../../assets/models/IActiveField";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxFieldComponent implements OnInit {
  @Input() field: IActiveField | null | undefined
  @Input() formField: FormGroup | any;

  ngOnInit(): void {
  }

}
