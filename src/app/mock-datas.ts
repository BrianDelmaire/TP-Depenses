import * as faker from 'faker';
import {Personne} from './datas.model';


export class Data {
  private static instance: Data;
  private lesDatas: Personne[];

  private constructor() {
    this.lesDatas = [];
  }

  public static getInstance(): Data {
    if (!Data.instance) {
      Data.instance = new Data();
    }

    return Data.instance;
  }

  private genereData(): Personne[] {
    const tab = [];
    faker.locale = 'fr';
    for (let i = 0; i < 10; i++) {
      const nbDepenses = faker.random.number({min: 10, max: 20});
      const tabDep = [];
      for (let j = 0; j < nbDepenses; j++) {
        const dep = {
          nature: faker.random.arrayElement(['Alimentaire', 'Loisirs', 'Voiture', 'Habitat', 'Sport', 'Vacances']),
          dd: faker.date.between('2019-01-01', '2019-12-31'),
          libelle: faker.hacker.phrase(),
          montant: faker.finance.amount(50, 500, 2),
        };
        tabDep.push(dep);
      }
      const objet = {
        nom: faker.name.lastName(),
        prenom: faker.name.firstName(),
        plafond: faker.finance.amount(5000, 10000, 2),
        depenses: tabDep
      };
//      console.log(objet);
      tab.push(objet);
    }
    return tab;
  }


  get datas(): Personne[] {
    if (this.lesDatas.length === 0) {
      this.lesDatas = this.genereData();
      const str = JSON.stringify (this.lesDatas);
      this.lesDatas = JSON.parse(str).map(p => new Personne().deserialize(p));
    }
    return this.lesDatas;
  }
}
