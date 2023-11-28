import ERROR_MESSAGES from '../constants/messages/errorMessages.js';
import AppError from '../error/AppError.js';

class Ball {
  static MAX_LENGTH = 3;

  static MIN_NUM = 1;

  static MAX_NUM = 9;

  #balls;

  constructor(balls) {
    this.#balls = balls;
    this.#validate();
  }

  #validate() {
    this.#validateType();
    this.#validateLength();
    this.#validateRange();
    this.#validateDupliacation();
  }

  #validateType() {
    if (this.#balls.some(Number.isNaN)) {
      throw new AppError(ERROR_MESSAGES.not_number);
    }
  }

  #validateLength() {
    if (this.#balls.length !== Ball.MAX_LENGTH) {
      throw new AppError(ERROR_MESSAGES.not_match_length);
    }
  }

  #validateRange() {
    if (!this.#balls.every((num) => num >= Ball.MIN_NUM && num <= Ball.MAX_NUM)) {
      throw new AppError(ERROR_MESSAGES.out_of_range);
    }
  }

  #validateDupliacation() {
    if (this.#balls.length !== new Set(this.#balls).size) {
      throw new AppError(ERROR_MESSAGES.have_duplication);
    }
  }

  getBalls() {
    return this.#balls;
  }
}

export default Ball;
