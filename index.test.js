const { squareNumber } = require("./index");
describe("Funções Matemáticas", () => {
  it("Entrada inválida", () => {
    const Input = null;
    expect(squareNumber(Input)).toBe(false);
  });
  it("Input 0", () => {
    const Input = 0;
    expect(squareNumber(Input)).toBe(true);
  });
  it("Input -4", () => {
    const Input = -4;
    expect(squareNumber(Input)).toBe(false);
  });
  it("Input a non perfect square", () => {
    const Input = 26;
    expect(squareNumber(Input)).toBe(false);
  });
});
