var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.calculateFinalFloor = function calculateFinalFloor(directions) {

    var self = ehom.santa;
    var i = 0;
    var currentFloor = 0;

    // loop through directions
    for (i = 0; i < directions.length; i++) {

        badDirection = false;

        if (directions[i] == '(') {
            currentFloor++;
        } else if (directions[i] == ')') {
            currentFloor--;
        }
    }

    return currentFloor;
};
