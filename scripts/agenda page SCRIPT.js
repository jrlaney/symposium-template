<script type="text/javascript">

//add a page specific class to the body for targeting
document.getElementsByTagName('body')[0].className+='agenda-page';

jQuery(document).ready(function($) {
	var uniqueStartTimes = [];

	$('.time').each(function() {
		var h = $(this).html();
		var index = h.indexOf('&nbsp;');
		if (index !== -1) {
			//pushes in first time
			if (uniqueStartTimes.length === 0) {
				uniqueStartTimes.push(h.substring(0, index).trim());
			} else {
				var valueExists = false;
				var currentStr = h.substring(0, index).trim();
				for (i = 0; i <= uniqueStartTimes.length; i++) {
					if (currentStr === uniqueStartTimes[i]) {
						valueExists = true;
					}
				}
				if (!valueExists) {
					uniqueStartTimes.push(currentStr);
				}
			}
			$(this).html('<span class="start-time">' + h.substring(0, index) + '</span>' + h.substring(index, h.length));
		}
	});

	//for (i = 0; i < uniqueStartTimes.length; i++) {
		//console.log(uniqueStartTimes[i]);
	//};
	//console.log(uniqueStartTimes.length);
	for (i = 0; i < uniqueStartTimes.length; i++) {
		$(".start-time:contains(' "+ uniqueStartTimes[i] +"'):first").parent().append("<div class=\"time-label\">" + uniqueStartTimes[i] + "</div>");
	};
	$(".time-label:contains('AM')").html(function(_, html) {
		return html.replace(/(AM)/g, '<span class="am-pm">$1</span>');
	});
	$(".time-label:contains('PM')").html(function(_, html) {
		return html.replace(/(PM)/g, '<span class="am-pm">$1</span>');
	});
});
</script>
