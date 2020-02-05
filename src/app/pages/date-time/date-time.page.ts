import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  public fechaNacimiento: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(evento: any) {
    // console.log(evento.d);
    // console.log(this.fechaNacimiento);
  }

}
