function solve(input,argument) {

  let ascending = function(a,b) {
    return a-b;

  }

  let descending = function(a,b) {
    return b-a;

  }

  let sortingStrategies={
    'asc': ascending,
    'desc': descending
  }

  return input.sort(sortingStrategies[argument]);
}