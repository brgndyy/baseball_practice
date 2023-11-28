import createNewOpponentBall from '../services/createNewOpponentBall.js';

class Opponent {
  #balls;

  constructor() {
    this.#balls = createNewOpponentBall();
  }

  getBalls() {
    return this.#balls;
  }
}

export default Opponent;
