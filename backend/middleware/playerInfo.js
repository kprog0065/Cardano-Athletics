const calculateAverages = function (next) {
  this.playerInfo.pace = (this.pace.sprintSpeed + this.pace.acceleration) / 2;
  this.playerInfo.shooting =
    (this.shooting.finishing +
      this.shooting.attPosition +
      this.shooting.shotPower +
      this.shooting.longShots +
      this.shooting.penalaties +
      this.shooting.volleys) /
    6;
  this.playerInfo.passing =
    (this.passing.vision +
      this.passing.crossing +
      this.passing.fkAcc +
      this.passing.longPass +
      this.passing.shortPass +
      this.passing.curve) /
    6;
  this.playerInfo.dribbling =
    (this.dribbling.agility +
      this.dribbling.balance +
      this.dribbling.reactions +
      this.dribbling.composure +
      this.dribbling.ballControl +
      this.dribbling.dribbling) /
    6;
  this.playerInfo.defending =
    (this.defending.interceptions +
      this.defending.headingAcc +
      this.defending.defAware +
      this.defending.standTackle +
      this.defending.slideTackle) /
    5;
  this.playerInfo.physical =
    (this.physical.jumping +
      this.physical.stamina +
      this.physical.strength +
      this.physical.aggression) /
    4;
  next();
};

export default calculateAverages;
