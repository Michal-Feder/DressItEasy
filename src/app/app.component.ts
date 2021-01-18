import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdb-angular-free';
  oldActive;
  changeActive(e){
    this.oldActive?document.getElementById(this.oldActive).classList.remove('active'):false;
    this.oldActive?document.getElementById(this.oldActive).children[0].classList.remove('color-title'):false;
   if(e!='0'){
    document.getElementById(e).classList.add('active');
    document.getElementById(e).children[0].classList.add('color-title');
    this.oldActive=e;
   }
  }
}
