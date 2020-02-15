import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre: any;
  @Input() pais: any;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirCOnArgumentos() {
    this.modalCtrl.dismiss({
      nombre: 'jonathan',
      pais: 'jamaica'
    });
  }

}
