import { Component } from '@angular/core';

export interface TODO {
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
  todos: TODO[] = [
    {
      id: 1,
      item: 'todo 1',
      isCompleted: false,
      isEditing: false
    },
    {
      id: 2,
      item: 'todo 2',
      isCompleted: true,
      isEditing: false
    },
    {
      id: 3,
      item: 'todo 3',
      isCompleted: false,
      isEditing: false
    }
  ];
  maxId = 3;
  filterCondition = 'all';
  get uncompletedCount() {
    return this.todos.filter(x => x.isCompleted === false).length;
  }
  addTodo(newTodo) {
    if (newTodo !== '') {
      this.todos.push({
        id: ++this.maxId,
        item: newTodo,
        isCompleted: false,
        isEditing: false
      });
    } else {
      alert('請輸入內容');
    }
  }
  deleteTodo(idx) {
    console.log(idx);
    this.todos.splice(idx, 1);
  }
  toggleCompleted(todo) {
    // 改用map處理
    this.todos = this.todos.map(element => {
      if (element === todo) {
        element.isCompleted = !element.isCompleted;
      }
      return element;
    });
    // Method 1
    // const tmpTodos = this.todos.slice();
    // tmpTodos.forEach(element => {
    //   if (element === todo) {
    //     element.isCompleted = !element.isCompleted;
    //   }
    // });
    // this.todos = tmpTodos;

    //todo.isCompleted = !todo.isCompleted;
  }
  toggleAllCompleted(event) {
    if (event.target.checked) {
      this.todos.forEach(element => {
        element.isCompleted = true;
      });
    } else {
      this.toggleAllClearCompleted();
    }
  }
  toggleAllClearCompleted() {
    this.todos.forEach(element => {
      element.isCompleted = false;
    });
  }
  changeFilter(condition) {
    this.filterCondition = condition;
  }
}
