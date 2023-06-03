import { Component } from '@angular/core';
import { albuns } from '../albuns';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent {
  albuns = [...albuns];

  share() {
    window.alert('The album has been shared!');
  }
  onCardClick(album: any) {
    console.log('Card clicked:', album);
    alert('\n' +
          'id: ' +  
          album.id + 
          '\n' + 
          'Album: ' +
          album.name + 
          '\n' + 
          'Descrição: ' +
          album.description);

  }
}