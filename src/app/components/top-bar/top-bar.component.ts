import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../util/constants';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private router: Router) {
    const user = localStorage.getItem(Constants.USER);
    this.nomeUsuario = user ? String(user) : '';
  }

  nomeUsuario: string;
  title: string = Constants.TOP_TITLE;

  ngOnInit() {
    this.getNomeUsuario(); 
  }

  redirectToHome() {    
    this.getNomeUsuario();
    if (this.nomeUsuario === '') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/album-list']);
    }    
  }

  getNomeUsuario() {
    this.router.navigate(['/']);const user = localStorage.getItem(Constants.USER);
    this.nomeUsuario = user ? String(user) : '';
  }
}