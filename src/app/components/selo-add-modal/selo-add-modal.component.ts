import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { AlbumService } from '../../services/album.service';
import { seloTypes } from '../../model/selotype';
import { Album } from '../../model/album';
import { Selo } from '../../model/selo';

@Component({
  selector: 'app-selo-add-modal',
  templateUrl: './selo-add-modal.component.html',
  styleUrls: ['./selo-add-modal.component.css']
})
export class SeloAddModalComponent {

  constructor(private dialog: MatDialog, private service: AlbumService) { }

  @Input() showSeloModal: boolean = false;
  @Input() seloTitle: String = '';
  @Input() albumid: number = -1;
  @Input() selo: Selo | undefined;  
  @Output() closeModalEvent = new EventEmitter<void>(); 

  seloTypes = seloTypes;  
  album: Album | undefined;
  
  closeModal() {
    this.showSeloModal = false;
    this.closeModalEvent.emit(); 
  }

  saveModal() {
    this.service.getById(this.albumid).subscribe(album => {
      this.album = album;
          
      if (!this.album.selos) {
        this.album.selos = [];
      }

      if (this.selo?.id) {

        const index = this.album.selos.findIndex(item => item.id === this.selo?.id);

        if (this.album.selos.findIndex(item => item.id === this.selo?.id) !== -1) {
          this.album.selos[index].name = this.selo?.name;
          this.album.selos[index].description = this.selo?.description;
          this.album.selos[index].type = this.selo?.type;
          this.album.selos[index].year = this.selo?.year;
          this.album.selos[index].country = this.selo?.country;
          this.album.selos[index].stamp = this.selo?.stamp;
          this.album.selos[index].filigram = this.selo?.filigram;
          this.album.selos[index].link = this.selo?.link;
        }

      } else {
        const maiorId = this.album?.selos?.reduce((maxId, selo) => (selo.id && selo.id > maxId) ? selo.id : maxId, 0);
        
        const selo: Selo = {
          id: maiorId + 1,
          name: this.selo?.name,
          description: this.selo?.description,
          type: this.selo?.type,
          year: this.selo?.year,
          country: this.selo?.country,
          stamp: this.selo?.stamp,
          filigram: this.selo?.filigram,
          link: this.selo?.link
        };
        this.album.selos.push(selo);
      }

      this.service.update(album).subscribe(savedAlbum => {
        this.showSeloModal = false;
        this.closeModalEvent.emit(); 
      });
    });    
  }

  openConfirmationModal(): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
        width: '300px'        
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.excluir();
        }
      });
    }
  
  excluir() {
    this.service.getById(this.albumid).subscribe(album => {
      this.album = album;
          
      if (!this.album.selos) {
        this.album.selos = [];
      }

      const index = this.album.selos.findIndex(item => item.id === this.selo?.id);
      if (index !== -1) {
        this.album.selos.splice(index, 1);
      }

      this.service.update(album).subscribe(savedAlbum => {
        this.showSeloModal = false;
        this.closeModalEvent.emit(); 
      });
    });
  }

  isYearValid(): boolean {
    const pattern = /[0-9]{4}/;
    return this.selo?.year !== undefined && pattern.test(this.selo.year);
  }

  isfiligramaValid(): boolean {
    return this.selo?.filigram == undefined;
  }

  isValidLink(): boolean {
    const regex = /^http(s)?:\/\/\S+$/;
    return this.selo?.link !== undefined && regex.test(this.selo?.link);
  }

  isUniqueSelo(): boolean {
    if (this.album?.selos) {
      const index = this.album.selos.findIndex(item => item.id === this.selo?.id);
      return index === -1;
    }
    return true;
  }  
}
