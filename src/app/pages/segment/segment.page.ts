import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { HeoreModel } from '../../models/heroes.interfce';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  public superHeroes: Observable<HeoreModel[]>;
  public publisher: string = '';

  constructor(
    private dataSrv: DataService
  ) { }

  ngOnInit() {
    this.segment.value = 'Todos';
    this.superHeroes = this.dataSrv.getHeroes();
  }

  segmentChanged(event: any): void {

    const valor = event.detail.value;

    if (valor === 'Todos') {
      this.publisher = '';
    }

    this.publisher = valor;
    console.log(valor);
  }

}
