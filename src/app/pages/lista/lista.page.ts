import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UserResp } from '../../models/user.model';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  @ViewChild('lista', {static: true})lista: IonList;

  public userList: UserResp[];

  constructor(
    private dataSrv: DataService
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }


  getAllUsers() {
    this.dataSrv.getUsers().subscribe( users => {
      this.userList = users;
    });
  }

  favorite(user: UserResp) {
    console.log('favorite', user);
    this.lista.closeSlidingItems();
  }
  share(user: UserResp) {
    console.log('favorite', user);
    this.lista.closeSlidingItems();
  }
  borrar(user: UserResp) {
    console.log('favorite', user);
    this.lista.closeSlidingItems();
  }

}
