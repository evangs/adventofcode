var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.Node = function Node(name) {
    this.name = name;
    this.tentative = 0;
    this.destinations = {};
};

ehom.santa.Dest = function Dest(name, dist) {
    this.name = name;
    this.distance = dist;
};

ehom.santa.shortestPath = function shortestPath(input) {

    var paths = input.split(':');

    var self = ehom.santa;
    var cCount = 0;
    var line = '';
    var index = 0;
    var shortMap = {};
    var n;
    var entry;
    var start;

    var total = 0;

    for (var i = 0; i < paths.length; i++) {
        var parts = paths[i].split(' ');
        if (!shortMap[parts[0]]) {
            shortMap[parts[0]] = new self.Node(parts[0]);
            shortMap[parts[0]].destinations[parts[2]] = new self.Dest(parts[2], parseFloat(parts[4]));
        } else {

            n = new self.Dest(parts[2], parseFloat(parts[4]));
            if (!shortMap[parts[0]].destinations[parts[2]]) {
                shortMap[parts[0]].destinations[parts[2]] = new self.Dest(parts[2], parseFloat(parts[4]));
            }
        }

        if (!shortMap[parts[2]]) {
            shortMap[parts[2]] = new self.Node(parts[2]);
            shortMap[parts[2]].destinations[parts[0]] = new self.Dest(parts[0], parseFloat(parts[4]));
        } else {

            n = new self.Dest(parts[0], parseFloat(parts[4]));
            if (!shortMap[parts[2]].destinations[parts[0]]) {
                shortMap[parts[2]].destinations[parts[0]] = new self.Dest(parts[0], parseFloat(parts[4]));
            }
        }
    }

    var locations = [];
    for (entry in shortMap) {
        locations.push(entry);
    }

    var permutations = ehom.santa.permutator(locations);
    console.log(permutations.length);

    var longest = 0;
    var shortest = Infinity;
    for (var w = 0; w < permutations.length; w++) {
        var pathd = 0;
        for (var a = 0; a < permutations[w].length - 1; a++) {
            pathd += shortMap[permutations[w][a]].destinations[permutations[w][a + 1]].distance;
        }

        if (pathd > longest) {
            longest = pathd;
        }

        if (pathd < shortest) {
            shortest = pathd;
        }
    }

    console.log(shortest);
    console.log(longest);
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





