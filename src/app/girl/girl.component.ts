import { Component, OnInit } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-girl',
  templateUrl: './girl.component.html',
  styleUrls: ['./girl.component.scss']
})
export class GirlComponent implements OnInit {
  text;
  selectedCar: number;
  range = 0;
  sizes$: Observable<any[]>;
  colors$: Observable<any[]>;
  selectedSize = [{}];
  selectedColor = [{}];

  constructor(private dataService: DataService, private config: NgSelectConfig) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }
  send(e) {
    console.log("הערה", this.text, e);
    // פה תשמרי את ההערה שנרשמה this.text
    document.getElementById('t').style.display = "none";
    this.text = '';
  }
  addText(){
    document.getElementById('t').style.display = "flex";
  }
  chooseCat(v) {
    switch (v) {
      case 1:
        this.sizes$ = this.dataService.getSizeGirl();
        this.clearModel();
        break;
      case 2:
        this.sizes$ = this.dataService.getSizeMaiden();
        this.clearModel();
        break;
      case 3:
        this.sizes$ = this.dataService.getSizeWomen();
        this.clearModel();
        break;
      default:
        break;
    }
  }
  ngOnInit() {
    this.sizes$ = this.dataService.getSizeGirl();
    this.colors$ = this.dataService.getColors();
  }
  clearModel() {
    this.selectedSize = [];
  }

}
