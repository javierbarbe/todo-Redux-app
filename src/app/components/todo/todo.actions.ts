import { createAction, props } from '@ngrx/store';
import { Todo } from './models/todo.model';

export const crear = createAction(
  '[Todo ] Crear Todo',
  props<{ texto: string }>()
);
export const toggle = createAction(
  '[Todo ] Toggle Todo',
  props<{ id: number }>()
);
export const toggleAll = createAction(
  '[Todo ] Toggle All',
  props<{ completado:boolean }>()
);
export const editarMioObjeto = createAction(
  '[Todo ] Editar MIO Todo',
  props<{ todo: Todo}>()
);
export const editar = createAction(
  '[Todo ] Editar Todo',
  props<{ id:number, texto:string}>()
);
export const borrar = createAction(
  '[Todo ] Borrar Todo',
  props<{ id:number}>()
);

export const limpiarCompletados = createAction("[Todo] Limpiar Completados")


