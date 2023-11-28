import { Random } from '@woowacourse/mission-utils';

const createNewOpponentBall = () => {
  const balls = [];

  while (balls.length < 3) {
    const randomNum = Random.pickNumberInRange(1, 9);

    if (!balls.includes(randomNum)) {
      balls.push(randomNum);
    }
  }

  return balls;
};

export default createNewOpponentBall;
