import deepFreeze from '../../utils/deepFreeze.js';

const GAME_CONDITION = deepFreeze({
  success_condition: 3,
  restart_game: '1',
  end_game: '2',
});

export default GAME_CONDITION;
