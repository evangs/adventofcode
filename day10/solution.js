var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.lookAndSay = function lookAndSay(input) {

    var newSequence = [];
    var character = '';

    for (var i = 0; i < input.length; i++) {
        if (character != input[i]) {
            if (character) {
                newSequence.push(character.length);
                newSequence.push(character);
            }
            character = input[i];
        } else {
            character += input[i];
        }
    }

    newSequence.push(character.length);
    newSequence.push(character);

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
    }

    return {'executionTime': currentTime, 'iterations': iterations, 'length': input.length};
};
