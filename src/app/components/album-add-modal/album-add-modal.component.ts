import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../model/album';

@Component({
  selector: 'app-album-add-modal',
  templateUrl: './album-add-modal.component.html',
  styleUrls: ['./album-add-modal.component.css']
})

export class AlbumAddModalComponent {

  constructor(private service: AlbumService) { }

  @Input() showModal: boolean = false;
  @Input() albumTitle: String = '';
  @Output() closeModalEvent = new EventEmitter<void>();
   
  nome: string = '';
  descricao: string = '';
  album: Album | undefined;
  

  closeModal() {
    console.log('app-album-add-modal - closeModal');
    this.showModal = false;
    this.closeModalEvent.emit(); 
  }

  saveModal() {
    console.log('app-album-add-modal - saveModal');
    console.log('Nome:', this.nome);
    console.log('Descrição:', this.descricao);

    const album: Album = {
      name: this.nome,
      description: this.descricao,
      selos: [] 
    };  
    
    console.log('album:', album);

    this.service.save(album).subscribe(savedAlbum => {
      console.log('Álbum salvo:', savedAlbum);
      this.showModal = false;
      this.closeModalEvent.emit(); 
    });

    
  }
}
