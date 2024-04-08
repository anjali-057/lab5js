window.onload = function() {
    navigator.getBattery().then(function(battery) {
        var batteryPercentage = Math.floor(battery.level * 100);

        var robohashURL = "https://robohash.org/" + batteryPercentage + "percent.png";

        var img = document.createElement('img');
        img.src = robohashURL;

        document.getElementById('batteryImageContainer').appendChild(img);
    });
};