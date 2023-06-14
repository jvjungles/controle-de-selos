import { Selo } from '../model/selos';

export class Album {
  public id?: number;
  public name?: string;
  public description?: string;
  public selos?: Selo[];

  constructor() {} 
}
