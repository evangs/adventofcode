var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.lookAndSay = function lookAndSay(input) {

    var newSequence = new Int8Array(input.length * 2);
    var count = 0;
    var index = 0;

    for (var i = 0; i < input.length; i++) {
        if (i > 0 && input[i-1] != input[i]) {
            newSequence[index] = count;
            index++;
            newSequence[index] = input[i-1];
            index++;
            count = 1;
        } else {
            count++;
        }
    }

    newSequence[index] = count;
    index++;
    newSequence[index] = input[i-1];

    var slice = -1;
    for (var p = input.length; p < newSequence.length; p++) {
        if (newSequence[p] === 0) {
            slice = p;
            break;
        }
    }
    return newSequence.slice(0, slice);
};

ehom.santa.nTimes = function nTimes(input, n) {
    var start = new Date().getTime();
    for (i = 0; i < n; i++) {
        input = ehom.santa.lookAndSay(input);
    }
    console.log('execution time: ' + (new Date().getTime() - start) / 1000);
    return input.length;
};

ehom.santa.oneMin = function oneMin(input) {
    var start = new Date().getTime();
    var iterations = 0;
    var currentTime = 0;
    while ((currentTime = ((new Date().getTime() - start) / 1000)) < 60) {

        input = ehom.santa.lookAndSay(input);
        iterations++;
        console.log(iterations + ' ' + currentTime);
    }

    return {'executionTime': currentTime, 'iterations': iterations, 'length': input.length};
};
