import {AbstractControl} from '@angular/forms';
import * as moment from 'moment';


export class MesValidateurs {
  static nomValide(c: AbstractControl): {[s: string]: string } {
    const tab = ['tititi', 'tototo', 'tututu'];
    if (tab.includes(c.value)) {
      return {nomInvalid: c.value};
    }
    return undefined;
  }
  static dateValide(c: AbstractControl) : {[s: string]: string } {
    if (c && c.value && !moment(c.value, 'DD/MM/YYYY', true).isValid()) {
      console.log(c.value);
      return {dateInvalid: c.value };
    }
    return undefined;
  }
}
