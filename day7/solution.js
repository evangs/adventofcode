var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.LightGrid = function LightGrid() {
    this.lights = Array(1000000);
}

ehom.santa.circuit = function circuit(input) {

    var instructions = input.split(':');

    var self = ehom.santa;
    var wires = {};

    for (var i = 0; i < instructions.length; i++) {
        var ins = instructions[i].match(/([A-Z]+)/);
        if (ins) {
            ins = ins[0];
        }
        var parts = instructions[i].split(' ');

        if (ins == 'AND') {
            wires[parts[4]] = parseInt(parts[0], 10) & parseInt(parts[2], 10);
        } else if (ins == 'LSHIFT') {
            wires[parts[4]] = (wires[parts[0]] || 0) << parseInt(parts[2], 10);
        } else if (ins == 'NOT') {
            wires[parts[3]] = ~(wires[parts[1]] || 0);
        } else if (ins == 'OR') {
            wires[parts[4]] = parseInt(parts[0], 10) | parseInt(parts[2], 10);
        } else if (ins == 'RSHIFT') {
            wires[parts[4]] = (wires[parts[0]] || 0) >>> parseInt(parts[2], 10);
        } else {
            // assignment
            if (Number.isInteger(parseInt(parts[0], 10))) {
                wires[parts[2]] = parseInt(parts[0], 10);
            } else {
                wires[parts[2]] = wires[parts[0]] || 0;
            }
        }
    }
    console.log(JSON.stringify(wires));
    return wires['a'];
};
