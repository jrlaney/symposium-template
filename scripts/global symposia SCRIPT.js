<script type="text/javascript">

//FORCE RESPONSIVE LAYOUT
var meta1 = document.createElement('meta');
meta1.httpEquiv = "X-UA-Compatible";
meta1.content = "IE=edge";
document.getElementsByTagName('head')[0].appendChild(meta1);
var meta2 = document.createElement('meta');
meta2.name = "viewport";
meta2.content = "width=device-width, initial-scale=1";
document.getElementsByTagName('head')[0].appendChild(meta2);

//ADD SYMPOSIA LOGO TO NAV DIV
jQuery('.top .navigation').prepend('<a class="logo-lockup" href="https://www.microstrategy.com/us/resources/symposium-series"><img class="logo-icon" src="https://www.microstrategy.com/Strategy/media/external-assets/events-support/symposium-series/nav-logo_symposium.svg" /><div class="text"><span class="top-line">MicroStrategy</span>Symposium Series</div></a>');

//figure out if its IE11
function GetIEVersion() {
	var sAgent = window.navigator.userAgent;
	var Idx = sAgent.indexOf('MSIE');
	// If IE, return version number.
	if (Idx > 0)
	return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf('.', Idx)));
	// If IE 11 then look for Updated user agent string.
	else if (!!navigator.userAgent.match(/Trident\/7\./))
	return 11;
	else
	return 0; //It is not IE
};
var IEVersionNum = GetIEVersion();


jQuery(document).ready(function ($) {
	if (GetIEVersion() > 0) {
		$('body').addClass('IE' + IEVersionNum);
	};
	//MENU OPEN AND CLOSE TOGGLE FOR MOBILE
	$('#menu').click(function () {
		$(this).toggleClass('menu-opened');
	});

	//ACCORDION TOGGLE
	$('.accordion-content').hide();
	$('.accordion .toggle').click(function () {
		if ($(this).parent('.accordion').hasClass('expanded')) {
			$(this).parent('.accordion').find('.accordion-content').slideUp();
			$(this).parent('.accordion').removeClass('expanded');
		}
		else {
			//$('.accordion .accordion-content').slideUp();
			//$('.accordion .accordion-content').removeClass('expanded');
			$(this).parent('.accordion').find('.accordion-content').slideDown();
			$(this).parent('.accordion').addClass('expanded');
		}
	});

	//MAKE THE AGENDA LINK BUTTON WORK USING PAGE ID DATA TAG
	if($('.agenda-link').length >0 && $('#menu > li:nth-child(2)').length >0 ){
		var agendaHref= $('.agenda-link').attr('href');
		agendaHref = agendaHref.toLowerCase().replace(/-/g, '');
		$('.agenda-link').attr('href', 'agenda-' + agendaHref + '.aspx');

		//REMOVE AGENDA LINK IF THE AGENDA PAGE ISNT ACTIVATED IN NAV
		var secondMenuTab = $('#menu > li:nth-child(2) > a.tabs').attr('href');
		if( secondMenuTab ) {
			if (secondMenuTab.indexOf('agenda-') != -1) {
				$('.agenda-link').removeClass('hide-content');
			};
		};
	};

	//clear empty elements that just have spaces in them
	$('p:contains(    )').html('');

	//add selected color to site
	var siteColor = '{[E-CUSTOM:event-color-scheme]}'
	$('body').addClass(siteColor);

	//add flipped state to site
	var siteFlipped = '{[E-CUSTOM:flipped-status]}'
	if (siteFlipped.indexOf("Yes") >= 0) {
		$('body').addClass('flipped-site');
	};

	//HIDE OR SHOW ELEMENTS BASED ON CONTENT
	//show course catalog when linked
	if ($('#course-catalog-link').attr('href') != '') {
		$('#course-catalog-link').removeClass('hide-content');
	};

	//show keynote section if a keynote desc or speaker is added
	$("#keynote:has(.speaker-row, .keynote-row)").removeClass('hide-content');

	//remove empty keynote speaker section
	$("#keynote .speaker-container:has(.speaker-row)").removeClass('hide-content');

	//show workshop section when summaries are added
	$("#workshops:has(.workshop-summary)").removeClass('hide-content');

	//show workshop details section when details are added
	$("#workshop-details:has(.workshop-details)").removeClass('hide-content');

	//remove empty venue section if the link isnt filled in
	if ($('#venue-link').attr('href') != '') {
		$('#venue').removeClass('hide-content');
	};

	//make the nav sticky on scroll
	$(function() {

		// grab the initial top offset of the navigation
		var sticky_navigation_offset_top = $('.top').offset().top;

		// our function that decides weather the navigation bar should have "fixed" css position or not.
		var sticky_navigation = function(){
			var scroll_top = $(window).scrollTop(); // our current vertical position from the top

			// if we've scrolled more than the navigation, change its position to fixed to stick to top,
			// otherwise change it back to relative
			if (scroll_top > sticky_navigation_offset_top) {
				$('.top').addClass( 'sticky' );
				$('.content').addClass( 'scrolled' );
			} else {
				$('.top').removeClass( 'sticky' );
				$('.content').removeClass( 'scrolled' );
			}
		};

		// run our function on load
		sticky_navigation();

		// and run it again every time you scroll
		$(window).scroll(function() {
			sticky_navigation();
		});

	});//end sticky nav

}); // end document.ready

</script>
