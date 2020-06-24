/**
 * Swaps two values.
 * @param x an array
 * @param i an index
 * @param j another index
 */
function swap<T>(x: T[], i: number, j: number): void {
  var t = x[i];
  x[i] = x[j];
  x[j] = t;
}
export default swap;
