import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./components/todo/models/todo.model";
import { todoReducer } from "./components/todo/todo.reducer";
import { filtrosValidos } from "./components/filtro/filtro.actions";
import { filtroReducer } from "./components/filtro/filtro.reducer";

export interface AppState{
  todos:Todo[],
  filtro:filtrosValidos
}


export const appReducers:ActionReducerMap<AppState> = {
  todos:todoReducer,
  filtro:filtroReducer
}
