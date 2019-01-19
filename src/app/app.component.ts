import { Component } from '@angular/core';

export interface TODO {
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
  todos: TODO[] = [
    {
      id: 1,
      item: 'todo 1',
      isComplete: false,
      isEditing: false
    },
    {
      id: 2,
      item: 'todo 2',
      isComplete: true,
      isEditing: false
    },
    {
      id: 3,
      item: 'todo 3',
      isComplete: false,
      isEditing: false
    }
  ];
  maxId = 3;
  filterCondition = "all";
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
