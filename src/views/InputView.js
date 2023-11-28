import { Console } from '@woowacourse/mission-utils';
import PROGRESS_MESSAGES from '../constants/messages/progressMessages.js';
import AppError from '../error/AppError.js';
import GAME_CONDITION from '../constants/conditions/gameCondition.js';
import ERROR_MESSAGES from '../constants/messages/errorMessages.js';

const InputView = {
  /**
   * 시작 메세지를 읽음
   * @param { string } message
   */
  async inputBalls() {
    const balls = await Console.readLineAsync(PROGRESS_MESSAGES.input_balls);
    return balls.split('').map((ball) => parseInt(ball, 10));
  },

  async selectRestartOrEnd() {
    const state = await Console.readLineAsync(PROGRESS_MESSAGES.select_restart_or_end);

    if (state !== GAME_CONDITION.restart_game && state !== GAME_CONDITION.end_game) {
      throw new AppError(ERROR_MESSAGES.not_match_end_or_restart);
    }

    return state;
  },
};

export default InputView;
