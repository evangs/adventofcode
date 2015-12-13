var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.sumNums = function sumNums(input) {

    var matches = input.match(/(-{0,1}[0-9]+)/g);
    var sum = 0;

    for (var i = 0; i < matches.length; i++) {
        sum += parseFloat(matches[i]);
    }

    return sum;
};

ehom.santa.cleanInput = function cleanInput(input) {

    var index = -1;
    var start = 0;
    var end = 0;
    while ((index = input.indexOf(':"red"')) > -1) {

        start = ehom.santa.findStart(input, index);
        end = ehom.santa.findEnd(input, index);
        console.log(input.substring(start, end+1));
        input = input.replace(input.substring(start, end+1), '');
    }

    return input;
};

ehom.santa.findStart = function findStart(input, index) {

    var paren = 0;
    var start = null;

    while (!start) {
        if (index == 0) {
            return index;
        }

        if (input[index] == '{') {
            if (paren == 0) {
                return index;
            } else {
                paren--;
            }
        }
        if (input[index] == '}') {
            paren++;
        }

        index--;
    }
};

ehom.santa.findEnd = function findEnd(input, index) {

    var paren = 0;
    var end = null;

    while (!end) {

        if (index == input.length -1) {
            return index;
        }

        if (input[index] == '}') {
            if (paren == 0) {
                return index;
            } else {
                paren--;
            }
        }
        if (input[index] == '{') {
            paren++;
        }

        index++;
    }
};
