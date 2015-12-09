var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.Node = function Node(name) {
    this.name = name;
    this.tentative = 0;
    this.destinations = [];
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
            shortMap[parts[0]].destinations.push(new self.Dest(parts[2], parseFloat(parts[4])));
        } else {

            n = new self.Dest(parts[2], parseFloat(parts[4]));
            if (shortMap[parts[0]].destinations.indexOf(n) == -1) {
                shortMap[parts[0]].destinations.push(new self.Dest(parts[2], parseFloat(parts[4])));
            }
        }

        if (!shortMap[parts[2]]) {
            shortMap[parts[2]] = new self.Node(parts[2]);
            shortMap[parts[2]].destinations.push(new self.Dest(parts[0], parseFloat(parts[4])));
        } else {

            n = new self.Dest(parts[0], parseFloat(parts[4]));
            if (shortMap[parts[2]].destinations.indexOf(n) == -1) {
                shortMap[parts[2]].destinations.push(new self.Dest(parts[0], parseFloat(parts[4])));
            }
        }
    }

    for (entry in shortMap) {
        shortMap[entry].destinations.sort(function(a,b){
            return a.distance-b.distance;
        });
        console.log(entry);
        console.log(shortMap[entry].destinations);
        console.log('\n');
    }

//    return shortPath;
};

ehom.santa.visitNode = function visitNode(currentNode, unvisitedNodes, shortMap) {
    for (var x = 0; x < shortMap[currentNode].destinations.length; x++) {
        if (unvisitedNodes.indexOf(shortMap[currentNode].destinations[x].name) > -1) {
            if ((shortMap[currentNode].destinations[x].distance + shortMap[currentNode].tentative) < shortMap[shortMap[currentNode].destinations[x].name].tentative) {
                shortMap[shortMap[currentNode].destinations[x].name].tentative = (shortMap[currentNode].destinations[x].distance + shortMap[currentNode].tentative);
            }
        }
    }
};


/*
8
alphacentauri
faerun 3
tristram 65
norrath 4
snowdin 8
tambi 52
straylight 65
arbre 14
*/


/*
arbre
faerun 149
norrath 144
alphacentauri 136
straylight 107
tristram 125
snowdin 105
tambi 52
818 */

/*
faerun
norrath 144
alphacentauri 136
straylight 107
tristram 125
snowdin 105
arbre 96
tambi 143
856 */

/*
faerun
straylight 137
tristram 125
snowdin 105
arbre 96
tambi 143
norrath 68
alphacentauri 136
810 */

/*
snowdin
tristram 105
straylight 125
faerun 137
tambi 129
arbre 143
norrath 115
alphacentauri 136
890 */

/*
alphacentauri
norrath 136
faerun 144
straylight 137
tristram 125
snowdin 105
arbre 96
tambi 143
886 */


/*
snowdin
straylight 101
tristram 125
*/
