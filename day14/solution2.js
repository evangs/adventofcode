var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.Reindeer = function Reindeer(name, speed, duration, restingPeriod) {
    this.name = name;
    this.speed = speed;
    this.duration = duration;
    this.restingPeriod = restingPeriod;
};

ehom.santa.fastestReindeer = function fastestReindeer(input, raceDuration) {

    var self = ehom.santa;
    var re = input.split(':');
    var reindeer = [];
    var raceStats = {};

    var FLYING = 0;
    var RESTING = 1;
    var entry;

    for (var i = 0; i < re.length; i++) {
        var r = re[i].split(' ');
        reindeer.push(new self.Reindeer(r[0], parseFloat(r[1]), parseFloat(r[2]), parseFloat(r[3])));
        raceStats[r[0]] = {distance: 0, timer: parseFloat(r[2]), state: FLYING, points: 0};
    }

    console.log(reindeer);

    for (i = 0; i < raceDuration; i++) {
        for (var z = 0; z < reindeer.length; z++) {
            var curRein = reindeer[z];

            if (raceStats[curRein.name].state == FLYING) {
                raceStats[curRein.name].distance += curRein.speed;
            }
            raceStats[curRein.name].timer--;
            if (raceStats[curRein.name].timer === 0) {
                raceStats[curRein.name].timer = (raceStats[curRein.name].state == FLYING) ? curRein.restingPeriod : curRein.duration;
                raceStats[curRein.name].state = (raceStats[curRein.name].state == FLYING) ? RESTING : FLYING;
            }
        }

        var longest = 0;
        for (entry in raceStats) {
            if (raceStats[entry].distance > longest) {
                longest = raceStats[entry].distance;
            }
        }

        for (entry in raceStats) {
            if (raceStats[entry].distance == longest) {
                raceStats[entry].points++;
            }
        }
    }

    console.log(raceStats);

    var mostPoints = 0;
    for (entry in raceStats) {
        if (raceStats[entry].points > mostPoints) {
            mostPoints = raceStats[entry].points;
        }
    }

    return mostPoints;
};
