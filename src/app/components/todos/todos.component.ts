import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../../modules/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: any;
  private todosSubscription : Subscription;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todosSubscription = this.todoService.getTodos().subscribe((todos) => {
      console.log(todos);
      this.todos = todos;
    });
  }

  ngOnDestroy() {
    this.todosSubscription.unsubscribe()
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
