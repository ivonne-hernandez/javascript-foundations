class Centaur {
  constructor(data) {
    this.name = data.name;
    this.breed = data.type;
    this.standing = true;
    this.cranky = false;
    this.counter = 0;
    this.layingDown = false;

  }

  shootBow() {
    this.counter += 1;
    if (this.counter >= 3) {
      this.cranky = true;
    }
    if (this.cranky || this.layingDown) {
      return `NO!`;
    }

    return `Twang!!!`;
  }

  run() {
    this.counter += 1;
    if (this.counter >= 3) {
      this.cranky = true;
    }
    if (this.cranky || this.layingDown) {
      return `NO!`;
    }
    return `Clop clop clop clop!!!`;
  }

  sleep() {
    if(this.standing) {
      return `NO!`;
    }
    this.cranky = false;
    this.counter = 0;
    return `ZZZZ`;
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if(this.standing) {
      this.cranky = false;
    } else if (!this.standing) {
      return `Not while I\'m laying down!`;
    }
  }
}

module.exports = Centaur;
