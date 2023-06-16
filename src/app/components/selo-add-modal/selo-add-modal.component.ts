import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../model/album';
import { Selo } from '../../model/selo';

@Component({
  selector: 'app-selo-add-modal',
  templateUrl: './selo-add-modal.component.html',
  styleUrls: ['./selo-add-modal.component.css']
})
export class SeloAddModalComponent {

  constructor(private service: AlbumService) { }

  @Input() showSeloModal: boolean = false;
  @Input() seloTitle: String = '';
  @Input() albumid: number = -1;
  @Input() selo: Selo | undefined;  
  @Output() closeModalEvent = new EventEmitter<void>(); 
  
  album: Album | undefined;
  
  closeModal() {
    console.log('app-selo-add-modal - closeModal');
    console.log('app-selo-add-modal - closeModal' + this.selo);
    this.showSeloModal = false;
    this.closeModalEvent.emit(); 
  }

  saveModal() {
    console.log('app-selo-add-modal - saveModal');
    console.log('Nome:', this.selo?.name);
    console.log('Descrição:', this.selo?.description);
    console.log('Tipo:', this.selo?.type);
    console.log('Ano de Fabricação:', this.selo?.year);
    console.log('País:', this.selo?.country);
    console.log('Carimbo:', this.selo?.stamp);
    console.log('Filigrama:', this.selo?.filigram);     
    
    console.log('this.albumid:', this.albumid); 

    this.service.getById(this.albumid).subscribe(album => {
      this.album = album;
          
      if (!this.album.selos) {
        this.album.selos = [];
      }

      console.log('this.selo?.id:', this.selo?.id);      

      if (this.selo?.id) {

        const index = this.album.selos.findIndex(item => item.id === this.selo?.id);

        console.log('index:', index);

        if (this.album.selos.findIndex(item => item.id === this.selo?.id) !== -1) {
          this.album.selos[index].name = this.selo?.name;
          this.album.selos[index].description = this.selo?.description;
          this.album.selos[index].type = this.selo?.type;
          this.album.selos[index].year = this.selo?.year;
          this.album.selos[index].country = this.selo?.country;
          this.album.selos[index].stamp = this.selo?.stamp;
          this.album.selos[index].filigram = this.selo?.filigram;
        }

      } else {
        const maiorId = this.album?.selos?.reduce((maxId, selo) => (selo.id && selo.id > maxId) ? selo.id : maxId, 0);
        
        console.log('Maior ID de Selo:', maiorId);
        
        const selo: Selo = {
          id: maiorId + 1,
          name: this.selo?.name,
          description: this.selo?.description,
          type: this.selo?.type,
          year: this.selo?.year,
          country: this.selo?.country,
          stamp: this.selo?.stamp,
          filigram: this.selo?.filigram
        };
        console.log('selo:', selo);
        this.album.selos.push(selo);
      }

      this.service.update(album).subscribe(savedAlbum => {
        console.log('Álbum update:', savedAlbum);
        this.showSeloModal = false;
        this.closeModalEvent.emit(); 
      });

      console.log('Album Object:', album);
    });    
  }  
}
