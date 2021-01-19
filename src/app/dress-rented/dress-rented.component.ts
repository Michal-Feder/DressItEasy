import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dress-rented',
  templateUrl: './dress-rented.component.html',
  styleUrls: ['./dress-rented.component.scss']
})
export class DressRentedComponent implements OnInit {
text;
  constructor() { }
  send(e) {
    console.log("הערה", this.text, e);
    // פה תשמרי את ההערה שנרשמה this.text
    e.target.parentElement.parentElement.parentElement.style.display = "none";
    this.text = '';
  }
  addText(e){
    e.target.parentElement.parentElement.parentElement.children[0].style.display = "flex";
  }
  ngOnInit(): void {
  }

}
