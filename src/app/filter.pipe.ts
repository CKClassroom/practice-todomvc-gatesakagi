import { Pipe, PipeTransform } from '@angular/core';
import { TODO } from './app.component';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(todos: TODO[], condition?: 'all' | 'active' | 'completed'): any {
    // show all
    if (condition === 'all') {
      return todos;
    }

    // show active
    if (condition === 'active') {
      return todos.filter(todo => !todo.isCompleted);
    }

    // show completed
    if (condition === 'completed') {
      return todos.filter(todo => todo.isCompleted);
    }
    return [];
  }

}
