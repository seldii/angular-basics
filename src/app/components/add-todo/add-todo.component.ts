import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form) {

    const newTodo = {
      title: form.value.title,
      completed: false,
    };

    if(form.valid){
       this.addTodo.emit(newTodo);
    }
   
  }
}
