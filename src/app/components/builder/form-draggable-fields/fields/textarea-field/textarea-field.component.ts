import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IActiveField} from "../../../../../../assets/models/IActiveField";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaFieldComponent implements OnInit {
  @Input() field: IActiveField | null | undefined
  @Input() formField: FormGroup | any;

  ngOnInit(): void {
  }

}
