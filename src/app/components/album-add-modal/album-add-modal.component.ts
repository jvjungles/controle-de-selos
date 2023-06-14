import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../model/album';
import { ActivatedRoute } from '@angular/router';

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

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getById(+params['id']).subscribe(album => {
        this.album = album;
        this.nome = this.album?.name ?? '';
        this.descricao = this.album?.description ?? '';
        console.log('this.route.params.subscribe:', album);
      });
    });    
  }  

  closeModal() {
    console.log('app-album-add-modal - closeModal');
    this.showModal = false;
    this.closeModalEvent.emit(); 
  }

  saveModal() {
    console.log('app-album-add-modal - saveModal');
    console.log('Nome:', this.nome);
    console.log('Descrição:', this.descricao);
    console.log('albumid:', this.albumid);
    
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
      console.log('Álbum salvo:', savedAlbum);
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
        console.log('Álbum update:', savedAlbum);
        this.showModal = false;
        this.closeModalEvent.emit(); 
      });
      console.log('Album Object:', album);
    });     
  }
}
