import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { albuns } from '../albuns';
import { Album } from '../albuns';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent {

  constructor(private route: ActivatedRoute) { }

  album: Album | undefined;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const album: Album | undefined = albuns.find((album: Album) => album.id === +params['id']);
      this.album = album;
      console.log('Album Object:', album);
    });
  }
}

