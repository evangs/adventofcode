var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.naughtyOrNice = function naughtyOrNice(input) {

    var kids = input.split(' ');
    var niceKids = [];
    var self = ehom.santa;

    for (var i = 0; i < kids.length; i++) {
        if (self.hasPairOfChars(kids[i]) && self.repeatsWith1Between(kids[i])) {
            niceKids.push(kids[i]);
        }
    }

    return niceKids.length;
};

ehom.santa.hasPairOfChars = function hasPairOfChars(input) {
    var regex = /([a-z]{2}).*\1/g;
    var matches = input.match(regex) || [];

    if (matches.length > 0) {
        return true;
    }

    return false;
};

ehom.santa.repeatsWith1Between = function repeatsWith1Between(input) {
    var regex = /([a-z])[a-z]\1/g;
    var matches = input.match(regex) || [];

    if (matches.length > 0) {
        return true;
    }

    return false;
};
