import { Component } from '@angular/core';
import { Constants } from '../../util/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  title: string = Constants.FOO_TITLE;
  who: string = Constants.FOO_WHO;
  dis: string = Constants.FOO_DIS;

}
