import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../util/constants';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private router: Router) {}

  title: string = Constants.TOP_TITLE;

  redirectToHome() {
    this.router.navigate(['/']);
  }

}