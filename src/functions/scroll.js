var $ = require('jquery/src/core');
require('jquery/src/selector');
require('jquery/src/effects');
require('jquery/src/css');

function scroll(dom){
    const offset = document.querySelector(dom).getBoundingClientRect().top + document.body.scrollTop;

    $('html,body').animate({scrollTop: offset}, 500);

};

module.exports = scroll;