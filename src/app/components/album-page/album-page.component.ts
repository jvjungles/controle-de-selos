import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../model/albuns';
import { Selo } from '../../model/selos';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css'],
  providers: [AlbumService],
})
export class AlbumPageComponent {

  constructor(private route: ActivatedRoute, private service: AlbumService) { }

  album: Album | undefined;
  selosDoAlbun: Selo[] = [];
  showModal = false;
  showSeloModal = false;
  albumTitle: string = '';
  seloTitle: string = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getById(0).subscribe(album => {
        this.album = album;
        console.log('Album Object:', album);
      });
    });
  }

  onCardClick(selo: any) {
    console.log('Card clicked:', selo);
    this.seloTitle = 'Editar';
    this.showSeloModal = true;
  }

  openSeloModal() {
    console.log('app-selo-list - openModal');
    this.seloTitle = 'Novo';
    this.showSeloModal = true;
  }

  closeSeloModal() {
    console.log('app-selo-list - closeModal');
    this.showSeloModal = false;
  }

  openModal() {
    console.log('app-album-list - openModal');
    this.albumTitle = 'Editar';
    this.showModal = true;
  }

  closeModal() {
    console.log('app-album-list - closeModal');
    this.showModal = false;
  }
}

