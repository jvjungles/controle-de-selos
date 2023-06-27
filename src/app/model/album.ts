import { Selo } from './selo';

export class Album {
  public id?: number;
  public name?: string;
  public description?: string;
  public selos?: Selo[];
  public userId?: number;

  constructor() {} 
}
