import { createReducer, on } from '@ngrx/store';
import { filtrosValidos,  setFiltro } from './filtro.actions';

export const estadoInicial: filtrosValidos = "todos";
// IMPORTANTE !! TIPAR EL CREATE REDUCER
export const filtroReducer = createReducer<filtrosValidos>(estadoInicial,
  on(setFiltro, (state, { filtro }) => filtro ),


);
