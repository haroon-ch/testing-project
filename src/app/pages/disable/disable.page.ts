import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disable',
  templateUrl: './disable.page.html',
  styleUrls: ['./disable.page.scss'],
})
export class DisablePage implements OnInit {

  btn: boolean = false;

  
  public count: number = 0;
  constructor() { }

  ngOnInit() {
  }


  btn2() {
    this.btn = true;
  }

  // button
 tapEvent(){
  this.count++;
  setTimeout(() => {
    if (this.count == 1) {
      this.count = 0;
      alert('Single Tap');
    } if (this.count > 1) {
      this.count = 0;
      this.btn = true;
      alert('Double Tap');
    }
  }, 250);
}
}
