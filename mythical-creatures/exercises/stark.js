var Direwolf = require('./direwolf');

class Stark {
  constructor(data) {
    if(!data) {
      this.name = `stark`;
    } else if(data) {
      this.name = data.name;
      if(data.area) {
        this.location = data.area;
      } else {
        this.location = `Winterfell`;
      }
    }
    this.safe = false;
  }

  sayHouseWords() {
    if(this.safe) {
      return `The North Remembers`;
    } else {
      return `Winter is Coming`;
    }

  }

  callDirewolf(name, area) {
    var direwolf = new Direwolf(name, this.location);
    direwolf.protect(this); //this is the whole stark object itself
    return direwolf;
  }

}

module.exports = Stark;
