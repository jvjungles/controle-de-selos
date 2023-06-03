import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumPageComponent } from './album-page/album-page.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
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
    AlbumPageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}