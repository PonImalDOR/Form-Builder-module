import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IActiveField} from "../../../../../../assets/models/IActiveField";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectFieldComponent implements OnInit {
  @Input() field: IActiveField | null | undefined
  @Input() formField: FormGroup | any;
  @Input() options: Array<{value: string, text: string}> = [];

  ngOnInit(): void {
  }

}
