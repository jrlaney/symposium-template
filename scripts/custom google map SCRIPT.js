<script src="https://maps.googleapis.com/maps/api/js"></script>
<script type="text/javascript">
var map;

function initialize() {
	// Create an array of styles.
	var styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#5ea1bb"},{"visibility":"on"}]}];
	// Create a new StyledMapType object, passing it the array of styles,
	// as well as the name to be displayed on the map type control.
	var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

	var myLatLng = new google.maps.LatLng({[E-CUSTOM:GMAP-COORDS]})
	var hotelMarker = new google.maps.LatLng({[E-CUSTOM:GMAP-COORDS]})

	var mapOptions = {
		scrollwheel: false,
		draggable: true,
		backgroundColor: '#5ea1bb',
		center: myLatLng,
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROAD,
    	disableDefaultUI: false,
		mapTypeControlOptions: {
		  mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	};

	map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');

	var markerIcon = 'https://custom.cvent.com/83AD54AE0B7F4CBC94A9A945D0A278DA/pix/75dccbd5e2d940d3a01b743c36c375cf.png';

	var marker = new google.maps.Marker({
		position: hotelMarker,
		map: map,
		icon: markerIcon,
		title: "{[E-LOCATION]}",
        url: "{[E-CUSTOM:event-venue-site]}"
	});

    google.maps.event.addListener(marker, 'click', function() {
        window.open(marker.url,'_blank');
    });

	var center;

	function calculateCenter() {
		center = map.getCenter();
	}

	google.maps.event.addDomListener(map, 'idle', function() {calculateCenter();});

	google.maps.event.addDomListener(window, 'resize', function() {map.setCenter(center);});

}

google.maps.event.addDomListener(window, 'load', initialize);
</script>
