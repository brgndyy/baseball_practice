import Opponent from './Opponnet.js';
import Ball from './Ball.js';

class Game {
  #opponent;

  constructor() {
    this.#opponent = new Opponent();
  }
}

export default Game;
