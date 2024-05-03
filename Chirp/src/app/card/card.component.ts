import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit(): void {
  }

  currentTime = new Date();

  getTimeDiff(time: any) {
    return Math.floor((this.currentTime.getTime()-time.getTime())/(86400*1000));
  }


}
