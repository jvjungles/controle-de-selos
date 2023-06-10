import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-add-modal',
  templateUrl: './album-add-modal.component.html',
  styleUrls: ['./album-add-modal.component.css']
})
export class AlbumAddModalComponent {
  @Input() showModal: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>(); 

  closeModal() {
    console.log('app-album-add-modal - closeModal ');
    this.showModal = false;
    this.closeModalEvent.emit(); 
  }
}
