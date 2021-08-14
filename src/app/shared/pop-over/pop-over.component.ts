import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
})
export class PopOverComponent implements OnInit {

  public popOverList;


  constructor(private _navParams:NavParams) {
    this.popOverList = [this._navParams.data];
    let newData;
    this.popOverList.forEach(element => {
      if(Object.keys(element).filter(item => (item =='popOver') ? delete element[item] : '')) {}
    });
    console.log(this._navParams.data);
  }

  ngOnInit() {
   
  }

}
