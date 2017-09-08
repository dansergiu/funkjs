let a = [1, 3, 5, 6, 7, 9]
let b = [2, 4, 8, 10]

let c = [9, 7, 6, 5, 3 ,1]
let d = [10, 8, 4, 2]

let merge = ([x, ...xs], [y, ...ys], compare = (a,b) => a - b) =>
   !x && [y, ...ys]
|| !y && [x, ...xs]
|| compare(x,y) < 0 && [x, ...merge(xs, [y, ...ys], compare)]
|| compare(x,y) > 0 && [y, ...merge([x, ...xs], ys, compare)]
|| [x, y, ...merge(xs, ys, compare)]

console.log(merge(a, b))
console.log(merge(c, d, (a,b) => b - a))
