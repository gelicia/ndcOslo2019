var rootURL = "http://localhost:3000";

function init() {
    $.get({url: rootURL + "/temperature?scale=F"}).then( function(temperature) {
        $('#temperatureF')[0].innerText = parseInt(temperature) + "°F";
    });
    $.get({url: rootURL + "/temperature?scale=C"}).then( function(temperature) {
        $('#temperatureC')[0].innerText = parseInt(temperature) + "°C";
    });

    $('button').click(function(evtData){
        //get whatever comes after the underscore for the index
        var idx =  evtData.target.id.substring(evtData.target.id.indexOf('_')+1);
        var red = $('#red').val();
        var grn = $('#green').val();
        var blu = $('#blue').val();

        $.post({
            url: rootURL + "/setLED",
            data: {
                ledIdx: idx,
                ledR: red,
                ledG: grn,
                ledB: blu
            }
        });
    });
}