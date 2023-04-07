import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { Todo } from '../models/todo.model';
import { filtrosValidos, setFiltro } from '../../filtro/filtro.actions';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  pendientes:number;
  _muestraTodos:boolean;
  _muestraSoloActivos:boolean;
  _muestraSoloCompletados:boolean;
  filtroActual:filtrosValidos = "todos";
  filtros:filtrosValidos[] = ['completados','pendientes','todos']
  listaTodos:Todo[];
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    //#region __ LARGA VERSION
    // this.store.select("todos").subscribe(listaTodos=> {
    //   this.cantidadTodosSinTerminar = listaTodos.filter(todo=> todo.completado == false).length;

    // });
    // this.store.select("filtro").subscribe( filtro=> this.filtroActual = filtro)
    //#endregion
    this.store.subscribe(state=> {
      this.pendientes = state.todos.filter( todo=> !todo.completado ).length;
      this.filtroActual = state.filtro
    })
  }

  cambiarFiltro(filtro:filtrosValidos){
    this.store.dispatch( setFiltro( {filtro} ))
  }

  limpiarCompletados(){
    this.store.dispatch(limpiarCompletados())
  }

}
