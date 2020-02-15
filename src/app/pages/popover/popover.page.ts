import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopInfoComponent } from '../../components/pop-info/pop-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(
    private popOverCtrl: PopoverController
  ) { }

  ngOnInit() {
  }

  async mostrarPop(event: any) {
    const popOver = await this.popOverCtrl.create({
      component: PopInfoComponent,
      event,
      mode: 'ios',
      backdropDismiss: false
    });
    await popOver.present();

    const { data } =  await popOver.onWillDismiss();

    console.log('Padre', data );
  }

}
