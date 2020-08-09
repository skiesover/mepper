import { resizeMap } from "./properties";
import { PATH_NB, PATH_PEI, PATH_ON, PATH_MB, PATH_SK, PATH_AB, PATH_YK, PATH_NL, PATH_NS, PATH_QC, PATH_BC, PATH_NU, PATH_NWT } from "../utils/const-maps";
import { FILL_OPAC_1, STROKE_WIDTH_0_3, STROKE_OPAC_1, ATTR_FILL_OPAC, ATTR_STR_WIDTH, ATTR_STR_OPAC, ATTR_FILL, ID, VALUE } from "../utils/const";
import { getColor } from "../utils/colors";

export function getRegions(map) {
    const rsr = Raphael('map', 900, 900);

    const NewBrunswick = rsr.path(PATH_NB).data(ID, 'New Brunswick').data(VALUE, map.valueNB);
    const PrinceEdwardIsland = rsr.path(PATH_PEI).data(ID, 'Prince Edward Island').data(VALUE, map.valuePEI);
    const Ontario = rsr.path(PATH_ON).data(ID, 'Ontario').data(VALUE, map.valueON);
    const Manitoba = rsr.path(PATH_MB).data(ID, 'Manitoba').data(VALUE, map.valueMB);
    const Saskatchewan = rsr.path(PATH_SK).data(ID, 'Saskatchewan').data(VALUE, map.valueSK);
    const Alberta = rsr.path(PATH_AB).data(ID, 'Alberta').data(VALUE, map.valueAB);
    const Yukon = rsr.path(PATH_YK).data(ID, 'Yukon').data(VALUE, map.valueYK);
    const NewfoundlandLabrador = rsr.path(PATH_NL).data(ID, 'Newfoundland & Labrador').data(VALUE, map.valueNL);
    const NovaScotia = rsr.path(PATH_NS).data(ID, 'Nova Scotia').data(VALUE, map.valueNS);
    const Quebec = rsr.path(PATH_QC).transform("t1.3625671,-0.454189").data(ID, 'Quebec').data(VALUE, map.valueQC);
    const BritishColumbia = rsr.path(PATH_BC).data(ID, 'British Columbia').data(VALUE, map.valueBC);
    const Nunavut = rsr.path(PATH_NU).data(ID, 'Nunavut').data(VALUE, map.valueNU);
    const NorthwestTerritories = rsr.path(PATH_NWT).data(ID, 'Northwest Territories').data(VALUE, map.valueNWT);

    const regions = [];
    regions.push(
        NewBrunswick,
        PrinceEdwardIsland,
        Ontario,
        Manitoba,
        Saskatchewan,
        Alberta,
        Yukon,
        NewfoundlandLabrador,
        NovaScotia,
        Quebec,
        BritishColumbia,
        Nunavut,
        NorthwestTerritories
    );

    setAttributes(map, regions);
    resizeMap(regions);
    return regions;
}

function setAttributes(map, regions) {
    for (var region of regions) {
        region.attr(ATTR_FILL, getColor(map, region));
        region.attr(ATTR_STR_WIDTH, STROKE_WIDTH_0_3);
        region.attr(ATTR_STR_OPAC, STROKE_OPAC_1);
        region.attr(ATTR_FILL_OPAC, FILL_OPAC_1);
    }
}