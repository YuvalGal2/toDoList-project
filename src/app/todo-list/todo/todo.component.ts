import { todo } from './todo.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
@Input() todo;
@Output() updateOnDelete = new EventEmitter<todo[]>();
isChecked:boolean;
constructor(private service:TodoService){}

  setDefaultCheckValue(){
    this.isChecked = this.todo.checkedStatus 
    return this.isChecked;
  }

  onChangeChecked(checkedStatus){
    let id = this.todo.id;
    this.isChecked = checkedStatus.checked;
    this.service.onChangeStatus(id,checkedStatus.checked)
  }


  onDeleteClicked(){
    this.updateOnDelete.emit(this.service.onDelete(this.todo.id));
  }

}
