import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  public porcentaje: number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  cambioValor(newValor: any) {
    console.log(newValor);
    this.porcentaje = newValor.detail.value * 0.01;
  }

}
