import { Console } from '@woowacourse/mission-utils';
import PROGRESS_MESSAGES from '../constants/messages/progressMessages.js';

const OutputView = {
  printStartMessage() {
    Console.print(PROGRESS_MESSAGES.start_message);
  },

  printSuccessMessage() {
    Console.print(PROGRESS_MESSAGES.success_game);
  },

  printThreeStrike() {
    Console.print(PROGRESS_MESSAGES.three_strikes);
  },

  printGameResult(gameState) {
    const { ballCounts, strikeCounts } = gameState;
    const resultMessages = [];

    if (ballCounts > 0) {
      resultMessages.push(`${ballCounts}볼`);
    }
    if (strikeCounts > 0) {
      resultMessages.push(`${strikeCounts}스트라이크`);
    }

    const result = resultMessages.join(' ') || '낫싱';
    Console.print(result);
  },
};

export default OutputView;
