function squareNumber(params) {
  const Input = Math.pow(params, 1 / 2);
  if (!Number.isInteger(Input) || params == null) {
    return false;
  }
  return true;
}
module.exports = {
  squareNumber: squareNumber
};
