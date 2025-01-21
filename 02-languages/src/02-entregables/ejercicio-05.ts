console.log("************** DELIVERABLE 05 *********************");

type Results = [boolean, boolean, boolean];

class SlotMachine {


  protected coins: number;
  protected results: Results;

  constructor() {
    this.coins = 0;
    this.results = [false, false, false];
  }

  play(): void {

    this.coins += 1;
    //    this.results.forEach((_: boolean, index: number) => this.results[index] = this.slotRoll());
    this.results.map((_: boolean, index: number) => this.results[index] = this.slotRoll());
    this.showMessage();
  }

  private slotRoll = (): boolean => Math.random() < 0.5;

  private showMessage(): void {

    if (this.results.every(val => val)) {
      console.log(`Congratulations!!!.You won ${this.coins} coins!!`)
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }

    this.resetResults();
  }

  private resetResults = (): Results => this.results = [false, false, false];

}

const machine1 = new SlotMachine();

machine1.play()
machine1.play()
machine1.play()
machine1.play()
machine1.play()
machine1.play()
machine1.play()
machine1.play()
machine1.play()
machine1.play()
machine1.play()
