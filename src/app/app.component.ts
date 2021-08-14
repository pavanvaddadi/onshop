import { TokenService } from './core/_services/token.service';
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopOverComponent } from './shared/pop-over/pop-over.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public data: Array<Object>;
  constructor(private popoverCtrl: PopoverController , private tokenService: TokenService) {}

  async showPopover(event) {
    this.data =  [ {icon: 'mail', title: 'Profile'},
                  {icon: 'mail', title: 'My Orders'},
                {icon: 'mail', title: 'Wish List'},
                {icon: 'mail', title: 'Logout'}];
    let  popover = await this.popoverCtrl.create({
      component: PopOverComponent,
      componentProps:  this.data,
      event
     });
    await popover.present();
  }
}
