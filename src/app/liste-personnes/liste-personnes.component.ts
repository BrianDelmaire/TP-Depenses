import { Component, OnInit } from '@angular/core';
import {PersonnesService} from '../personnes.service';
import {Personne} from '../datas.model';

@Component({
  selector: 'app-liste-personnes',
  templateUrl: './liste-personnes.component.html',
  styleUrls: ['./liste-personnes.component.css']
})
export class ListePersonnesComponent implements OnInit {
  loading: boolean = false;
  personnes: Personne[];
  constructor(private personnesService: PersonnesService) { }

  ngOnInit() {
    this.loading = true;
    this.personnesService.getPersonnes().subscribe(rep => {
//      console.log(rep);
      this.personnes = rep;
      this.loading = false;
    });
  }
}
