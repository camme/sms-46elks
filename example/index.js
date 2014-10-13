// Load module
var elks = require('../');

// Create a new endpoint with the path and the port
var smsServer = elks.create('/46elks/sms', 8787);

// Listen for the incoming event
smsServer.on('incoming', function(sms) {

    // Print who it came from
    console.log(sms.from);

    // Print who it was for
    console.log(sms.to);

    // Print the message
    console.log(sms.message);

});

smsServer.init(function() {
    console.log("SMS endpoint started");
});

