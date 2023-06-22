import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { LoginService } from '../../services/login.service';
import { Constants } from '../../util/constants';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private router: Router, private service: LoginService) { }

  username: string = '';
  password: string = '';
  usuarioEncontrado: boolean = true;
  senhaValida: boolean = true;

  ngOnInit() {   
    console.log("Login init");
    localStorage.setItem(Constants.USER, '');  
    localStorage.setItem(Constants.ALBUNS, '');  
    localStorage.setItem(Constants.ALBUNS_SIZE, '');    
  }  

  logar() {   
    this.usuarioEncontrado = true;
    this.senhaValida = true;

    this.service.getByName(this.username).subscribe((user: User) => {
      if (user) {
        if (user.password === this.password) {
          localStorage.setItem(Constants.USER, this.username);
          this.router.navigate(['/album-list']);
        } else {
          this.senhaValida = false; 
        }
      } else {
        this.usuarioEncontrado = false; 
      }      
    });
  }

}
