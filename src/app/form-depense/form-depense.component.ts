import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Depense} from '../datas.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DATE_LOCALE} from '@angular/material';
import {MesValidateurs} from '../mes-validateurs';


@Component({
  selector: 'app-form-depense',
  templateUrl: './form-depense.component.html',
  styleUrls: ['./form-depense.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
  ]
})
export class FormDepenseComponent implements OnInit {
  @Input () depense : Depense;
  @Output() updatedDepense : EventEmitter<Depense>;
  natures = ['Alimentaire', 'Loisirs', 'Voiture', 'Habitat', 'Sport', 'Vacances'];
  pageTitle: string;
  editForm: FormGroup;
  constructor() {
    this.updatedDepense = new EventEmitter<Depense>();
  }

  ngOnInit() {
    this.editForm = new FormGroup({
      nature: new FormControl(undefined, [Validators.required]),
      libelle: new FormControl(undefined, [Validators.required, Validators.minLength(6)]),
      dd: new FormControl(undefined, [Validators.required]),
      montant: new FormControl(undefined, [Validators.required, Validators.pattern('([0-9]*[.])?[0-9]+')]),
    });
    if (this.depense.ident === undefined) {
      this.pageTitle = 'Creation Dépense';
    } else {
      this.pageTitle = 'Modification dépense';
      this.fillForm();
    }
  }

  get libelle() {
    return this.editForm.get('libelle');
  }

  get nature() {
    return this.editForm.get('nature');
  }

  get montant() {
    return this.editForm.get('montant');
  }

  get dd() {
    return this.editForm.get('dd');
  }


  fillForm() { // pas obligatoire
    this.editForm.patchValue({
      nature: this.depense.nature,
      libelle: this.depense.libelle,
      dd: new Date(this.depense.dd),
      montant: this.depense.montant,
    });
  }

  onSubmit() {
    this.depense.nature = this.nature.value;
    this.depense.libelle = this.libelle.value;
    this.depense.montant = this.montant.value;
    this.depense.dd = this.dd.value;
    console.log('submit :', this.depense);
    this.updatedDepense.emit(this.depense);
  }

}
