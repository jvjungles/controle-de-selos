import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlbumService } from '../../services/album.service';
import { Shared } from '../../util/shared';
import { Constants } from '../../util/constants';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent {

  constructor(private router: Router, private albumService: AlbumService) {}

  albuns: any[] = [];
  showModal = false;
  albumTitle: string = '';
  albumQtde: number = 0;
  nomeUsuario: string = '';

  ngOnInit() {
    this.findAlbumList(); 
    const userId = localStorage.getItem(Constants.USER);
    this.nomeUsuario = userId ? String(userId) : ''; 
    this.albumQtde = +localStorage.getItem(Constants.ALBUNS_SIZE)!;   
  }

  onCardClick(album: any) {
    this.router.navigate(['/album-page', album]);
  }

  openModal() {
    this.albumTitle = Constants.NOVO;
    this.showModal = true;
  }

  closeModal() {
    this.findAlbumList();
    this.showModal = false;
  }  
  
  findAlbumList() {
    this.albumService.listAlbuns().subscribe({
      next: albums => {
        this.albuns = albums;
        Shared.initializeWebStorage(this.albuns);
        this.albumQtde = +localStorage.getItem(Constants.ALBUNS_SIZE)!;
      },
      error: error => {
        console.error('Erro ao obter a lista de álbuns:', error);
        this.albuns = [];
        Shared.initializeWebStorage(this.albuns);
        this.albumQtde = 0;
      }
    });
  }

  sair() {
    localStorage.setItem(Constants.USER, '');
    this.router.navigate(['/']);
  }
}