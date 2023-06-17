import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Shared } from '../../util/shared';


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

  ngOnInit() {
    this.findAlbumList();  
    this.albumQtde = +localStorage.getItem('ALBUNS.SIZE')!;   
  }  

  share() {
    window.alert('The album has been shared!');
  }

  onCardClick(album: any) {
    console.log('Card clicked:', album);
    this.router.navigate(['/album-page', album]);
  }

  openModal() {
    console.log('app-album-list - openModal');
    this.albumTitle = 'Novo';
    this.showModal = true;
  }

  closeModal() {
    console.log('app-album-list - closeModal');
    this.findAlbumList();
    this.showModal = false;
  }

  findAlbumList() {
    this.albumService.listalbuns().subscribe(albums => {
      this.albuns = albums;
      Shared.initializeWebStorage(this.albuns); 
      console.log('albuns:', this.albuns);
      this.albumQtde = +localStorage.getItem('ALBUNS.SIZE')!; 
    });    
  }  
}