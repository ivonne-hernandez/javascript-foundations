var Skier = require('./Skier');

class Lift {
    constructor(limit) {
        this.inService = true;
        this.limit = limit;
        this.skiers = [];
        this.safetyBar = `up`;
    }

    admitSkier(name, hasLiftTicket) {
        var skier = new Skier(name, hasLiftTicket);
        
        if (!skier.hasLiftTicket) {
            return `Sorry, ${skier.name}. You need a lift ticket!`;
        } else if (this.skiers.length < this.limit) {
            this.skiers.push(skier);
        } else if (this.skiers.length === this.limit) {
            return `Sorry, ${skier.name}. Please wait for the next lift!`;
        } 
    }

    startLift() {
        var skiersStillNeeded = this.limit - this.skiers.length;
        if (skiersStillNeeded === 0) {
            this.safetyBar = `down`;
        } else if (skiersStillNeeded === 1) {
            return `We still need 1 more skier!`;
        } else if (skiersStillNeeded > 1) {
            return `We still need ${skiersStillNeeded} more skiers!`;
        }
    }
}

module.exports = Lift;