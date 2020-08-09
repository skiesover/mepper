var Rainbow = require('rainbowvis.js');
const { getValues } = require("../maps/map-values");

export function getColor(region) {

    var values = getValues();
    var max = Math.max(...values);
    var low = Math.min(...values);

    var first = (max + low) * 1 / 6;
    var second = (max + low) * 2 / 6;
    var third = (max + low) * 3 / 6;
    var forth = (max + low) * 4 / 6;
    var fifth = (max + low) * 5 / 6;

    var regionValue = region.data('text');
    var gradient = getColorGradient('#def2fc', '#005bb5');

    var color;
    if (regionValue < first) {
        color = gradient[0];
    } else if (regionValue > first && regionValue < second) {
        color = gradient[1];
    } else if (regionValue > second && regionValue < third) {
        color = gradient[2];
    } else if (regionValue > third && regionValue < forth) {
        color = gradient[3];
    } else if (regionValue > forth && regionValue < fifth) {
        color = gradient[4];
    } else if (regionValue > fifth) {
        color = gradient[5];
    } else {
        color = 'grey';
    }
    return color;
}

function getColorGradient(startColor, endColor, numberOfItems = 6) {
    var rainbow = new Rainbow();
    rainbow.setNumberRange(1, numberOfItems);
    rainbow.setSpectrum(startColor, endColor);

    var gradient = [];
    for (var i = 1; i <= numberOfItems; i++) {
        var hexColour = rainbow.colourAt(i);
        gradient.push('#' + hexColour);
    }
    return gradient;
}