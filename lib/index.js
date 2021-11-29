export const displayAdUnits = [2393019655, 8694897641, 2715812651];

export const displayAdUnitWithRandomId =
  displayAdUnits[Math.floor(Math.random() * displayAdUnits.length)];
/**
 * Returns a random Ad Unit Id from the default list of Display Ad Units
 */
export const getDisplayAdUnitRandomly = () => {
  return displayAdUnits[Math.floor(Math.random() * displayAdUnits.length)];
};

/**
 * Returns a random Ad Unit Id from the given list of Display Ad Units. If you don't have ad units, use the default list.
 * @param  {} adUnits
 */
export const getDisplayAdUnitRandomlyFrom = (adUnits) => {
  return adUnits[Math.floor(Math.random() * adUnits.length)];
};

export const googleAdSense = {
  displayAdUnits,
  displayAdUnitWithRandomId,
  getDisplayAdUnitRandomly,
  getDisplayAdUnitRandomlyFrom,
};

export default googleAdSense;
