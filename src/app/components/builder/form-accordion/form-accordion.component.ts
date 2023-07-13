import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-accordion',
  templateUrl: './form-accordion.component.html',
  styleUrls: ['./form-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormAccordionComponent {

  @Input() activeField: string|undefined;
  @Input() isEdit: boolean|undefined;
  @Input() addField: any;
  @Input() editField: any;
  @Input() editFieldLabel: string|undefined;
  @Input() form_result: any;

  constructor() { }

}
