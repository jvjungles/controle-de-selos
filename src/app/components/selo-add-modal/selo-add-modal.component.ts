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
  @Output() closeModalEvent = new EventEmitter<void>(); 

  nome: string = '';
  descricao: string = '';
  tipo: string = '';
  anoFabricacao: number = 0;
  pais: string = '';
  carimbo: boolean = false;
  filigrama: string = '';

  album: Album | undefined;
  selo: Selo | undefined;

  closeModal() {
    console.log('app-selo-add-modal - closeModal');
    this.showSeloModal = false;
    this.closeModalEvent.emit(); 
  }

  saveModal() {
    console.log('app-selo-add-modal - saveModal');
    console.log('Nome:', this.nome);
    console.log('Descrição:', this.descricao);
    console.log('Tipo:', this.tipo);
    console.log('Ano de Fabricação:', this.anoFabricacao);
    console.log('País:', this.pais);
    console.log('Carimbo:', this.carimbo);
    console.log('Filigrama:', this.filigrama);

      

    this.service.getById(this.albumid).subscribe(album => {
      this.album = album;
          
      if (!this.album.selos) {
        this.album.selos = [];
      }


      const maiorId = this.album?.selos?.reduce((maxId, selo) => (selo.id && selo.id > maxId) ? selo.id : maxId, 0);

      console.log('Maior ID de Selo:', maiorId);

      const selo: Selo = {
        id: maiorId+1,
        name: this.nome,
        description: this.descricao,
      };

      console.log('selo:', selo);  

      this.album.selos.push(selo);

      this.service.update(album).subscribe(savedAlbum => {
        console.log('Álbum update:', savedAlbum);
        this.showSeloModal = false;
        this.closeModalEvent.emit(); 
      });

      console.log('Album Object:', album);
    });    
  }  
}
