import { getRectanglePerimeter } from "../js/rectangle.js";
test("should correctly output a perimeter basing on given parameters", () => {
  const outputPerimeter = getRectanglePerimeter(2, 3);
  expect(outputPerimeter).toBe(10);
});

import { getRectangleArea } from "../js/rectangle.js";
test("should correctly output an area basing on given parameters", () => {
  const outputArea = getRectangleArea(2, 3);
  expect(outputArea).toBe(6);
});

import { getRectangleInfo } from "../js/rectangle.js";
test("should correctly output information about area and perimeter of a rectangle", () => {
  const outputInfo = getRectangleInfo(2, 3);
  expect(outputInfo).toBe(
    "The perimeter of a rectangle is 10 and the area is 6"
  );
});
