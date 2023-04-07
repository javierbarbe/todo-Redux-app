import { ReactiveFormsModule } from '@angular/forms';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [
    TodoFooterComponent,
    TodoAddComponent,
    TodoItemComponent,
    TodoPageComponent,
    TodoListComponent,
    FiltroPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPageComponent,

  ]
})
export class TodoModule { }
