import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Data} from './mock-datas';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(): {} | Observable<{}> | Promise<{}> {
    const personnes = Data.getInstance().datas;
    return {personnes};
  }
}
