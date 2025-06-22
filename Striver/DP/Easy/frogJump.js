const frogJump = (energy) => {
  const stairCount = energy.length;

  const getEnergySpend = (energy1, energy2) => {
    return Math.abs(energy1 - energy2);
  };

  const jump = (currentEnergy, index) => {
    if (index === 0 || index === 1)
      return getEnergySpend(currentEnergy, energy[index]);

    return totalEnergy;
  };
};
