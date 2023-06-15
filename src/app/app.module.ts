import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { AlbumAddModalComponent } from './album-add-modal/album-add-modal.component';
import { SeloAddModalComponent } from './selo-add-modal/selo-add-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    FormsModule,
    MatCardModule,
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
    SeloAddModalComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}