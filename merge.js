const a = [1, 3, 5, 6, 7, 9]
const b = [2, 4, 8, 10]

const c = [9, 7, 6, 5, 3 ,1]
const d = [10, 8, 4, 2]

const merge = (a, b, compare = (v,w) => v - w) => (
  ( [x, ...xs] = a,
    [y, ...ys] = b,
    compared = compare(x,y)
  ) => false
    || !x && b
    || !y && a
    || compared < 0 && [x, ...merge(xs, b, compare)]
    || compared > 0 && [y, ...merge(a, ys, compare)]
    || [x, y, ...merge(xs, ys, compare)]
)()

console.log(merge(a, b))
console.log(merge(c, d, (v,w) => w - v))
