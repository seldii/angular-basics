import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Todo} from '../../modules/Todo';
import{TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  this.todoService.getTodos().subscribe(todos=> {

      this.todos = todos;
   });
  }

  deleteTodo (id: string) {
    this.todoService.deleteTodo(id)
    this.todos = this.todos.filter(t => t.id !== id)
  }

/*   addTodoCompleted(todo: Todo) {
    this.todos = this.todos.concat(todo)
  } */

}
