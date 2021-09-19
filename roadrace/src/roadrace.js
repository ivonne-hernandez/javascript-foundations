class Roadrace {
  constructor(data) {
    this.name = data.title;
    this.location = data.city;
    this.distance = 0;
    this.participants = [];
  }

  setDistance(distance) {
    this.distance = distance;
    return `The ${this.name} in ${this.location} is a ${distance} mile race.`
  }

  registerParticipants(runner) {
    this.participants.push(runner);
  }

  completeRace() {
    //if this participant is in our array, then we need to access the name of the 
    //marathon
    for (var i = 0; i < this.participants.length; i++) {
      this.participants[i].completedRaces.push(this.name);
      this.participants[i].milesRun += this.distance;
    }
  }

}

module.exports = Roadrace;
