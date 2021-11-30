/**
 * Copyright (c) 2021-present, Rana Jahanzaib
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @param  {Int16Array} displayAdUnits
 * @returns number  Random displayAdUnit
 */
export function getDisplayAdUnitRandomly(displayAdUnits: Int16Array): number {
  return displayAdUnits[Math.floor(Math.random() * displayAdUnits.length)];
}

export const googleAdSense = {
  getDisplayAdUnitRandomly,
};
