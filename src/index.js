module.exports = function zeros(expression) {
  var arr = expression.split('*'),
      first = [],
      second = [];

  for (var i = 0; i < arr.length; i++) {
    var last = arr[i].length - 1,
        res = 0;

    for (var j = last; j >= last - 1; j--) {

      if(arr[i].charAt(j) === '!') {
        res++;
      }
    }
    var t = (arr[i]).split('!');

    if (res === 1) {
      first.push(t[0]);
    } else {
        second.push(t[0]);
    }
  }
  var counter1 = 0,
      counter2 = 0,
      counter3 = 0;
  if (first.length) {
    for (var i = 0; i < first.length; i++) {
      counter1 += parseInt(first[i]/5);
      counter1 += parseInt(first[i]/25);
    }
  }
  if (second.length) {
    for (var i = 0; i < second.length; i++) {
      if (second[i] % 2) {
        counter2 += Math.ceil(parseInt(second[i]/5)/2);
        counter2 += Math.ceil(parseInt(second[i]/25)/2);
      } else {
        counter3 += (parseInt(second[i]/10));
        counter3 += (parseInt(second[i]/50));
      }
    }
  }
  if (!(counter1 + counter3)) return 0;
  
  return counter1 + counter2 + counter3;
}
