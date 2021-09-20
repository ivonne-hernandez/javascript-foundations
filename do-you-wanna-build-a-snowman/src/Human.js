var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    var materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    };
    this.materials = materials;
  }

  gatherMaterials(material, quantity) {
    this.materials[material] += quantity;
  }

  buildASnowman() {
    var snowman = new Snowman(this.materials);
    return snowman;
  }

  placeMagicHat() {
    var snowman = new Snowman(this.materials);
    if (this.materials.coal >= 2 && this.materials.buttons >= 5 && this.materials.carrots >= 1 && this.materials.snowballs >= 2) {
      snowman.canWearMagicHat();
      return `Woah, this snowman is coming to life!`;
    } else {
      return `I guess I didn\'t build it correctly.`;
    }

  }


}

module.exports = Human;