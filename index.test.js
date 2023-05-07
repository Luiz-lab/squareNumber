const { squareNumber } = require("./index");

describe("Numerical Test", () => {
  test("Input 0", () => {});
  const Input = 0;
  expect(squareNumber(Input)).tobe("true");
  test ("Input - 1", () => {});
  const Input = - 1;
  expect(squareNumber(Input)).tobe("false");
});
