import {createFeatureSelector, createSelector} from "@ngrx/store";
import {dragState, FORM_NODE} from "../reducers/drag.reducer";

export const selectorDragState = createFeatureSelector<dragState>(FORM_NODE)

export const selectActiveField = createSelector(
  selectorDragState,
  state => state.activeField.name
)
export const selectDefaultField = createSelector(
  selectorDragState,
  state => state.activeField
)
export const selectForm = createSelector(
  selectorDragState,
  state => state.form
)
export const isEdit = createSelector(
  selectorDragState,
  state => state.isEdit.editMode
)
export const editFieldLabel = createSelector(
  selectorDragState,
  state => state.isEdit.editFieldLabel
)
export const updatedAtSelector = createSelector(
  selectorDragState,
  state => state.updatedAt
)
