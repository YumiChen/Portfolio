var config = require("./config.js");
var https = require("https");

module.exports = (function(){
    try{
        setInterval(function() {
            https.get(config.server).on("error", function(error) {
                console.log(error.message);
            });
        }, 450000)
    }
    catch(e){
        console.log(e);
    }

})();

// poke every 7.5 min