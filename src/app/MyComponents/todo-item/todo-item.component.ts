import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
 
  @Input() todo!:Todo ;
  @Input() i!:number
  @Output() todelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox : EventEmitter<Todo> = new EventEmitter();
   handleClick(todo:Todo) {
    console.log("Item is deleted!");
    this.todelete.emit(todo);
  }
  handleCheckBox(todo:Todo) {
    console.log(todo);
    this.todoCheckbox.emit(todo);
  }
  }
