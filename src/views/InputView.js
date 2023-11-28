import { Console } from '@woowacourse/mission-utils';

const InputView = {
  /**
   * 시작 메세지를 읽음
   * @param { string } message
   */
  async inputBalls(message) {
    return await Console.readLineAsync(message);
  },
};

export default InputView;
