const guard = false

const compare = (x, y) => guard
  || x < y && "smaller"
  || x > y && "larger"
  || "equal"

const head = v => (([x, ...xs] = v) => x)()

const filter = ([x, ...xs], conditional) => guard
  || !x && []
  || !conditional(x) && [...filter(xs, conditional)]
  || [x, ...filter(xs, conditional)]

const qsort = ([x, ...xs]) => guard
  || !x && []
  || (( smaller = filter(xs, y => y < x),
        larger = filter(xs, y => y > x)
      ) => [...qsort(smaller), x, ...qsort(larger)]
     )()

const reverse = ([x, ...xs]) => guard
  || !x && []
  || [...reverse(xs), x]

console.log(compare(2, 3))

const a = [1, 3, 5, 6, 7, 9]

console.log(filter(a, x => x > 3))

console.log(reverse(a))
console.log(qsort(reverse(a)))
console.log(head(a))
