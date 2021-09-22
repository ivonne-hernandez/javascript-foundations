class SkatePark {
  constructor(data) {
    this.name = data.name;
    this.yearFounded = data.year;
    this.style = data.type;
    this.features = data.features;
    if (data.isPrivate) {
      this.isPrivate = true;
      this.cost = data.price;
    } else {
      this.isPrivate = false;
      this.cost = 0;
    }
    this.occupants = [];
  }
  
  admit(skater) {
    if (this.occupants.length < 3 ) {
    if (!this.cost) {
     this.occupants.push(skater);
     return `Welcome to the free ${this.name} Skatepark!`;
   } else if (skater.money >= this.cost) {
     this.occupants.push(skater);
     skater.money -= this.cost;
     return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
   } else {
     return `Sorry, you don't have enough money.`;
   }
  } else {
    return `Sorry, we are at max capacity. Thank you for understanding.`;
  }
}

}


module.exports = SkatePark;