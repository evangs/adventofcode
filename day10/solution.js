var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.lookAndSay = function lookAndSay(input) {

    var newSequence = ''
    var character = '';
    var count = 0;

    for (var i = 0; i < input.length; i++) {
        if (character != input[i]) {
            if (character) {
                newSequence += count.toString();
                newSequence += character.toString();
            }
            character = input[i];
            count = 1;
        } else {
            count++;
        }
    }

    newSequence += count.toString();
    newSequence += character.toString();

    return newSequence;
};

ehom.santa.nTimes = function nTimes(input, n) {

    for (i = 0; i < n; i++) {
        input = ehom.santa.lookAndSay(input);
    }

    return input.length;
};