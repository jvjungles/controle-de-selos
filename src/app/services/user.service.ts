import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | null = null;

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User | null {
    return this.user;
  }
}
