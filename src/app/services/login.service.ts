import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RoutesAPI } from '../util/routes-api';
import { User } from '../model/user';
import { map, lastValueFrom } from 'rxjs';

@Injectable()
export class LoginService {
  URL = RoutesAPI.USERS;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  async listaUser(): Promise<User[]> {
    try {
      const users: User[] = await lastValueFrom(
        this.httpClient.get<User[]>(this.URL)
      );
      return users;
    } catch (error) {
      throw new Error('Erro ao obter a lista de usuários');
    }
  }  

  async getByName(usuario: string): Promise<User> {
    try {
      const users: User[] = await lastValueFrom(
        this.httpClient.get<User[]>(`${this.URL}?username=${usuario}`)
      );

      if (users.length > 0) {
        return users[0];
      } else {
        throw new Error('Usuário não encontrado');
      }
    } catch (error) {
      throw error;
    }
  }
  
}
