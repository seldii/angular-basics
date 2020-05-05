import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
import {Todo} from './../modules/Todo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private db:AngularFireDatabase) { }

  getTodos():Observable<Todo[]> {
    return this.db.list('todos').snapshotChanges().pipe(
      map(res => {
        return res.map(element => {
          let user = element.payload.toJSON();
          user["$key"] = element.key;
          return user as Todo;
        });
    }));;
  }

  addTodo(todo: Todo){
    return this.db.list('todos').push(todo);
}

deleteTodo (id: string){
  return this.db.list('/todos/' + id).remove();
}
}
