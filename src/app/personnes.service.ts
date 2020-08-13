import {Injectable} from '@angular/core';
import {Data} from './mock-datas';
import {Personne} from './datas.model';
import {MessagesService} from './messages.service';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {
  readonly apiUrl: string = 'api/personnes';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };
  constructor(private messageService: MessagesService, private http: HttpClient) {
  }

  // Retourne toutes les personnes
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Observable<Personne[]>>(this.apiUrl).pipe(
      tap((rep: any) => console.log(rep)),
      map(rep => rep.map(p => new Personne().deserialize(p))),
      catchError(this.handleError<Personne[]>(`getPersonnes`, []))
    );
  }

  getPersonne(id): Observable<Personne> {
    const url = `${this.apiUrl}/${id} `;
    return this.http.get<Observable<Personne>>(url).pipe(
      tap((rep: any) => console.log(rep)),
      map(rep => new Personne().deserialize(rep)),
      catchError(this.handleError<Personne>(`getPersonne id = ${id}`))
    );
  }

  updatePersonne(personne: Personne): Observable<Personne> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.apiUrl}/${personne.ident} `;
    const prs = JSON.parse(JSON.stringify(personne));
    console.log('personne à modifier : ', prs);
    return this.http.put<Personne>(url, prs, this.httpOptions).pipe(
      // tap(x => console.log(x)),
      // map(rep => new Personne().deserialize(rep)),
      catchError(this.handleError<Personne>(`updatePersonne id = ${personne.id}`))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed : ${error.message}`);
      return of(result as T);
    };
  }

}
