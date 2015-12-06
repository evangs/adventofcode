var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.Coord = function Coord(x, y) {
    this.x = x;
    this.y = y;
}

ehom.santa.LightGrid = function LightGrid() {
    this.lights = Array(1000000);
}

ehom.santa.setLights = function setLights(input) {

    var instructions = input.split(':');

    var self = ehom.santa;
    var l = new self.LightGrid();

    for (var i = 0; i < instructions.length; i++) {
        var parts = instructions[i].split(' ');
        var s = parts[1].split(',');
        var e = parts[3].split(',');
        var start = new self.Coord(parseFloat(s[0]), parseFloat(s[1]));
        var end = new self.Coord(parseFloat(e[0]), parseFloat(e[1]));

        if (parts[0] == 'turnon') {
            l.turnOnLights(start, end);
        } else if (parts[0] == 'turnoff') {
            l.turnOffLights(start, end);
        } else if (parts[0] == 'toggle') {
            l.toggleLights(start, end);
        }
    }

    var count = 0;
    for (var x = 0; x < l.lights.length; x++) {
        if (l.lights[x]) {
            count++;
        }
    }

    return count;
};

ehom.santa.LightGrid.prototype.turnOnLights = function turnOnLights(start, end) {

    var i = 0;
    var j = 0;

    for (i = start.x; i <= end.x; i++) {
        for (j = start.y; j <= end.y; j++) {
            this.lights[(j * 1000) + i] = true;
        }
    }
};

ehom.santa.LightGrid.prototype.turnOffLights = function turnOffLights(start, end) {

    var i = 0;
    var j = 0;

    for (i = start.x; i <= end.x; i++) {
        for (j = start.y; j <= end.y; j++) {
            this.lights[(j * 1000) + i] = false;
        }
    }
};

ehom.santa.LightGrid.prototype.toggleLights = function toggleLights(start, end) {

    var i = 0;
    var j = 0;

    for (i = start.x; i <= end.x; i++) {
        for (j = start.y; j <= end.y; j++) {
            if (this.lights[(j * 1000) + i]) {
                this.lights[(j * 1000) + i] = false;
            } else {
                this.lights[(j *1000) + i] = true;
            }
        }
    }
};
