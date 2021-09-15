class VendingMachine {
  constructor(data) {
    this.id = data.id;
    this.isBroken = data.isBroken;
    this.snacks = [];
  }

  addSnacks(candyBar) {
    if(!this.snacks.includes(candyBar.name)) {
      this.snacks.push(candyBar);
    } else {
      return `Sorry, that snack is already stocked! Try adding a different snack.`;
    }

  }

}

module.exports = VendingMachine;
