const { add, subtract } = require("./calculator");

describe("Calculator", () => {
  test("adds 2 + 3 to equal 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds negative numbers", () => {
    expect(add(-1, -1)).toBe(-2);
  });

  test("subtracts 5 - 3 to equal 2", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("subtracts to a negative result", () => {
    expect(subtract(3, 5)).toBe(-2);
  });
});
