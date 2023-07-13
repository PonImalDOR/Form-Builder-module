import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IActiveField} from "../../../../../../assets/models/IActiveField";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputFieldComponent implements OnInit {
  @Input() field: IActiveField | null | undefined
  @Input() formField: FormGroup | any;
  ngOnInit(): void {
  }
}
