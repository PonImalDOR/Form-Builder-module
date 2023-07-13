import {createReducer, on} from '@ngrx/store';
import {
  addFieldToForm,
  editField,
  removeFieldFromForm,
  setActiveField,
  setActiveFieldStyles,
  setEditMode,
  updatedAt
} from "../actions/drag.actions";
import {IActiveField} from 'src/assets/models/IActiveField';

export const FORM_NODE = 'formBuilder'

export interface dragState {
  isEdit: { id: number, name: string, editMode: boolean, editFieldLabel: string }
  activeField: IActiveField
  form: Array<{ field?: IActiveField }>
  updatedAt: number
}

export const initialState: dragState = {
  updatedAt: 0,
  isEdit: {id: 0, name: '', editMode: false, editFieldLabel: ''},
  activeField: {
    name: '',
    id: 0,
    options: {
      styles: {
        width: '200px',
        height: '40px',
        borderStyle: 'solid',
        fontSize: '16px',
        fontWeight: '500',
        color: 'black'
      },
      placeholder: 'placeholder',
      label: 'field label',
      text: 'field text',
      required: false
    }
  },
  form: []
}

export const dragReducer = createReducer(
  initialState,
  on(setActiveField, (state, {name, id}) => {
    return {
      ...state,
      isEdit: {id: 0, name: '', editMode: false, editFieldLabel: ''},
      activeField: {
        name: name,
        id: id,
        options: {
          styles: state.activeField.options.styles,
          placeholder: 'placeholder',
          text: 'field text',
          label: 'field label',
          required: false
        }
      },
    }
  }),
  on(addFieldToForm, (state) => {
    return {
      ...state,
      isEdit: {id: 0, name: '', editMode: false, editFieldLabel: ''},
      form: [...state.form, {field: state.activeField}],
      activeField: initialState.activeField
    }
  }),
  on(setActiveFieldStyles, (state, {options}) => {
    return {
      ...state,
      isEdit: {id: 0, name: '', editMode: false, editFieldLabel: ''},
      activeField: {
        name: state.activeField.name,
        id: state.activeField.id,
        options
      }
    }
  }),
  on(removeFieldFromForm, (state, {id}) => {
    return {
      ...state,
      isEdit: {id: 0, name: '', editMode: false, editFieldLabel: ''},
      form: state.form.filter(field => id !== field.field?.id)
    }
  }),
  on(editField, (state, {options}) => {
    return {
      ...state,
      isEdit: {id: 0, name: '', editMode: false, editFieldLabel: ''},
      form: state.form.map(field => {
        if (field.field?.id === state.isEdit.id) {
          return {...field, field: {id: state.isEdit.id, name: state.isEdit.name, options: options}}
        }
        return field
      })
    }
  }),
  on(setEditMode, (state, {id, name, label}) => {
    return {
      ...state,
      isEdit: {id, name, editMode: !state.isEdit.editMode, editFieldLabel: label}
    }
  }),
  on(updatedAt, (state, {updatedAt}) => {
    return {
      ...state,
      updatedAt: updatedAt
    }
  })
)
