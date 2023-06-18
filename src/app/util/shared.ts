export class Shared {

  constructor() {}
  
  // WebStorage
  public static initializeWebStorage(albuns: any[]): void {   
    //console.log('initializeWebStorage:', albuns.length);
    localStorage.setItem('ALBUNS.SIZE', albuns.length.toString());
    localStorage.setItem('ALBUNS', JSON.stringify(albuns));
  }
}
