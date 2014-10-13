46Elks incoming SMS endpoint createor
======

This is a simple module that will create an http server with a single endpoint for handling incomoing POST
requests from 46Elks.

## Usage

It is extremly basic and you set it up like this:

    // Load module
    var elks = require('sms-46elks');

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

    }

    smsServer.init(function() {
        console.log("SMS endpoint started");
    });


