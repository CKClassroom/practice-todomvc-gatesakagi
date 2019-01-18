import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';

interface Todo {
  id: number;
  item: string;
  isCompleted: boolean;
  isEditing: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODOMVC';
  placeholderText = 'What needs to be done?';
  newTodo = '';
  todos = [];
  maxId = 0;

  addTodo() {
    this.todos.push({
      id: ++this.maxId,
      item: this.newTodo,
      isCompleted: false
    }

    );
    console.log(this.todos);
    this.newTodo = '';
  }
  toggleComplete(todo: Todo) {
    var tmpTodos = this.todos.slice();
    tmpTodos.forEach(element => {
      if (element === todo) {
        element.isCompleted != element.isCompleted;
      }
    });
    this.todos = tmpTodos;
  }
}
