function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		console.log( "Geolocation is not supported by this browser.");
	}
}
function showPosition(position) {
	var initLat = position.coords.latitude;
	var initLng = position.coords.longitude;
	var someDate = new Date();
	var numberOfDaysToAdd = 3;
	someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 

	var dd = someDate.getDate();
	var mm = someDate.getMonth() + 1;
	var y = someDate.getFullYear();




	$.cookie("initLat", initLat, {expires: new Date(y,mm,dd,00,00,00), secure: false});
	$.cookie("initLng", initLng, {expires: new Date(y,mm,dd,00,00,00), secure: false});
}

if(typeof $.cookie("initLat") === "undefined"){
	getLocation();
}