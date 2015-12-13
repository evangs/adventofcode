var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.optimalHappy = function optimalHappy(input) {

    var peopleMap = {};
    var lines = input.split('.');
    var people = [];

    for (var i = 0; i < lines.length; i++) {
        var parts = lines[i].split(' ');

        if (people.indexOf(parts[0]) < 0) {
            people.push(parts[0]);
        }
        var val = (parts[2] == 'lose') ? (parseFloat(parts[3]) * -1) : parseFloat(parts[3]);
        if (!peopleMap[parts[0]]) {
            peopleMap[parts[0]] = {};
        }

        peopleMap[parts[0]][parts[10]] = val;
    }

    console.log(peopleMap);

    var permutations = ehom.santa.permutator(people);

    var happinessTotal = 0;
    for (i = 0; i < permutations.length; i++) {
        var tmp = 0;
        for (var j = 0; j < permutations[i].length; j++) {
            var neighbor = j + 1;
            if (neighbor == permutations[i].length) {
                neighbor = 0;
            }
            tmp += peopleMap[permutations[i][j]][permutations[i][neighbor]];
            tmp += peopleMap[permutations[i][neighbor]][permutations[i][j]];
        }

        if (tmp > happinessTotal) {
            happinessTotal = tmp;
        }
    }

    return happinessTotal;
};

ehom.santa.permutator = function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
};