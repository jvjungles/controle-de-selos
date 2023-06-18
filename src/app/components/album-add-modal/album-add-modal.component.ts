import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../model/album';

@Component({
  selector: 'app-album-add-modal',
  templateUrl: './album-add-modal.component.html',
  styleUrls: ['./album-add-modal.component.css']
})

export class AlbumAddModalComponent {

  constructor(private route: ActivatedRoute, private service: AlbumService) { }

  @Input() showModal: boolean = false;
  @Input() albumTitle: String = '';
  @Input() albumid: number = -1;
  @Output() closeModalEvent = new EventEmitter<void>();
   
  nome: string = '';
  descricao: string = '';
  album: Album | undefined;
  isNomeValid: boolean = false;

  ngOnInit() {   
    this.route.params.subscribe(params => {
      if (!isNaN(+params['id'])) {
        this.service.getById(+params['id']).subscribe(album => {
          this.album = album;
          this.nome = this.album?.name ?? '';
          this.descricao = this.album?.description ?? '';
        });
      }
    });    
  }  

  closeModal() { 
    console.log('this.albumTitle' + this.albumTitle);   
    if (this.albumTitle !== 'Editar') {
      this.nome = '';
      this.descricao = '';
    }    
    this.isNomeValid = false;
    this.showModal = false;
    this.closeModalEvent.emit(); 
  }

  saveModal() {    
    if(this.albumid == -1){
      this.save();
    }else{
      this.update();
    }
  }

  save() {
    const album: Album = {
      name: this.nome,
      description: this.descricao,
      selos: [] 
    };

    this.service.save(album).subscribe(savedAlbum => {
      this.nome = '';
      this.descricao = '';
      this.showModal = false;
      this.closeModalEvent.emit(); 
    }); 
  }

  update() {   

    this.service.getById(this.albumid).subscribe(album => {
      this.album = album;
      this.album.name = this.nome;
      this.album.description = this.descricao;

      this.service.update(this.album).subscribe(savedAlbum => {
        this.showModal = false;
        this.closeModalEvent.emit(); 
      });
    });     
  }

  validateNome() {
    this.isNomeValid = this.nome.trim().length > 0;
  }
}
