import Opponent from './Opponnet.js';
import Ball from './Ball.js';
import GAME_CONDITION from '../constants/conditions/gameCondition.js';

class Game {
  #opponent;

  #opponentGongs;

  #userBalls;

  constructor() {
    this.#opponent = new Opponent();
  }

  compareBalls(balls) {
    const receivedBalls = new Ball(balls);

    this.#userBalls = receivedBalls.getBalls();
    this.#opponentGongs = this.#opponent.getBalls();

    const strikeCounts = this.#getStrikeCounts();
    const ballCounts = this.#getBallCounts();

    const gameState = {
      ...(strikeCounts > 0 && { strikeCounts }),
      ...(ballCounts > 0 && { ballCounts }),
    };

    const isSuccess = strikeCounts === GAME_CONDITION.success_condition;

    return {
      success: isSuccess,
      gameState,
    };
  }

  #getStrikeCounts() {
    let strikes = 0;

    for (let i = 0; i < this.#opponentGongs.length; i++) {
      if (this.#opponentGongs[i] === this.#userBalls[i]) {
        strikes++;
      }
    }

    return strikes;
  }

  #getBallCounts() {
    const commonBalls = this.#userBalls.filter((ball) => this.#opponentGongs.includes(ball)).length;

    const strikes = this.#userBalls.filter(
      (ball, index) => ball === this.#opponentGongs[index],
    ).length;

    return commonBalls - strikes;
  }
}

export default Game;
