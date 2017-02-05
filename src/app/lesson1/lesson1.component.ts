import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css'],
  host: {
    '(document:keydown)': 'handleKeyboardEvents($event)',
    '(document:keyup)': 'keyup($event)'
  },

})
export class Lesson1Component implements OnInit {
  title = 'app works!';
  lista:string[]=['1','2','3','4'];
  todoss:string[]=['aaaaa','b','cs'];
  textValue:string;
  headerText="Click item to change the header"
  key;

 //set 'key' when key was down
  handleKeyboardEvents(event: KeyboardEvent) {
    this.key = event.which || event.keyCode;
  }

  //set 'key' when key is up (to reset key value after key is down)
  keyup(event: KeyboardEvent) {
    this.key = null;
  }
  addNewItem(){
    this.lista.push(this.textValue)
  }


  liclick(litext,i){

   if (this.key==16 ){
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
