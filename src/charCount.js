// input: [1, 'a', 'b', 11, 12]
// output: 5

function charCount (array) {
  var count = '';
  var filtered = array.filter(function (el) {
    return typeof el === 'number';
  })
  for(var i = 0; i < filtered.length; i++) {
    count += filtered[i].toString();
  }
  return count.length;
}

charCount([1, 'a', 'b', 11, 12])
