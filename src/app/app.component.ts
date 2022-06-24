import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  menus: Array<PoMenuItem> = [
    {label: 'Home', icon: 'po-icon-home', shortLabel: 'Home', link: '/home'},
    {label: 'Sobre', icon: 'po-icon-user', shortLabel: 'Sobre', link: '/about' },
    {label: 'Portfólio', icon: 'po-icon po-icon-folder', shortLabel: 'Portfólio' },
    {label: 'Currículo', icon: 'po-icon po-icon-clipboard', shortLabel: 'Currículo' },
    {label: 'Contato', icon: 'po-icon po-icon-telephone', shortLabel: 'Contato' }
  ]

  printMenuAction() {
    console.log('foi')
  }

}
