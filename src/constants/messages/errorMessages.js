import deepFreeze from '../../utils/deepFreeze.js';

const ERROR_MESSAGES = deepFreeze({
  not_match_length: '공은 총 3개의 숫자로 이루어져야해요!',
  not_number: '공은 모두 양의 정수여야해요!',
  out_of_range: '공은 1이상 45이하의 숫자여야해요!',
  have_duplication: '공에 중복된 숫자가 있으면 안돼요!',
  not_match_end_or_restart: '1 또는 2를 입력해주세요!',
});

export default ERROR_MESSAGES;
