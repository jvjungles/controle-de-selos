import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RoutesAPI } from '../util/routes-api';
import { Album } from '../model/album';
import { UserService } from '../services/user.service';

@Injectable()
export class AlbumService {
  URL = RoutesAPI.ALBUNS;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private userService: UserService, private httpClient: HttpClient) {}   

  listAlbuns(): Observable<Album[]> {
    const userId = this.userService.getUser()?.id;
    if (userId) {
      const params = new HttpParams().set('userId', userId.toString());
      return this.httpClient.get<Album[]>(`${this.URL}`, { params }).pipe(
        catchError((error) => {
          console.error('Erro ao obter a lista de álbuns:', error);
          return of([]);
        }));
    } else {
      return this.httpClient.get<Album[]>(`${this.URL}`).pipe(
        catchError((error) => {
          console.error('Erro ao obter a lista de álbuns:', error);
          return of([]);
        }));
    }
  }

  getById(id: number): Observable<Album> {
    return this.httpClient.get<Album>(`${this.URL}/${id}`);
  }

  save(album: Album): Observable<Album> {
    return this.httpClient.post<Album>(this.URL, album, this.httpOptions).pipe(
      catchError((error) => {
        console.error('Erro ao salvar o álbum:', error);
        throw error;
      })
    );
  }

  update(album: Album): Observable<Album> {
    return this.httpClient.put<Album>(
      `${this.URL}/${album.id}`, album, this.httpOptions).pipe(
      catchError((error) => {
        console.error(`Erro ao atualizar o álbum com o ID ${album.id}:`, error);
        throw error;
      })
    );
  }

  delete(id: number): Observable<void> {
    const url = `${this.URL}/${id}`;
    return this.httpClient.delete<void>(url, this.httpOptions).pipe(
      catchError((error) => {
        console.error(`Erro ao excluir o álbum com o ID ${id}:`, error);
        throw error;
      })
    );
  }  
}