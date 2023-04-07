import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { borrar, editar, editarMioObjeto, toggle } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input('todo') todo: Todo;
  @ViewChild('txtEditandoInput') txtEditandoInput: ElementRef;
  editando: boolean = false;
  chkCompletado: FormControl;
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.todo = new Todo('');
    this.chkCompletado = new FormControl();
    this.txtInput = new FormControl();
  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe((valor) => {
      this.store.dispatch(toggle({ id: this.todo.id }));
      console.log({ valor });
    });
  }

  editar() {

    this.editando = true;
    this.txtInput.setValue(this.todo.texto);

    setTimeout(() => {
      this.txtEditandoInput.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {

    this.editando = false;

    if(this.txtInput.invalid) return;
    if(this.txtInput.value === this.todo.texto) return;
    this.store.dispatch(editar({ id:this.todo.id, texto: this.txtInput.value }));

    //#region --MI VERSION CON UN OBJDTO ENTERO TODO --
    // const todoEditado: Todo = {
    //   completado: this.chkCompletado.value,
    //   id: this.todo.id,
    //   texto: this.txtInput.value,
    // };
    // this.store.dispatch(editarMioObjeto({ todo: todoEditado }));
    //#endregion
  }

  borrar(){
    this.store.dispatch(borrar( {id:this.todo.id} ))
  }
}
