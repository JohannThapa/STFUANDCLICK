import { AuthReducer } from '../auth/@type';
import { GameReducer } from '../game/@type';

export interface Redux {
  auth: AuthReducer
  game: GameReducer
}
