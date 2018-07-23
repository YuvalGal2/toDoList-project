import { todo } from './../todo/todo.model';
import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css']
})
export class CreateToDoComponent implements OnInit {
 todo:todo;
  constructor(private TodoService:TodoService) { }
  ngOnInit() { }

  onSubmit(formObject:NgForm){
    this.TodoService.CurrentId++;

    this.todo = {
      id:this.TodoService.CurrentId,
      date:formObject.value.date,
      content: formObject.value.comment,
      title: formObject.value.title,
      checkedStatus: false
    };
    this.TodoService.showCreateTask = false;
    this.TodoService.onAddTodo(this.todo);
  }

  onClickCancel(){
    this.TodoService.showCreateTask = false;
    return;
  }
}
