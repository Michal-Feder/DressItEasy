import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-dress',
  templateUrl: './edit-dress.component.html',
  styleUrls: ['./edit-dress.component.scss']
})
export class EditDressComponent implements OnInit {
  selectedCar: number;
  range = 0;
  sizes$: Observable<any[]>;
  colors$: Observable<any[]>;
  fabric$: Observable<any[]>;
  selectedSize = [{}];
  selectedColor = [{ }];
  selectedFabric = [{ }];
  model: NgbDateStruct;
  model1: NgbDateStruct;

  constructor(private dataService: DataService, private config: NgSelectConfig) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit() {
    this.sizes$ = this.dataService.getSizeWomen();
    this.colors$ = this.dataService.getColors();
    this.fabric$ = this.dataService.getFabrics();
  }

  changeRange(e) {
    this.range = e.target.value;
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
