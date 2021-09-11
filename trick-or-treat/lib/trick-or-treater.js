class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }

  putCandyInBag(candy) {
    this.hasCandy = true;
    this.bag.candies.push(candy);
    this.countCandies += 1;
    this.bag.count += 1;
  }

  eat() {
    this.countCandies -=1;
    this.bag.candies.pop();
  }


}

module.exports = TrickOrTreater;
