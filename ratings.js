let movieMap = new Map([
  [1, {id: 1, rating: 2.3, relatedMovies: [2, 3]}],
  [2, {id: 2, rating: 3.0, relatedMovies: [1, 3, 4]}],
  [3, {id: 3, rating: 1.5, relatedMovies: [2, 5]}],
  [4, {id: 4, rating: 4.2, relatedMovies: [2, 6, 7, 9]}],
  [5, {id: 5, rating: 3.3, relatedMovies: [3, 6, 9]}],
  [6, {id: 6, rating: 1.7, relatedMovies: [8]}],
  [7, {id: 7, rating: 4.9, relatedMovies: [1, 4, 9]}],
  [8, {id: 8, rating: 2.1, relatedMovies: []}],
  [9, {id: 9, rating: 3.5, relatedMovies: [4, 5, 7]}]
])

let recommendations = (movieId, minRating, numMovies, movieMap, visited = new Map()) => {
  visited.set(movieId, true);

  return movieMap.get(movieId).relatedMovies.reduce((acc, id) =>
    !visited.has(id) && movieMap.get(id).rating >= minRating
    ? acc.concat(recommendations(id, minRating, numMovies, movieMap, visited))
    : acc
  , [])
  .concat([{id: movieId, rating: movieMap.get(movieId).rating}])
  .sort((a, b) => b.rating - a.rating)
  .splice(0, numMovies)
}

console.log(recommendations(1, 2, 5, movieMap))
