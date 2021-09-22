class LunchBox {
  constructor(data) {
    this.owner = data.owner;
    this.material = data.madeOf;
    this.shape = data.shape;
    this.color = data.color;
    this.snacks = [];
    this.isInLunchBox = false;
  }

  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }

  findHealthySnacks() {
    var healthySnacks = [];
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].type.toLowerCase().includes(`fruit`)) {
        healthySnacks.push(this.snacks[i].type);
      }
    }
    return healthySnacks;
  }



}

module.exports = LunchBox;
