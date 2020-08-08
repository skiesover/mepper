import * as constants from './const';

var infoBoxTitle = document.getElementById('info-box-title');
var infoBoxDetails = document.getElementById('info-box-details');
var mapTitle = document.getElementById('map-title');
var mapDescription = document.getElementById('map-description');

const regions = constants.getRegions();

for (var region of regions) {
	region.scale(0.6, 0.6, [1], [1]);
	region.rotate(-4, [1], [1]);
}

mapTitle.innerHTML = constants.header;
mapDescription.innerHTML = constants.randomText;


for (var i = 0; i < regions.length; i++) {	
    regions[i].mouseover(
     	function(e) {

		    //this.node.style.opacity = 0.5;
			this.node.setAttribute('stroke-width', 4);
			this.node.setAttribute('stroke', "black");
        	this.node.setAttribute('fill', constants.hvrColor);

        	infoBoxTitle.style.display = 'block';
        	infoBoxTitle.innerHTML = this.data('id').toLowerCase();// + "</br>" + "</br>" + this.data('text');
        	
        	infoBoxDetails.style.display = 'block';
        	infoBoxDetails.innerHTML = this.data('text') + " mln";
    });

    regions[i].mouseout (
    	function(e) {
        	this.node.setAttribute('stroke-width', constants.strW);
        	this.node.setAttribute('fill', constants.dfltColor);
        	this.node.setAttribute('stroke-opacity', 0);
        	this.node.setAttribute('stroke', "white");

        	infoBoxTitle.style.display = 'none';
        	infoBoxDetails.style.display = 'none';
    }
    );
    
}

$(document).mousemove(function(e) {
  $('#info-box-title').css('top',e.pageY-$('#info-box-title').height()-80);
  $('#info-box-title').css('left',e.pageX-($('#info-box-title').width())/2);
  $('#info-box-details').css('top',e.pageY-$('#info-box-title').height()-50); // -30
  $('#info-box-details').css('left',e.pageX-($('#info-box-title').width())/2); // 2
}).mouseover();
