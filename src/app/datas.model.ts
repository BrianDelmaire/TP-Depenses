export interface Deserializable {
  deserialize(input: any): this;
}

export class Personne implements Deserializable {
  static cpt = 1;
  id: number;
  nom: string;
  prenom: string;
  plafond: number;
  private depenses: Depense[];

  /*
    constructor(nom: string, prenom: string) {
      this.id = Personne.cpt++;
      this.nom = nom;
      this.prenom = prenom;
      this.depenses = [];
    }
  */

  deserialize(input: any): this {
    const obj = Object.assign(this, input);
    if (!obj.id) {
      obj.id = Personne.cpt++;
    }
    obj.depenses = input.depenses.map(depense => new Depense().deserialize(depense));
    return obj;
  }

  get ident() {
    return this.id;
  }

  get montantDepenses() {
    return this.depenses.map(depense => depense.montant).reduce((acc, montant) => {
      return acc + montant;
    }, 0.0);
  }

  getMontantByNature(nature: string): number {
    return this.depenses.filter(dep => dep.nature === nature).map(depense => depense.montant).reduce((acc, montant) => {
      return acc + montant;
    }, 0.0);
  }

  getDepense(id: number): Depense {
    return this.depenses.filter(d => d.ident === id).reduce((_, x) => x);
  }

  getDepensesByNature(nature: string): Depense[] {
    return this.depenses.filter(dep => dep.nature === nature);
  }


  removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b);
  }

  sortByNature() {
    return this.depenses.sort((x, y) => (x.nature > y.nature) ? 1 : -1);
  }

  get naturesBis() {
    return this.removeDuplicates(this.depenses.map(d => d.nature));
  }

  get natures() {
    return [...new Set(this.depenses.map(d => d.nature))];
  }

  supprimeDepense(id: number): boolean {
    const index = this.depenses.findIndex(d => d.ident === id);
    if (index !== -1) {
      this.depenses.splice(index, 1);
      return true;
    }
    return false;
  }

  updateDepense(depense: Depense): boolean {
    const index = this.depenses.findIndex(d => d.ident === depense.ident);
    if (index !== -1) {
      this.depenses[index] = depense;
      return true;
    }
    return false;
  }

  createDepense(depense: Depense): boolean {
    this.depenses.push(depense);
    return true;
  }

}

export class Depense implements Deserializable {
  static cpt = 1;
  private id: number;
  dd: Date;
  nature: string;
  libelle: string;
  private aMontant: number;

  deserialize(input: any): this {
    const obj = Object.assign(this, input);
    if (!obj.id) {
      obj.id = Depense.cpt++;
    }
    return obj;
  }

  get ident() {
    return this.id;
  }

  get montant() {
    return +this.aMontant;
  }

  set montant(montant: number) {
    this.aMontant = montant;
  }
}
