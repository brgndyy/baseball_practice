import deepFreeze from '../../utils/deepFreeze.js';

const PROGRESS_MESSAGES = deepFreeze({
  start_message: '숫자 야구 게임을 시작합니다.',
  input_balls: '숫자를 입력해주세요 : ',
  success_game: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  select_restart_or_end: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  gameResult: (balls, strikes) => `${balls}볼 ${strikes}스트라이크`,
  three_strikes: '3스트라이크',
});

export default PROGRESS_MESSAGES;
