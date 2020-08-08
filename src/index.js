import * as constants from './utils/const';
import { getRegions } from './maps/map-canada';

var infoBoxTitle = document.getElementById('info-box-title');
var infoBoxDetails = document.getElementById('info-box-details');
var mapTitle = document.getElementById('map-title');
var mapDescription = document.getElementById('map-description');

const regions = getRegions();

mapTitle.innerHTML = constants.HEADER;
mapDescription.innerHTML = constants.MAP_DESCRIPTION;

for (var i = 0; i < regions.length; i++) {
	regions[i].mouseover(
		function (e) {
			this.node.setAttribute(constants.ATTR_STR_WIDTH, 3);

			infoBoxTitle.style.display = 'block';
			infoBoxTitle.innerHTML = this.data('id').toLowerCase();// + "</br>" + "</br>" + this.data('text');

			infoBoxDetails.style.display = 'block';
			infoBoxDetails.innerHTML = this.data('text') + " mln";
		});
		
	regions[i].mouseout(
		function (e) {

			this.node.setAttribute(constants.ATTR_STR_WIDTH, constants.STROKE_WIDTH_0_3);

			infoBoxTitle.style.display = 'none';
			infoBoxDetails.style.display = 'none';
		}
	);
}

$(document).mousemove(function (e) {
	$('#info-box-title').css('top', e.pageY - $('#info-box-title').height() - 65);
	$('#info-box-title').css('left', e.pageX - ($('#info-box-title').width()) / 2);
	$('#info-box-details').css('top', e.pageY - $('#info-box-title').height() - 30); // -30
	$('#info-box-details').css('left', e.pageX - ($('#info-box-title').width()) / 2); // 2
}).mouseover();
