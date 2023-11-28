import OutputView from './views/OutputView.js';
import InputView from './views/InputView.js';
class App {
  async play() {
    this.#printStartMessage();
  }

  #printStartMessage() {
    OutputView.printStartMessage();
  }
}

export default App;
