var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.Node = function Node(x, y) {
    this.x = x;
    this.y = y;
    this.presents = 1;
};

ehom.santa.calculateHousesVisited = function calculateHousesVisited(directions) {

    var nodes = [];
    var self = ehom.santa;
    var i = 0;
    nodes.push(new self.Node(0, 0));
    var currentX = 0;
    var currentY = 0;
    var roboX = 0;
    var roboY = 0;
    var badDirection = false;
    var nodeIndex = 0;

    // loop through directions
    for (i = 0; i < directions.length; i++) {

        badDirection = false;

        if (directions[i] == '>') {
            if (i % 2 === 0) {
                currentX++;
            } else {
                roboX++;
            }
        } else if (directions[i] == '<') {
            if (i % 2 === 0) {
                currentX--;
            } else {
                roboX--;
            }
        } else if (directions[i] == '^') {
            if (i % 2 === 0) {
                currentY++;
            } else {
                roboY++;
            }
        } else if (directions[i] == 'v') {
            if (i % 2 === 0) {
                currentY--;
            } else {
                roboY--;
            }
        } else {
            badDirection = true;
        }

        if (!badDirection) {

            if (i % 2 === 0) {
                // check to see if current coordinates has already been visited
                nodeIndex = self.nodeExists(currentX, currentY, nodes);
                if (nodeIndex > -1) {
                    nodes[nodeIndex].presents++;
                } else {
                    nodes.push(new self.Node(currentX, currentY));
                }
            } else {
                // check to see if current coordinates has already been visited
                nodeIndex = self.nodeExists(roboX, roboY, nodes);
                if (nodeIndex > -1) {
                    nodes[nodeIndex].presents++;
                } else {
                    nodes.push(new self.Node(roboX, roboY));
                }
            }
        }
    }

    return nodes.length;
};

/*
returns index of nodes with matching coordinates. -1 otherwise
*/
ehom.santa.nodeExists = function nodeExists(x, y, nodes) {

    var i = 0;

    for (i = 0; i < nodes.length; i++) {
        if (nodes[i].x == x && nodes[i].y == y) {
            return i;
        }
    }

    return -1;
};
