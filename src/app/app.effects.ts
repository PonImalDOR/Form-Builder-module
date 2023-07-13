import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {DragActionsTypes, updatedAt} from '../store/actions/drag.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  updatedAt$() {
    return this.actions$.pipe(
      ofType(DragActionsTypes.addFieldToForm, DragActionsTypes.editField, DragActionsTypes.removeFieldFromForm),
      map(() => {
        return updatedAt({updatedAt: Date.now()})
      })
    );
  }
}
