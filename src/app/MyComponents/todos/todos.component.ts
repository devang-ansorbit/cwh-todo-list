import { Component } from '@angular/core';
import { About } from 'src/app/About';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
aboutToDo(about: About): void  {
console.log('I am about',about);
}
 todos: Todo[];
 localItem: string | null

 constructor(){
  this.localItem = localStorage.getItem("todos");
  if(this.localItem == null) {
    this.todos = [];
  }else {
    this.todos = JSON.parse(this.localItem);
  }
  // this.todos = [
  //   // {
  //   //   sno: 1,
  //   //   title: 'This is a title-1',
  //   //   desc: 'This is a description',
  //   //   active: true
  //   // },
  //   //  {
  //   //   sno: 2,
  //   //   title: 'This is a title-2',
  //   //   desc: 'This is a description',
  //   //   active: true
  //   // },
  //   //  {
  //   //   sno: 3,
  //   //   title: 'This is a title-3',
  //   //   desc: 'This is a description',
  //   //   active: true
  //   // }
  // ]
 }

 deleteToDo(todo: Todo): void {
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(this.todos));
 }

 addToDo(todo: Todo): void {
  console.log(todo);
  this.todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(this.todos));
 }

 toggleToDo(todo: Todo): void {
  console.log(todo);
 const index = this.todos.indexOf(todo);
  this.todos[index].active = !this.todos[index].active;
 }
}
