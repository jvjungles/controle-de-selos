import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-add-modal',
  templateUrl: './album-add-modal.component.html',
  styleUrls: ['./album-add-modal.component.css']
})

export class AlbumAddModalComponent {
  @Input() showModal: boolean = false;
  @Input() albumTitle: String = '';
  @Output() closeModalEvent = new EventEmitter<void>(); 
  nome: string = '';
  descricao: string = '';

  closeModal() {
    console.log('app-album-add-modal - closeModal');
    this.showModal = false;
    this.closeModalEvent.emit(); 
  }

  saveModal() {
    console.log('app-album-add-modal - saveModal');
    console.log('Nome:', this.nome);
    console.log('Descrição:', this.descricao);
    this.showModal = false;
    this.closeModalEvent.emit(); 
  }
}
