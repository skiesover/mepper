import { resizeMap } from "./properties";
import { PATH_NB, PATH_PEI, PATH_ON, PATH_MB, PATH_SK, PATH_AB, PATH_YK, PATH_NL, PATH_NS, PATH_QC, PATH_BC, PATH_NU, PATH_NWT } from "../utils/const-maps";
import { FILL_OPAC_1, STROKE_WIDTH_0_3, STROKE_OPAC_1, ATTR_FILL_OPAC, ATTR_STR_WIDTH, ATTR_STR_OPAC, ATTR_FILL } from "../utils/const";
import { textNB, textAB, textBC, textMB, textNL, textNS, textNU, textNWT, textON, textPEI, textQC, textSK, textYK } from "./map-values";
import { getColor } from "../utils/colors";

export function getRegions() {
    const rsr = Raphael('map', 900, 900);

    const NewBrunswick = rsr.path(PATH_NB).data('id', 'New Brunswick').data('text', textNB);
    const PrinceEdwardIsland = rsr.path(PATH_PEI).data('id', 'Prince Edward Island').data('text', textPEI);
    const Ontario = rsr.path(PATH_ON).data('id', 'Ontario').data('text', textON);
    const Manitoba = rsr.path(PATH_MB).data('id', 'Manitoba').data('text', textMB);
    const Saskatchewan = rsr.path(PATH_SK).data('id', 'Saskatchewan').data('text', textSK);
    const Alberta = rsr.path(PATH_AB).data('id', 'Alberta').data('text', textAB);
    const Yukon = rsr.path(PATH_YK).data('id', 'Yukon').data('text', textYK);
    const NewfoundlandLabrador = rsr.path(PATH_NL).data('id', 'Newfoundland & Labrador').data('text', textNL);
    const NovaScotia = rsr.path(PATH_NS).data('id', 'Nova Scotia').data('text', textNS);
    const Quebec = rsr.path(PATH_QC).transform("t1.3625671,-0.454189").data('id', 'Quebec').data('text', textQC);
    const BritishColumbia = rsr.path(PATH_BC).data('id', 'British Columbia').data('text', textBC);
    const Nunavut = rsr.path(PATH_NU).data('id', 'Nunavut').data('text', textNU);
    const NorthwestTerritories = rsr.path(PATH_NWT).data('id', 'Northwest Territories').data('text', textNWT);

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

    setAttributes(regions);
    resizeMap(regions);
    return regions;
}

function setAttributes(regions) {
    for (var region of regions) {
        region.attr(ATTR_FILL, getColor(region));
        region.attr(ATTR_STR_WIDTH, STROKE_WIDTH_0_3);
        region.attr(ATTR_STR_OPAC, STROKE_OPAC_1);
        region.attr(ATTR_FILL_OPAC, FILL_OPAC_1);
    }
}