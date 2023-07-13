import {createAction, props} from '@ngrx/store';
import {IActiveFieldOptions} from 'src/assets/models/IActiveField';

export enum DragActionsTypes {
  setActiveField = '[Draggable Object] set active field',
  setActiveFieldStyles = '[Active Field] set styles',
  addFieldToForm = '[Create Field] add field to form',
  removeFieldFromForm = '[Remove Field] remove field from form',
  setEditMode = '[Field Edit Mode] set edit mode',
  editField = '[Edit field] edit from field',
  updatedAt = '[Update] form updated at'
}

export const setActiveField = createAction(DragActionsTypes.setActiveField , props<{name: string, id:number}>());
export const setActiveFieldStyles = createAction(DragActionsTypes.setActiveFieldStyles, props<{options: IActiveFieldOptions}>());
export const addFieldToForm = createAction(DragActionsTypes.addFieldToForm);
export const removeFieldFromForm = createAction(DragActionsTypes.removeFieldFromForm, props<{id: number}>());
export const setEditMode = createAction(DragActionsTypes.setEditMode, props<{id: number, name: string, label: string}>())
export const editField = createAction(DragActionsTypes.editField, props<{options: IActiveFieldOptions}>());
export const updatedAt = createAction(DragActionsTypes.updatedAt, props<{updatedAt: number}>());


