$(document).ready(function(){
	setInterval(function(){
		var dateTime = new Date();
		var minutesTwoDigitsWithLeadingZero = ("0" + dateTime.getMinutes()).substr(-2);
		$("#milliseconds").text(dateTime.getMilliseconds());
		$("#seconds").text(dateTime.getSeconds());
		$("#minutes").text(dateTime.getMinutes());
		$("#hours").text(dateTime.getHours());
	}
}