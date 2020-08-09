import { MapBuilder } from './map-builder';

// todo: find a way to use json from project folder
const json = require('/Users/skiesover_pro/VisualCodeProjects/mepper/maps.json');

export function getMapObject(mapId) {
    var mapJson = json.maps[mapId];

    const map = new MapBuilder(mapJson.title);
    map.description = mapJson.description;
    map.postfix = mapJson.postfix;
    map.valueAB = mapJson.AB;
    map.valueBC = mapJson.BC;
    map.valueMB = mapJson.MB;
    map.valueNB = mapJson.NB;
    map.valueNL = mapJson.NL;
    map.valueNS = mapJson.NS;
    map.valueNU = mapJson.NU;
    map.valueNWT = mapJson.NWT;
    map.valueON = mapJson.ON;
    map.valuePEI = mapJson.PEI;
    map.valueQC = mapJson.QC;
    map.valueSK = mapJson.SK;
    map.valueYK = mapJson.YK;

    return map;
}   