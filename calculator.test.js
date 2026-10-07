const { readFileSync } = require("node:fs");
const { runInNewContext } = require("node:vm");
const path = require("node:path");

const calculatorSource = readFileSync(
  path.join(__dirname, "calculator.js"),
  "utf8",
);

function runCalculator(firstNumber, secondNumber, choice) {
  const inputs = [String(firstNumber), String(secondNumber), choice];
  const output = [];
  let inputIndex = 0;

  const result = runInNewContext(`${calculatorSource}\nresult;`, {
    input: () => inputs[inputIndex++],
    print: (message) => output.push(message),
  });

  return { result, output };
}

describe("calculator operations", () => {
  test.each([
    ["addition", "1", 8, 3, 11],
    ["subtraction", "2", 8, 3, 5],
  ])("performs %s", (_operation, choice, first, second, expected) => {
    expect(runCalculator(first, second, choice).result).toBe(expected);
  });

  test("reports an invalid operation", () => {
    const { result, output } = runCalculator(8, 3, "invalid");

    expect(result).toBeNull();
    expect(output).toContain("Invalid choice.");
  });

  test.each(["3", "4"])("rejects removed operation choice %s", (choice) => {
    const { result, output } = runCalculator(8, 3, choice);

    expect(result).toBeNull();
    expect(output).toContain("Invalid choice.");
  });
});
