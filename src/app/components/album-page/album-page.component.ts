import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { albuns } from '../../model/albuns';
import { Album } from '../../model/albuns';
import { selos } from '../../model/selos';
import { Selo } from '../../model/selos';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent {

  constructor(private route: ActivatedRoute) { }

  album: Album | undefined;
  selos = [...selos];
  selosDoAlbun: Selo[] = [];
  showModal = false;
  showSeloModal = false;
  albumTitle: string = '';
  seloTitle: string = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      const album: Album | undefined = albuns.find((album: Album) => album.id === +params['id']);
      this.album = album;

      const selosDoAlbun: Selo[] = selos.filter((selo: Selo) => selo.albunId === +params['id']);
      this.selosDoAlbun = selosDoAlbun;

      console.log('Album Object:', album);
      console.log('Selos:', selosDoAlbun);
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

