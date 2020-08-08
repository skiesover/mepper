import { resizeMap } from "./properties";
import { PATH_NB, PATH_PEI, PATH_ON, PATH_MB, PATH_SK, PATH_AB, PATH_YK, PATH_NL, PATH_NS, PATH_QC, PATH_BC, PATH_NU, PATH_NWT } from "../utils/const-maps";
import { CANADA, DFLT_COLOR, FILL_OPAC_1, STROKE_WIDTH_1, STROKE_OPAC_0 } from "../utils/const";
import { textNB, textAB, textBC, textMB, textNL, textNS, textNU, textNWT, textON, textPEI, textQC, textSK, textYK } from "./map-values";

export function getRegions() {
    const rsr = Raphael('map', 750, 650);

    // regions paths
    const NewBrunswick = rsr.path(PATH_NB).attr({ id: 'NewBrunswick', class: 'NB', parent: CANADA, fill: DFLT_COLOR, 'fill-opacity': FILL_OPAC_1, 'stroke-width': STROKE_WIDTH_1, 'stroke-opacity': STROKE_OPAC_0 }).data('id', 'New Brunswick').data('text', textNB);
    const PrinceEdwardIsland = rsr.path(PATH_PEI).attr({ id: 'PrinceEdwardIsland', class: 'PEI', parent: CANADA, fill: DFLT_COLOR, 'fill-opacity': FILL_OPAC_1, 'stroke-width': STROKE_WIDTH_1, 'stroke-opacity': STROKE_OPAC_0 }).data('id', 'Prince Edward Island').data('text', textPEI);
    const Ontario = rsr.path(PATH_ON).attr({ id: 'Ontario', class: 'ONT', parent: CANADA, fill: DFLT_COLOR, 'fill-opacity': FILL_OPAC_1, 'stroke-width': STROKE_WIDTH_1, 'stroke-opacity': STROKE_OPAC_0 }).data('id', 'Ontario').data('text', textON);
    const Manitoba = rsr.path(PATH_MB).attr({ id: 'Manitoba', class: 'MAN', parent: CANADA, fill: DFLT_COLOR, 'fill-opacity': FILL_OPAC_1, 'stroke-width': STROKE_WIDTH_1, 'stroke-opacity': STROKE_OPAC_0 }).data('id', 'Manitoba').data('text', textMB);
    const Saskatchewan = rsr.path(PATH_SK).attr({ id: 'Saskatchewan', class: 'SASK', parent: CANADA, fill: DFLT_COLOR, 'fill-opacity': FILL_OPAC_1, 'stroke-width': STROKE_WIDTH_1, 'stroke-opacity': STROKE_OPAC_0 }).data('id', 'Saskatchewan').data('text', textSK);
    const Alberta = rsr.path(PATH_AB).attr({ id: 'Alberta', class: 'ALTA', parent: CANADA, fill: DFLT_COLOR, 'fill-opacity': FILL_OPAC_1, 'stroke-width': STROKE_WIDTH_1, 'stroke-opacity': STROKE_OPAC_0 }).data('id', 'Alberta').data('text', textAB);
    const Yukon = rsr.path(PATH_YK).attr({ id: 'Yukon', class: 'YK', parent: CANADA, fill: DFLT_COLOR, 'fill-opacity': FILL_OPAC_1, 'stroke-width': STROKE_WIDTH_1, 'stroke-opacity': STROKE_OPAC_0 }).data('id', 'Yukon').data('text', textYK);
    const NewfoundlandLabrador = rsr.path(PATH_NL).attr({ id: 'Labrador', class: 'NFLD', parent: CANADA, fill: DFLT_COLOR, 'fill-opacity': FILL_OPAC_1, 'stroke-width': STROKE_WIDTH_1, 'stroke-opacity': STROKE_OPAC_0 }).data('id', 'Newfoundland & Labrador').data('text', textNL);
    const NovaScotia = rsr.path(PATH_NS).attr({ id: 'CapeBreton', class: 'NS', parent: CANADA, fill: DFLT_COLOR, 'fill-opacity': FILL_OPAC_1, 'stroke-width': STROKE_WIDTH_1, 'stroke-opacity': STROKE_OPAC_0 }).data('id', 'Nova Scotia').data('text', textNS);
    const Quebec = rsr.path(PATH_QC).attr({ id: 'QcAnticosti', class: 'QUE', parent: CANADA, fill: DFLT_COLOR, 'fill-opacity': FILL_OPAC_1, 'stroke-width': STROKE_WIDTH_1, 'stroke-opacity': STROKE_OPAC_0 }).transform("t1.3625671,-0.454189").data('id', 'Quebec').data('text', textQC);
    const BritishColumbia = rsr.path(PATH_BC).attr({ id: 'VancouverIsland', class: 'BC', parent: CANADA, fill: DFLT_COLOR, 'fill-opacity': FILL_OPAC_1, 'stroke-width': STROKE_WIDTH_1, 'stroke-opacity': STROKE_OPAC_0 }).data('id', 'British Columbia').data('text', textBC);
    const Nunavut = rsr.path(PATH_NU).attr({ id: 'Keewatin', class: 'NU', parent: CANADA, fill: DFLT_COLOR, 'fill-opacity': FILL_OPAC_1, STROKE_WIDTH_1: STROKE_WIDTH_1, 'stroke-opacity': STROKE_OPAC_0 }).data('id', 'Nunavut').data('text', textNU);
    const NorthwestTerritories = rsr.path(PATH_NWT).attr({ id: 'NorthwestTerritories', class: 'NWT', parent: CANADA, fill: DFLT_COLOR, 'fill-opacity': FILL_OPAC_1, 'stroke-width': STROKE_WIDTH_1, 'stroke-opacity': STROKE_OPAC_0 }).data('id', 'Northwest Territories').data('text', textNWT);

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

    resizeMap(regions);
    return regions;
}