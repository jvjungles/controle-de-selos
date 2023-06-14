import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Album } from '../model/albuns';

@Injectable()
export class AlbumService {
  URL = 'http://localhost:3000/albuns';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  listalbuns(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.URL}`);
  }  

  getById(id: number): Observable<Album> {
    return this.httpClient.get<Album>(`${this.URL}/${id}`);
  }

  save(album: Album): Observable<Album> {
    return this.httpClient.post<Album>(this.URL, album, this.httpOptions);
  }
}
