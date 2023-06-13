import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';


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

  ngOnInit() {
    this.albumService.listalbuns().subscribe(albums => {
      this.albuns = albums;
      console.log('albuns2:', this.albuns);
    });    
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
    this.showModal = false;
  }
  
}