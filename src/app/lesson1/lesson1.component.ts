import {Component, OnInit, HostBinding, HostListener} from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']

})
export class Lesson1Component implements OnInit {
  title = 'app works!';
  lista:string[]=['1','2','3','4','5'];
  todoss:string[]=['aaaaa','b','cs'];
  textValue:string;
  headerText="Click item to change the header"


  addNewItem(){
    this.lista.push(this.textValue)
  }


  liclick(litext,i,event){
   if (event.shiftKey ){
      this.lista.splice(i,1);
    }
    else{
      this.headerText=litext;

    }
  }




  goToMap(){
  }

  constructor() { }

  ngOnInit() {
  }

}
