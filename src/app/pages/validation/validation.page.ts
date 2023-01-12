import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage implements OnInit {


  constructor() { }

  ngOnInit() {

  }
  // getDate(e:any) {
  //   let date = new Date(e.target.value).toISOString().substring(0, 10);
  //   this.ionicForm.get('dob').setValue(date, {
  //     onlyself: true
  //   })
  // }



}
