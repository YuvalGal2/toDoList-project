import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:"limit"
})

export class textSizing implements PipeTransform{
transform(value:string){
   if(value.length >= 50){
       let newValue =  value.slice(0,50) + "...";
       return newValue;
   }
  
}


}