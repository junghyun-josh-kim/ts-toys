class NumberGuessingGame {
  private targetNumber: number;
  private attempts: number;
  private score: number;

  constructor() {
    this.targetNumber = Math.floor(Math.random() * 100) + 1;
    this.attempts = 0;
    this.score = 100;
  }

  guessNumber(guess: number): string {
    this.attempts++;

    if (guess < this.targetNumber) {
      this.score -= 10;
      return `Too low. Attempts: ${this.attempts} | Score: ${this.score}. Try again.`;
    } else if (guess > this.targetNumber) {
      this.score -= 10;
      return `Too high. Attempts: ${this.attempts} | Score: ${this.score}. Try again.`;
    } else {
      return `Congratulations. ${this.attempts} attempts. Final Score: ${this.score}`;
    }
  }
}

const game = new NumberGuessingGame();

console.log(game.guessNumber(1));
