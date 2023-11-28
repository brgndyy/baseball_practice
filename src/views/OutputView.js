import { Console } from '@woowacourse/mission-utils';
import PROGRESS_MESSAGES from '../messages/progressMessages.js';

const OutputView = {
  printStartMessage() {
    Console.print(PROGRESS_MESSAGES.start_message);
  },
};

export default OutputView;
