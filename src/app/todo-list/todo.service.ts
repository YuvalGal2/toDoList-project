import { todo } from './todo/todo.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  showCreateTask:boolean = false;
  private toDoListArray:todo[]  = [
    {id:1, title:"Simple TODO",date:'23/07/2017', checkedStatus:true,content:"Lorem ipsum dolor sit amet, ex eos bonorum accusam suavitate, at suas vivendum forensibus sea. An nam tempor eleifend, ne delenit eleifend pro. Qui nulla invenire voluptatum ut, ad nec admodum aliquando signiferumque. Ea etiam civibus partiendo sed, cu sanctus urbanitas dissentiet sed. Ne voluptua moderatius has. Dolor tincidunt mei eu."}
  ];
  //  Counter is clearfix to the bug of getting the current id (after delete previous todo)
  CurrentId = this.toDoListArray.length;



  fetchData(){
   return of(this.toDoListArray);
  }

  assignData(listArray:todo[]){
    this.toDoListArray = listArray;
  }


  onAddTodo(task:todo){
  this.toDoListArray.push(task);
  console.log(this.toDoListArray);
  }


  onChangeStatus(id,status){
    /* 
    loopin on every item on the todolist array, if found an item with the id which were passed in
    change the status of that item to the new status which were passed.
    */
  for(let i=0; i<this.toDoListArray.length; i++){
    if(this.toDoListArray[i].id === id){
     this.toDoListArray[i].checkedStatus = status;
     
        }
     }
  }


  onDelete(id){
    let filteredArray:todo[];
    this.fetchData().subscribe((observer) => {
    filteredArray = observer.filter((item) => item.id !== id);
    this.assignData(filteredArray);
    });
    return filteredArray;
  }

}
