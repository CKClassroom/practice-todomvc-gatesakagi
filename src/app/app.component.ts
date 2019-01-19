import { Component } from '@angular/core';

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
    });
    this.newTodo = '';
  }
}
