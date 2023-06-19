import { Constants } from './constants';

export class Shared {

  constructor() {}
  
  // WebStorage
  public static initializeWebStorage(albuns: any[]): void {
    localStorage.setItem(Constants.ALBUNS_SIZE, albuns.length.toString());
    localStorage.setItem(Constants.ALBUNS, JSON.stringify(albuns));
  }
}