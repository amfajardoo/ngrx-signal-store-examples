import { Component, inject } from '@angular/core';
import { TodoStore } from '../../store/todos.store';
import { patchState } from '@ngrx/signals';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [JsonPipe],
  providers: [TodoStore],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  todoStore = inject(TodoStore);

  selectItem(todoId: string) {
    patchState(this.todoStore, { selectedTodoId: todoId });
  }
}
