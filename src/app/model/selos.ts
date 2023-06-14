import { Album } from '../model/albuns';

export interface Selo {
  id: number;
  name: string;
  description: string;
  albunId: number;
  album: Album | null;
}
