import { Component } from '@angular/core';
import { albuns } from '../albuns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent {

  constructor(private router: Router) {}

  albuns = [...albuns];

  share() {
    window.alert('The album has been shared!');
  }

  onCardClick(album: any) {
    console.log('Card clicked:', album);
    this.router.navigate(['/album-page', album]);
  }
  
}