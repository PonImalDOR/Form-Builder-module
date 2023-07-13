import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {IActiveField} from "../../../../assets/models/IActiveField";
import {FormGroup} from "@angular/forms";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCreatorComponent implements AfterContentChecked, OnInit, OnDestroy{

  @Input() form$: Observable<Array<{field?: IActiveField}>>
  @Input() form_result: FormGroup = new FormGroup<any>('')
  @Input() removeField: any;
  @Input() setEditMode: any;
  @Input() updatedAt: number|undefined;

  formCopy: any;
  controlSub: Subscription|undefined;

  constructor(private ref: ChangeDetectorRef) {
    this.controlSub = new Subscription();
    this.form$ = new Observable<Array<{field?: IActiveField}>>()
  }
  ngOnInit() {
    this.controlSub = this.form$?.subscribe(value => {
      this.formCopy = value.map(field => field.field)
    })
  }
  ngAfterContentChecked() {
    this.ref.detectChanges();
  }
  onSubmit() {
    window.alert(JSON.stringify(this.form_result?.value))
  }
  drop(event: CdkDragDrop<any>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
  ngOnDestroy() {
    this.controlSub?.unsubscribe()
  }
}

