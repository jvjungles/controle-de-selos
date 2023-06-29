import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlbumService } from '../../services/album.service';
import { UserService } from '../../services/user.service';
import { ValidationModalComponent } from '../validation-modal/validation-modal.component';
import { Album } from '../../model/album';
import { User } from '../../model/user';
import { Constants } from '../../util/constants';

@Component({
  selector: 'app-album-add-modal',
  templateUrl: './album-add-modal.component.html',
  styleUrls: ['./album-add-modal.component.css']
})

export class AlbumAddModalComponent {

  constructor(private dialog: MatDialog, private userService: UserService, private route: ActivatedRoute, private service: AlbumService) { }

  @Input() showModal: boolean = false;
  @Input() albumTitle: String = '';
  @Input() albumid: number = -1;
  @Output() closeModalEvent = new EventEmitter<void>();

  nome: string = '';
  descricao: string = '';
  album: Album | undefined;
  user: User | null | undefined;
  showTooltip = false;

  ngOnInit() {
    const user = this.userService.getUser();
    if (user) {
      this.user = user;
    } else {
      this.user = null;
    }   
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
    if (this.albumTitle !== 'Editar') {
      this.nome = '';
      this.descricao = '';
    }    
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
      selos: [],
      userId: this.user?.id || undefined
    };
  
    this.service.saveWithValidation(album).subscribe({
      next: (savedAlbum) => {
        this.nome = '';
        this.descricao = '';
        this.showModal = false;
        this.closeModalEvent.emit();
      },
      error: (error: any) => {
        this.openValidationModal(Constants.ALBUM_NAME_VALIDATE);
      },
      complete: () => {
        this.openValidationModal(Constants.ALBUM_SAVED);
      },
    });    
  }  

  update() {
    this.service.getById(this.albumid).subscribe(album => {
      this.album = album;
      this.album.name = this.nome;
      this.album.description = this.descricao;

      this.service.updateWithValidation(album).subscribe({
        next: (savedAlbum) => {
          this.showModal = false;
          this.closeModalEvent.emit();
        },
        error: (error: any) => {
          this.openValidationModal(Constants.ALBUM_NAME_VALIDATE);
        },
        complete: () => {
          this.openValidationModal(Constants.ALBUM_SAVED);
        },
      });
    });     
  }

  isNomeValid(): boolean {
    return this.nome.trim().length > 0;
  }

  openValidationModal(message: string): void {
    const dialogRef = this.dialog.open(ValidationModalComponent, {
      width: '300px',
      data: { message }
    });  
    dialogRef.afterClosed().subscribe(result => {});
  }      
}