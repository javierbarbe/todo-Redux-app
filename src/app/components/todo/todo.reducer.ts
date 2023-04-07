import * as actions from './todo.actions';
import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo("Salvar al mundo"),
  new Todo("Vencer a Thanos"),
  new Todo("Comprar traje de IronMan"),
  new Todo("Robar escudo de Capitan America"),
];

export const todoReducer = createReducer(estadoInicial,
  on(actions.crear, (state, { texto }) => [ ...state, new Todo(texto) ] ),
  on(actions.toggle, (state, { id }) => {
    return state.map(todo=> {
      if (todo.id === id){  return {...todo, completado : !todo.completado} }
      else return {...todo}
    })
  } ),
  on(actions.editarMioObjeto, (state, { todo })=>{
    return state.map(todoMap=> {
      if (todo.id === todoMap.id) {
        console.log("el nuevo todo",todo)
        return { ...todo}
      }
      else return {...todoMap}
    })
  }),
  on(actions.editar, (state, {id, texto})=>{
    return state.map((todoMap)=> {
      if (id === todoMap.id) {
        return {...todoMap, texto }
      }
      else return {...todoMap}
    })
  }),
  on(actions.borrar, (state, { id }) => state.filter( (todo ) => ( id !== todo.id )  ) ),
  on(actions.toggleAll, (state, { completado })=>  state.map( todo => ({...todo, completado}) ) ),
  on(actions.limpiarCompletados, (state)=>  state.filter( todo =>  !todo.completado ) )
);
