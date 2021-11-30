import { googleAdSense } from "../src/index";

test("Get Displa Ad Unit Randomly", () => {
  expect(googleAdSense.getDisplayAdUnitRandomly([1, 2, 3, 4])).toBe(1 || 2 || 3 || 4);
});
