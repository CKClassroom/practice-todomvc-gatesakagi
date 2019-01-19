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

  get uncompletedCount() {
    return this.todos.filter(x => x.isComplete === false).length;
  }
  addTodo() {
    if (this.newTodo !== '') {
      this.todos.push({
        id: ++this.maxId,
        item: this.newTodo,
        isComplete: false,
        isEditing: false
      });
      this.newTodo = '';
    } else {
      alert('請輸入內容');
    }
  }
  deleteTodo(idx) {
    console.log(idx);
    this.todos.splice(idx, 1);
  }
  toggleCompleted(todo) {
    todo.isComplete = !todo.isComplete;
  }
  toggleAllCompleted(event) {
    if (event.target.checked) {
      this.todos.forEach(element => {
        element.isComplete = true;
      });
    } else {
      this.toggleAllClearCompleted();
    }
  }
  toggleAllClearCompleted() {
    this.todos.forEach(element => {
      element.isComplete = false;
    });
  }
}
