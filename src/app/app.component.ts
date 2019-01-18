import { Component } from '@angular/core';

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
      item: this.newTodo
    }

    );
    console.log(this.todos);
    this.newTodo = '';
  }
}
