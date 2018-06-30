/**
 * Created by fabio on 08/11/14.
 */
var latitude;
var longitude;
var map;

function getLocation() {
    latitude=0;
    longitude=0;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);


    }
}
function showPosition(position){
    latitude=position.coords.latitude;
    longitude= position.coords.longitude;
    var center = new google.maps.LatLng(latitude, longitude);
        // using global variable:
    map.panTo(center);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

function unload() {
    GUnload();
}

function load() {
    getLocation();
    if (GBrowserIsCompatible()) {
        map = new GMap2(document.getElementById("map"));
        map.addControl(new GSmallMapControl());
        map.addControl(new GMapTypeControl());
        var center = new GLatLng(latitude, longitude);
        map.setCenter(center, 15);
        geocoder = new GClientGeocoder();
        var marker = new GMarker(center, {draggable: true});
        map.addOverlay(marker);
        document.getElementById("lat").value = center.lat().toFixed(5);
        document.getElementById("lng").value = center.lng().toFixed(5);

        GEvent.addListener(marker, "dragend", function () {
            var point = marker.getPoint();
            map.panTo(point);
            document.getElementById("lat").value = point.lat().toFixed(5);
            document.getElementById("lng").value = point.lng().toFixed(5);

        });


        GEvent.addListener(map, "moveend", function () {
            map.clearOverlays();
            var center = map.getCenter();
            var marker = new GMarker(center, {draggable: true});
            map.addOverlay(marker);
            document.getElementById("lat").value = center.lat().toFixed(5);
            document.getElementById("lng").value = center.lng().toFixed(5);


            GEvent.addListener(marker, "dragend", function () {
                var point = marker.getPoint();
                map.panTo(point);
                document.getElementById("lat").value = point.lat().toFixed(5);
                document.getElementById("lng").value = point.lng().toFixed(5);

            });

        });

    }
}

function showAddress(address) {
    var map = new GMap2(document.getElementById("map"));
    map.addControl(new GSmallMapControl());
    map.addControl(new GMapTypeControl());
    if (geocoder) {
        geocoder.getLatLng(
                address,
                function (point) {
                    if (!point) {
                        alert(address + " not found");
                    } else {
                        document.getElementById("lat").value = point.lat().toFixed(5);
                        document.getElementById("lng").value = point.lng().toFixed(5);
                        map.clearOverlays()
                        map.setCenter(point, 14);
                        var marker = new GMarker(point, {draggable: true});
                        map.addOverlay(marker);

                        GEvent.addListener(marker, "dragend", function () {
                            var pt = marker.getPoint();
                            map.panTo(pt);
                            document.getElementById("lat").value = pt.lat().toFixed(5);
                            document.getElementById("lng").value = pt.lng().toFixed(5);
                        });


                        GEvent.addListener(map, "moveend", function () {
                            map.clearOverlays();
                            var center = map.getCenter();
                            var marker = new GMarker(center, {draggable: true});
                            map.addOverlay(marker);
                            document.getElementById("lat").value = center.lat().toFixed(5);
                            document.getElementById("lng").value = center.lng().toFixed(5);

                            GEvent.addListener(marker, "dragend", function () {
                                var pt = marker.getPoint();
                                map.panTo(pt);
                                document.getElementById("lat").value = pt.lat().toFixed(5);
                                document.getElementById("lng").value = pt.lng().toFixed(5);
                            });

                        });

                    }
                }
        );
    }
}