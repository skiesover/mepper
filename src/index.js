import * as constants from './utils/const';
import { getRegions } from './maps/map-canada';
import { getMapObject } from './utils/map-utils';

var infoBoxTitle = document.getElementById('info-box-title');
var infoBoxDetails = document.getElementById('info-box-details');
var mapTitle = document.getElementById('map-title');
var mapDescription = document.getElementById('map-description');

const map = getMapObject('abortions');
const regions = getRegions(map);

mapTitle.innerHTML = map.title;
mapDescription.innerHTML = map.description;

for (var i = 0; i < regions.length; i++) {
	var region = regions[i];

	region.mouseover(
		function (e) {

			this.node.setAttribute(constants.ATTR_STR_WIDTH, 1.5);

			infoBoxTitle.style.display = 'block';
			infoBoxTitle.innerHTML = this.data(constants.ID).toLowerCase();

			infoBoxDetails.style.display = 'block';
			infoBoxDetails.innerHTML = this.data(constants.VALUE) + ' ' + map.postfix;
		});

	region.mouseout(
		function (e) {

			this.node.setAttribute(constants.ATTR_STR_WIDTH, constants.STROKE_WIDTH_0_3);

			infoBoxTitle.style.display = 'none';
			infoBoxDetails.style.display = 'none';
		}
	);
}

$(document).mousemove(function (e) {
	$('#info-box-title').css('top', e.pageY - $('#info-box-title').height() - 60);
	$('#info-box-title').css('left', e.pageX - ($('#info-box-title').width()) / 2);
	$('#info-box-details').css('top', e.pageY - $('#info-box-title').height() - 30);
	$('#info-box-details').css('left', e.pageX - ($('#info-box-title').width()) / 2);
}).mouseover();
