import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IStyles} from "../../../../assets/models/IStyle";
import {IActiveFieldOptions} from "../../../../assets/models/IActiveField";
import {borderStylesData} from "../../../../assets/data/borderStylesData";
import {Store} from "@ngrx/store";


@Component({
  selector: 'app-field-styles-form',
  templateUrl: './field-styles-form.component.html',
  styleUrls: ['./field-styles-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldStylesFormComponent implements OnInit {
  @Input() title: string = '';
  // for add or edit field
  @Input() submitForm: any;
  // for add field
  @Input() activeField: string | undefined
  // for editField
  @Input() onEditField: any;
  @Input() editFieldLabel: string | null = '';
  @Input() form_result: FormGroup = new FormGroup<any>('')
  // local data
  styleForm: FormGroup;
  styles: IStyles = {};
  options: IActiveFieldOptions | undefined;
  borderStyles = borderStylesData;

  constructor(private store: Store<Store>) {
    this.styleForm = new FormGroup({
      label: new FormControl('', Validators.required),
      placeholder: new FormControl(''),
      text: new FormControl(''),
      color: new FormControl(''),
      width: new FormControl(''),
      height: new FormControl(''),
      fontSize: new FormControl(''),
      borderStyle: new FormControl(''),
      fontWeight: new FormControl(''),
      required: new FormControl(false)
    })
  }
  get field(){
    return this.styleForm.controls;
  }
  onSubmit() {
    this.styles = {
      borderStyle: this.styleForm.value.borderStyle,
      width: this.styleForm.value.width + 'px',
      height: this.styleForm.value.height + 'px',
      fontSize: this.styleForm.value.fontSize + 'px',
      fontWeight: this.styleForm.value.fontWeight,
      color: this.styleForm.value.color
    }
    this.options = {
      placeholder: this.styleForm.value.placeholder,
      label: this.styleForm.value.label,
      text: this.styleForm.value.text,
      styles: this.styles,
      required: this.styleForm.value.required
    }
    if (this.editFieldLabel !== this.styleForm.value.label) this.submitForm(this.options, this.editFieldLabel);
    this.styleForm.reset()
  }

  ngOnInit(): void {
  }

}
