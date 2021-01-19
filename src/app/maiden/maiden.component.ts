import { Component, OnInit } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-maiden',
  templateUrl: './maiden.component.html',
  styleUrls: ['./maiden.component.scss']
})
export class MaidenComponent implements OnInit {
  selectedCar: number;
  range = 0;
  sizes$: Observable<any[]>;
  colors$: Observable<any[]>;
  selectedSize = [{}];
  selectedColor = [{}];
  text;
  constructor(private dataService: DataService, private config: NgSelectConfig) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit() {
    this.sizes$ = this.dataService.getSizeMaiden();
    this.colors$ = this.dataService.getColors();
  }
  
  clearModel() {
    this.selectedSize = [];
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
}
