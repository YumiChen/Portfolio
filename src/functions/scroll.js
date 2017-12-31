var $ = require('jquery/src/core');
require('jquery/src/selector');
require('jquery/src/effects');
require('jquery/src/css');
require('jquery/src/offset');

function scroll(dom){
    $('html').animate({scrollTop: $(dom).offset().top}, 1000);
};

module.exports = scroll;