import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../model/album';
import { Selo } from '../../model/selo';
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
  albumid: number = -1;
  seloTitle: string = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getById(+params['id']).subscribe(album => {
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
    this.albumid = this.album?.id || -1;
    this.showSeloModal = true;
  }

  closeSeloModal() {
    console.log('app-selo-list - closeModal');
    this.findSeloList();
    this.showSeloModal = false;
  }

  openModal() {
    console.log('app-album-list - openModal');
    this.albumTitle = 'Editar';
    this.findSeloList();
    this.albumid = this.album?.id || -1;
    console.log('this.albumid' + this.albumid);
    this.showModal = true;
  }

  closeModal() {
    console.log('app-album-list - closeModal');
    this.findSeloList();
    this.showModal = false;
  }

  findSeloList() {
    this.service.getById(this.album?.id || -1).subscribe(album => {
        this.album = album;
        console.log('Album Object:', album);
      });   
  } 
  
}
