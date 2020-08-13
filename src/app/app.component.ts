import { Component } from '@angular/core';
import {Personne} from './datas.model';
import {Data} from './mock-datas';
import {MessagesService} from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp-routage';
  personnes: Personne[];
  panelOpenState = false;

  constructor(messagesService: MessagesService) {
    this.personnes = Data.getInstance().datas;
    messagesService.add('nombre de personnes : ' + this.personnes.length);
    console.log(this.personnes);
  }
}
