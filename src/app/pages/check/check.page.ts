import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  public data = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: false
    },
    {
      name: 'danger',
      selected: false
    },
    {
      name: 'light',
      selected: false
    },
    {
      name: 'dark',
      selected: false
    },
    {
      name: 'tertiary',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(chekbox: any) {
    console.log(chekbox);
  }

}
