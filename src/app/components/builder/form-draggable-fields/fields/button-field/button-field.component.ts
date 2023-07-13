import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IActiveField} from "../../../../../../assets/models/IActiveField";

@Component({
  selector: 'app-button-field',
  templateUrl: './button-field.component.html',
  styleUrls: ['./button-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonFieldComponent implements OnInit {
  @Input() field: IActiveField | null | undefined

  ngOnInit(): void {
  }

}
