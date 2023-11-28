import OutputView from './views/OutputView.js';
import InputView from './views/InputView.js';
import GAME_CONDITION from './constants/conditions/gameCondition.js';
import Game from './models/Game.js';
class App {
  #game;

  async play() {
    this.#printStartMessage();
    await this.#playGame();
  }

  #printStartMessage() {
    OutputView.printStartMessage();
  }

  async #playGame() {
    this.#createGame();
    await this.#inputBalls();
  }

  #createGame() {
    this.#game = new Game();
  }

  async #inputBalls() {
    while (true) {
      const balls = await InputView.inputBalls();

      const { success, gameState } = this.#game.compareBalls(balls);

      if (success) {
        OutputView.printGameResult(gameState);
        OutputView.printSuccessMessage();
        break;
      }

      OutputView.printGameResult(gameState);
    }

    await this.#chooseRestartOrEnd();
  }

  async #chooseRestartOrEnd() {
    const inputEndOrRestart = await InputView.selectRestartOrEnd();

    if (inputEndOrRestart === GAME_CONDITION.restart_game) {
      await this.#playGame();
    }
  }
}

export default App;
