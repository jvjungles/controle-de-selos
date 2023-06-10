import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selo-add-modal',
  templateUrl: './selo-add-modal.component.html',
  styleUrls: ['./selo-add-modal.component.css']
})
export class SeloAddModalComponent {
  @Input() showSeloModal: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>(); 
  nome: string = '';
  descricao: string = '';
  tipo: string = '';
  anoFabricacao: number = 0;
  pais: string = '';
  carimbo: boolean = false;
  filigrama: string = '';

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
    this.showSeloModal = false;
    this.closeModalEvent.emit(); 
  }
}
