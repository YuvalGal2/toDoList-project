import { TodoService } from './todo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { todo } from './todo/todo.model';
import { Observable, Subscription, observable } from 'rxjs';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(private service:TodoService) {}
  toDoList:todo[] = [];
  dataSubscription:Subscription;

  ngOnInit() {
    // getting the built in list-values  is there are any.
    this.dataSubscription = this.service.fetchData().subscribe(observer => {
     this.toDoList = observer;
   });
  }

  updateListOnDelete(todoList:todo[]){
    // on delete action  the Eventemitter sends the new data to this function.
   this.toDoList = todoList;
  }
  onClickCreate(){
  this.service.showCreateTask = true;
  }
  ngOnDestory(){
    this.dataSubscription.unsubscribe();
  }
}
