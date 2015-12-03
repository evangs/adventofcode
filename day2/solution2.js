var ehom = ehom || {};

ehom.santa = ehom.santa || {};

ehom.santa.calculateRibbonNeeds = function calculateRibbonNeeds(dimensionList) {

    var self = ehom.santa;
    var totalNeed = 0;
    var i = 0;

    var dims = new RegExp("([0-9]*)x([0-9]*)x([0-9]*)", "g");
    var dimensions = dimensionList.match(dims);

    for (i = 0; i < dimensions.length; i++) {
        var parts = dimensions[i].split('x');
        totalNeed += ehom.santa.calculateGiftArea(parseFloat(parts[0]), parseFloat(parts[1]), parseFloat(parts[2]));
    }

    return totalNeed;
};

ehom.santa.calculateGiftArea = function calculateGiftArea(l, w, h) {

    return (l * w * h) + ehom.santa.calculateSmallPerimeter(l, w, h);
};

ehom.santa.calculateSmallPerimeter = function calculateSmallPerimeter(l, w, h) {

    var  dimensions = [];
    dimensions.push(l);
    dimensions.push(w);
    dimensions.push(h);

    dimensions.sort(ehom.santa.compareNumbers);

    return dimensions[0] + dimensions[0] + dimensions[1] + dimensions[1];
};

ehom.santa.compareNumbers = function compareNumbers(a, b) {
  return a - b;
};
