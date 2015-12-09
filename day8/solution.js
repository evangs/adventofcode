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

        line = line.split('\\\\').join('z');

        while ((index = line.indexOf('\\x')) > -1) {
            line = line.split(line.substring(index, index + 4)).join('c');
        }

        line = line.split('\\"').join('z');


        line = line.split('"').join('');

        console.log(line);
        console.log('line: n1 - n2 = n3'.split('n1').join(cCount).split('n2').join(line.length).split('n3').join(cCount - line.length));
        console.log('\n');

        total += (cCount - line.length);
    }

    return total;
};
