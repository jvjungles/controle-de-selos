import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumPageComponent } from './components/album-page/album-page.component';
import { AlbumAddModalComponent } from './components/album-add-modal/album-add-modal.component';
import { SeloAddModalComponent } from './components/selo-add-modal/selo-add-modal.component';

import { AlbumService } from './services/album.service';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    FormsModule,
    MatCardModule,
    MatDialogModule ,
    MatTooltipModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: AlbumListComponent },
      { path: 'album-page', component: AlbumPageComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,    
    FooterComponent,
    AlbumListComponent,
    AlbumPageComponent,
    AlbumAddModalComponent,
    SeloAddModalComponent,
    ConfirmationModalComponent
  ],
  providers: [
    AlbumService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}