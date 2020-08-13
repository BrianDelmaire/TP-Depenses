import { Component, OnInit } from '@angular/core';
import {Depense, Personne} from '../datas.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonnesService} from '../personnes.service';

@Component({
  selector: 'app-create-depense',
  templateUrl: './create-depense.component.html',
  styleUrls: ['./create-depense.component.css']
})
export class CreateDepenseComponent implements OnInit {
  loading: boolean;
  depense: Depense;
  personne: Personne;
  constructor(private route: ActivatedRoute, private router: Router, private service: PersonnesService) { }

  ngOnInit() {
    const idP = +this.route.snapshot.paramMap.get('id_p');
    this.loading = true;
    this.service.getPersonne(idP).subscribe(personne => {
      this.personne = personne;
      this.depense = new Depense();
      this.loading = false;
      console.log('Dépense sélectionnee : ', this.depense);
    });
  }
  createDepense($event) {
    console.log('creation d\'une dépense : ', this.personne);
    this.personne = new Personne().deserialize(this.personne);
    console.log('creation d\'une dépense : ', this.personne);
    if (this.personne.createDepense($event)) {
      this.loading = true;
      this.service.updatePersonne(this.personne).subscribe(personne => {
        this.loading = false;
      });
    }
    this.router.navigate(['/details', this.personne.ident]);
  }

}
