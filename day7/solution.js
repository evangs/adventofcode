var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.circuit = function circuit(input, w) {

    var instructions = [];
    if (Array.isArray(input)) {
        instructions = input;
    } else {
        instructions = input.split(':');
    }

    var self = ehom.santa;
    var wires = w || {};
    var in1, in2 = 0;
    var retryInstructions = [];

    for (var i = 0; i < instructions.length; i++) {
        var ins = instructions[i].match(/([A-Z]+)/);
        if (ins) {
            ins = ins[0];
        }
        var parts = instructions[i].split(' ');

        if (ins == 'AND') {
            in1 = self.getInput(parts[0], wires);
            in2 = self.getInput(parts[2], wires);
            if (in1 == 'skip' || in2 == 'skip') {
                retryInstructions.push(instructions[i]);
                continue;
            }
            wires[parts[4]] = (in1 & in2) << 16 >>> 16;
        } else if (ins == 'LSHIFT') {
            in1 = self.getInput(parts[0], wires);
            in2 = self.getInput(parts[2], wires);
            if (in1 == 'skip' || in2 == 'skip') {
                retryInstructions.push(instructions[i]);
                continue;
            }
            wires[parts[4]] = (in1 << (in2 + 16) >>> 16);
        } else if (ins == 'NOT') {
            in1 = self.getInput(parts[1], wires);
            if (in1 == 'skip') {
                retryInstructions.push(instructions[i]);
                continue;
            }
            wires[parts[3]] = (~in1 >>> 16) - self.getInput(parts[1], wires);
        } else if (ins == 'OR') {
            in1 = self.getInput(parts[0], wires);
            in2 = self.getInput(parts[2], wires);
            if (in1 == 'skip' || in2 == 'skip') {
                retryInstructions.push(instructions[i]);
                continue;
            }
            wires[parts[4]] = (in1 | in2) << 16 >>> 16;
        } else if (ins == 'RSHIFT') {
            in1 = self.getInput(parts[0], wires);
            in2 = self.getInput(parts[2], wires);
            if (in1 == 'skip' || in2 == 'skip') {
                retryInstructions.push(instructions[i]);
                continue;
            }
            wires[parts[4]] = in1 >>> in2;
        } else {
            // assignment
            in1 = self.getInput(parts[0], wires);
            if (in1 == 'skip') {
                retryInstructions.push(instructions[i]);
                continue;
            }
            wires[parts[2]] = in1;
        }
    }
    if (retryInstructions.length) {
        self.circuit(retryInstructions, wires);
    }
    console.log(JSON.stringify(wires));
    return wires.a;
};


ehom.santa.getInput = function getInput(x, wires) {
    if (Number.isInteger(parseInt(x,10))) {
        return parseInt(x,10);
    }

    // if wires[x]
    if (wires[x] === undefined) {
        return 'skip';
    }

    return wires[x];
};
