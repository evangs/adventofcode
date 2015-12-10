var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.lookAndSay = function lookAndSay(input) {

    var newSequence = [];
    var count = 0;

    for (var i = 0; i < input.length; i++) {
        if (i > 0 && input[i-1] != input[i]) {
            newSequence.push(count);
            newSequence.push(input[i-1]);
            count = 1;
        } else {
            count++;
        }
    }

    newSequence.push(count);
    newSequence.push(input[i-1]);

    return newSequence.join('');
};

ehom.santa.nTimes = function nTimes(input, n) {

    for (i = 0; i < n; i++) {
        input = ehom.santa.lookAndSay(input);
    }

    return input.length;
};

ehom.santa.oneMin = function oneMin(input) {
    var start = new Date().getTime();
    var iterations = 0;
    var currentTime = 0;
    while ((currentTime = ((new Date().getTime() - start) / 1000)) < 60) {

        input = ehom.santa.lookAndSay(input);
        iterations++;
        console.log(iterations);
    }

    return {'executionTime': currentTime, 'iterations': iterations, 'length': input.length};
};
