import { Component } from '@angular/core';

interface TODO {
  id: number;
  item: string;
  isComplete: boolean;
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
  todos: TODO[] = [];
  maxId = 0;
  addTodo() {
    this.todos.push({
      id: ++this.maxId,
      item: this.newTodo,
      isComplete: false,
      isEditing: false
    });
    this.newTodo = '';
  }
  deleteTodo(idx) {
    console.log(idx);
    this.todos.splice(idx, 1);
  }
  toggleCompleted(todo) {
    todo.isComplete = !todo.isComplete;
  }
  toggleAllCompleted() {
    this.todos.forEach(element => {
      element.isComplete = true;
    });
  }
}
