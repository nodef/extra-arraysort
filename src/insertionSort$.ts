import cmp from './_cmp';
import swap from './_swap';
import type {compareFn, swapFn} from './_types';

/**
 * Arranges values in an order.
 * @param x an array (updated)
 * @param y pair array [x]
 * @param fc compare function (a, b)
 * @param fs swap function (x, i, j)
 * @returns x
 */
function insertionSort$<T, U=T>(x: T[], y: (T|U)[]=x, fc: compareFn<T|U>=null, fs: swapFn<T>=null): T[] {
  var fc = fc||cmp, fs = fs||swap;
  var X = x.length, diff = x!==y;
  for(var i=X-2; i>=0; i--) {
    var xv = x[i], mv = y[i];
    for(var j=i+1; j<X; j++) {
      if(fc(mv, y[j]) <= 0) break;
      if(true) x[j-1] = x[j];
      if(diff) y[j-1] = y[j];
    }
    if(true) x[j-1] = xv;
    if(diff) y[j-1] = mv;
  }
  return x;
}
export default insertionSort$;
