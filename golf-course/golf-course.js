class GolfCourse {
  constructor(name, difficulty, numOpenings, uniqueFeatures) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = numOpenings;
    this.features = uniqueFeatures;
    this.currentlyPlaying = [];
  }

  checkInGroup(group) {
    if(this.openings >= group.length) {
      for(var i = 0; i < group.length; i++) {
        this.currentlyPlaying.unshift(group[i].name);
      }
      this.openings -= group.length;
      return `You\'re checked in. Have fun!`;
    } else if (this.openings < group.length) {
      return `Sorry, we are currently booked! Please come back later.`;
    }
  }

}

module.exports = GolfCourse;
