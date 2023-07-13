import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-auth-input',
  template: `
    <mat-form-field>
      <mat-label>{{label}}</mat-label>
      <input matInput [formControl]="authControl" [placeholder]="placeholder" [id]="tagId" [type]="type" [required]="required"/>
    </mat-form-field>
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthInputComponent),
    multi: true
  }]
})
export class AuthInputComponent implements OnInit, ControlValueAccessor {

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() tagId: string = '';
  @Input() type: string = 'text'
  @Input() required: boolean = false;
  authControl = new FormControl()
  // @ts-ignore
  onChange;
  // @ts-ignore
  onTouch;

  constructor() { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value:any) {
    this.authControl.setValue(value)
  }

  ngOnInit(): void {
    this.authControl.valueChanges.subscribe(value => {
      this.onChange(value)
    })
  }

}
