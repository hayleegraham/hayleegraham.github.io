import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODOS } from '../mock-todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos = TODOS;
  selectedTodo!: Todo;
  constructor() {}

  ngOnInit() {}
  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return;}
    this.todos.push({ id: this.todos.length + 1, name: name });
  }
}
