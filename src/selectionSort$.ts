import cmp from './_cmp';
import swap from './_swap';
import type {compareFn, swapFn} from './_types';

/**
 * Arranges values in an order.
 * @param x an array
 * @param y pair array (x)
 * @param fc compare function (a, b)
 * @param fs swap function (x, i, j)
 * @returns x
 */
function selectionSort$<T, U=T>(x: T[], y: (T|U)[]=x, fc: compareFn<T|U>=null, fs: swapFn<T>=null): T[] {
  var fc = fc||cmp, fs = fs||swap;
  var X = x.length, diff = x!==y;
  for(var i=0; i<X-1; i++) {
    var l = i;
    for(var j=i+1; j<X; j++)
      if(fc(y[l], y[j]) > 0) l = j;
    if(diff) swap(y, i, l);
    fs(x, i, l);
  }
  return x;
}
export default selectionSort$;
