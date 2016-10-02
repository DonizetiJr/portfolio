/* Change the button color depending of the background color */

$(document).ready(function(){
            var scroll_pos = 0;
            $(document).scroll(function() {
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 890) {
                    $("#c-button--push-right").css('color', '#424652');
                } else {
                    $("#c-button--push-right").css('color', '#fff');
                }
            });
        });


/* Push right instantiation and action. */
var pushRight = new Menu({
  wrapper: '#o-wrapper',
  type: 'push-right',
  menuOpenerClass: '.c-button',
  maskId: '#c-mask'
});

var pushRightBtn = document.querySelector('#c-button--push-right');

pushRightBtn.addEventListener('click', function(e) {
  e.preventDefault;
  pushRight.open();
});

/* Smooth scroll onclick */

$('a[href^="#bottom"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1400);
    }

});
