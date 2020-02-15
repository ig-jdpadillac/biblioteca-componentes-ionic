import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from '../../models/Componentet';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public componentes: Observable<Componente[]>;

  constructor(
    private dataSrv: DataService
  ) { }

  ngOnInit() {
    this.componentes = this.dataSrv.getMenuOpts();
  }


  onClick() {

  }

}
