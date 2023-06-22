import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RoutesAPI } from '../util/routes-api';
import { User } from '../model/user';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {
  URL = RoutesAPI.USERS;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  listaUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.URL}`);
  }  

  getByName(usuario: string): Observable<User> {
    console.log(usuario);
    return this.httpClient.get<User[]>(`${this.URL}?username=${usuario}`).pipe(
      map((users: User[]) => users[0])
    );
  }
  
}
