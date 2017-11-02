function scroll(object){$('html,body').animate(
    {scrollTop: object.top}, 500);
};

module.exports = scroll;