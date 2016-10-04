const bodyParts = {
  work: WORK,
  move: MOVE,
  carry: CARRY,
  attack: ATTACK,
  rangedAttack: RANGED_ATTACK,
  heal: HEAL,
  tough: TOUGH
};
const harvesterBody = [bodyParts.work, bodyParts.move, bodyParts.carry];

module.exports.loop = function () {
  console.log('3 testing');
  //Game.spawns['Spawn1'].createCreep(harvesterBody);
};

