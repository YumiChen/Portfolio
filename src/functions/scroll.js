var $ = require('jquery/src/core');
require('jquery/src/selector');
require('jquery/src/effects');
require('jquery/src/css');
require('jquery/src/offset');

function scroll(dom){
    $('body').animate({scrollTop: $('body').scrollTop() + $(dom).offset().top}, 500);
};

module.exports = scroll;