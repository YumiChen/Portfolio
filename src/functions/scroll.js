import $ from "jquery";

function scroll(dom){
    const offset = $(dom).offset();
    $('html,body').animate(
    {scrollTop: offset.top}, 500);
};

module.exports = scroll;