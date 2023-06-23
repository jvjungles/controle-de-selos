import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  listalbuns(): Observable<Album[]> {
    const userId = this.userService.getUser()?.id;

    if (userId) {
      const params = new HttpParams().set('userId', userId.toString());

      return this.httpClient.get<Album[]>(`${this.URL}`, { params });
    } else {
      return this.httpClient.get<Album[]>(`${this.URL}`);
    }
  }

  getById(id: number): Observable<Album> {
    return this.httpClient.get<Album>(`${this.URL}/${id}`);
  }

  save(album: Album): Observable<Album> {
    return this.httpClient.post<Album>(this.URL, album, this.httpOptions);
  }

  update(album: Album): Observable<Album> {
    return this.httpClient.put<Album>(
      `${this.URL}/${album.id}`,
      album,
      this.httpOptions
    );
  }

  delete(id: number): Observable<void> {
    const url = `${this.URL}/${id}`;
    return this.httpClient.delete<void>(url, this.httpOptions);
  }  
}
