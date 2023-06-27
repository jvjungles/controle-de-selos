import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { Constants } from '../../util/constants';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../model/album';
import { Selo } from '../../model/selo';

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
  nomeUsuario: string = '';  

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getById(+params['id']).subscribe(album => {
        this.album = album;
      });
    });
  }

  onCardClick(selo: Selo) {
    this.seloTitle = Constants.EDITAR;
    this.albumid = this.album?.id || -1;
    this.showSeloModal = true;
    this.selo = selo;
  }

  openSeloModal() {
    this.seloTitle = Constants.NOVO;
    this.albumid = this.album?.id || -1;
    this.selo = {};
    this.showSeloModal = true;
  }

  closeSeloModal() {
    this.findSeloList();
    this.showSeloModal = false;
  }

  openModal() {
    this.albumTitle = Constants.EDITAR;
    this.findSeloList();
    this.albumid = this.album?.id || -1;
    this.showModal = true;
  }  

  closeModal() {
    this.findSeloList();
    this.showModal = false;
  }

  findSeloList() {
    this.service.getById(this.album?.id || -1).subscribe(album => {
        this.album = album;
      });   
  } 
  
  openConfirmationModal(): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
        width: '300px'        
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.service.delete(this.album?.id || -1).subscribe(() => {
            this.redirectToHome()
          });
        }
      });
    }

    redirectToHome() {    
      this.getNomeUsuario();
      if (this.nomeUsuario === '') {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/album-list']);
      }    
    }
  
    getNomeUsuario() {
      const user = localStorage.getItem(Constants.USER);
      this.nomeUsuario = user ? String(user) : '';
    }

    back() {
      this.router.navigate(['/album-list']);
    } 
}

