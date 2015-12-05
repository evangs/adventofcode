var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.naughtyOrNice = function naughtyOrNice(input) {

    var kids = input.split(' ');
    var niceKids = [];
    var self = ehom.santa;

    for (var i = 0; i < kids.length; i++) {
        if (self.hasThreeVowels(kids[i]) && self.containsRepeatedLetter(kids[i]) && self.doesNotContain(kids[i])) {
            niceKids.push(kids[i]);
        }
    }

    return niceKids.length;
};

ehom.santa.hasThreeVowels = function hasThreeVowels(input) {
    var regex = /([aeiou])/g;
    var matches = input.match(regex) || [];

    if (matches.length > 2) {
        return true;
    }

    return false;
};

ehom.santa.containsRepeatedLetter = function containsRepeatedLetter(input) {
    var regex = /([a-z])\1{1,}/g;
    var matches = input.match(regex) || [];

    if (matches.length > 0) {
        return true;
    }

    return false;
};

ehom.santa.doesNotContain = function doesNotContain(input) {
    var matches = input.match(/(ab)/g) || [];
    matches = matches.concat(input.match(/(cd)/g) || []);
    matches = matches.concat(input.match(/(pq)/g) || []);
    matches = matches.concat(input.match(/(xy)/g) || []);

    if (matches.length === 0) {
        return true;
    }

    return false;
};
