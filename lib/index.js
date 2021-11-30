"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleAdSense = exports.getDisplayAdUnitRandomly = void 0;
function getDisplayAdUnitRandomly(displayAdUnits) {
    return displayAdUnits[Math.floor(Math.random() * displayAdUnits.length)];
}
exports.getDisplayAdUnitRandomly = getDisplayAdUnitRandomly;
exports.googleAdSense = {
    getDisplayAdUnitRandomly,
};
//# sourceMappingURL=index.js.map