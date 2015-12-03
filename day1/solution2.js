var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.calculatePositionEnteringBasement = function calculatePositionEnteringBasement(directions) {

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

        if (currentFloor == -1) {
            return i + 1;
        }
    }

    return 0;
};
