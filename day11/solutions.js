var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.passwordGenerator = function passwordGenerator(input) {

    var newPass = ehom.santa.incrementPassword(input);

    while (!ehom.santa.validPassword(newPass)) {
        newPass = ehom.santa.incrementPassword(newPass);
    }

    return newPass;
};

ehom.santa.incrementPassword = function incrementPassword(pass) {

    var i = 0;
    var match = /[oli]/.exec(pass);
    if (match) {
        pass = pass.split('');
        pass[match.index] = String.fromCharCode(pass[match.index].charCodeAt(0) + 1);
        for (i = match.index + 1; i < pass.length; i++) {
            pass[i] = 'a';
        }

        return pass.join('');
    }

    pass = pass.split('');
    var end = pass.length - 1;
    var wrap = true;

    while (wrap) {
        if (pass[end] == 'z') {
            pass[end] = 'a';
            end--;
        } else {
            pass[end] = String.fromCharCode(pass[end].charCodeAt(0) + 1);
            if (pass[end].match(/[oli]/)) {
                pass[end] = String.fromCharCode(pass[end].charCodeAt(0) + 1);
                for (i = end + 1; i < pass.length; i++) {
                    pass[i] = 'a';
                }
            }
            wrap = false;
        }
    }

    return pass.join('');
};

ehom.santa.hasStraight = function hasStraight(pass) {

    for (var i = 0; i < pass.length - 2; i++) {
        if (pass.charCodeAt(i+2) - pass.charCodeAt(i+1) == 1 && pass.charCodeAt(i+1) - pass.charCodeAt(i) == 1) {
            return true;
        }
    }

    return false;
};

// ehom.santa.containsRestrictedCharacters = function containsRestrictedCharacters(pass) {
//
//     if (pass.match(/[oli]/)) {
//         return true;
//     }
//
//     return false;
// };

ehom.santa.containsTwoPairs = function containsTwoPairs(pass) {

    var matches = pass.match(/([a-z])\1/g);
    if (matches && matches.length > 1) {
        return true;
    }

    return false;
};

ehom.santa.validPassword = function validPassword(pass) {

    var self = ehom.santa;

    if (self.hasStraight(pass) && self.containsTwoPairs(pass)) {
        return true;
    }

    return false;
};
