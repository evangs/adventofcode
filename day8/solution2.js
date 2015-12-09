var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.stringLiteralCount = function stringLiteralCount(input) {

    var lines = input.split(':');

    var self = ehom.santa;
    var cCount = 0;
    var line = '';
    var index = 0;

    var total = 0;

    for (var i = 0; i < lines.length; i++) {
        line = lines[i];
        console.log(line);
        cCount = line.length;

        total += 2 + (line.split('\\').length - 1);
        total += (line.split('"').length - 1);
    }

    return total;
};
