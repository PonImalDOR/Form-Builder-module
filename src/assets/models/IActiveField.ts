import {IStyles} from "./IStyle";

export interface IActiveField {
  name: string,
  id: number,
  options: IActiveFieldOptions
}
export interface IActiveFieldOptions {
  styles: IStyles,
  label: string,
  placeholder?: string,
  text?: string,
  required: boolean
}
