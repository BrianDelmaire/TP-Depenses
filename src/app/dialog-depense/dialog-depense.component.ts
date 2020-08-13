import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Depense} from '../datas.model';
import {DialogData} from '../details-personne/details-personne.component';

@Component({
  selector: 'app-dialog-depense',
  templateUrl: './dialog-depense.component.html',
  styleUrls: ['./dialog-depense.component.css']
})
// ne pas oublier d'import le module dans angular-material.modules -> MatDialogMaterial,
export class DialogDepenseComponent implements OnInit {
  depense: Depense;

  constructor(public dialogRef: MatDialogRef<DialogDepenseComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
