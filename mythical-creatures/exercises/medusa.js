var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(person) {
    var statue = new Statue(person.name);

    if(this.statues.length < 3) {
      this.statues.push(statue);
    } else {
      var freedStatue = this.statues[0];      this.statues.shift();

      var backToPerson = new Person(freedStatue.name);
      backToPerson.mood = `relieved`;

      this.statues.push(statue);
      return backToPerson;
    }
  }




}
module.exports = Medusa;
