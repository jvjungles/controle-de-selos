import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../../model/album';
import { Selo } from '../../model/selo';
import { AlbumService } from '../../services/album.service';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../../util/constants';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css'],
  providers: [AlbumService],
})
export class AlbumPageComponent {

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private router: Router, private service: AlbumService) { }

  selo: Selo = {};
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
        //console.log('Album Object:', album);
      });
    });
  }

  onCardClick(selo: Selo) {
    //console.log('Card clicked:', selo);
    this.seloTitle = Constants.EDITAR;
    this.albumid = this.album?.id || -1;
    this.showSeloModal = true;
    this.selo = selo;
  }

  openSeloModal() {
    //console.log('app-selo-list - openModal');
    this.seloTitle = Constants.NOVO;
    this.albumid = this.album?.id || -1;
    //console.log('this.albumid' + this.albumid);
    this.selo = {};
    this.showSeloModal = true;
  }

  closeSeloModal() {
    //console.log('app-selo-list - closeModal');
    this.findSeloList();
    this.showSeloModal = false;
  }

  openModal() {
    //console.log('app-album-list - openModal');
    this.albumTitle = Constants.EDITAR;
    this.findSeloList();
    this.albumid = this.album?.id || -1;
    //console.log('this.albumid' + this.albumid);
    this.showModal = true;
  }  

  closeModal() {
    //console.log('app-album-list - closeModal');
    this.findSeloList();
    this.showModal = false;
  }

  findSeloList() {
    this.service.getById(this.album?.id || -1).subscribe(album => {
        this.album = album;
        //console.log('Album Object:', album);
      });   
  } 
  
  openConfirmationModal(): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
        width: '300px'        
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          //console.log('excluir' + (this.album?.id || -1));
          this.service.delete(this.album?.id || -1).subscribe(() => {
            //console.log('Álbum excluído com sucesso');
            this.router.navigate(['/']);
          });
        }
      });
    }
}

