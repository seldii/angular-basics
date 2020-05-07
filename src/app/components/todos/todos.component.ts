import { Component, OnInit } from '@angular/core';
import { Todo } from '../../modules/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: any;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      console.log(todos);
      this.todos = todos;
    });
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id);
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todoService.addTodo(todo);
  }

  toggleCompleted(todo: Todo) {
    console.log(todo);
    this.todoService.toggleCompleted(todo);
  }
}
