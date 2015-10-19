//Global Variables
var imgArray = ['url(img/content-img.jpg', 'url(img/bike.jpg)', 'url(img/bike1.jpg)', 'url(img/bike2.jpg)'];
	var index = 0;

//Event Handlers
$('.arrow-left').on('click', prevImg);
$('.arrow-right').on('click', nextImg);

//Image manipulation
function nextImg(){
	if (index < imgArray.length - 1){
		index++;
		$('.container').css('background-image', imgArray[index]);
		$('#arrow-left').attr('disabled', false);
	} 
	if (index === imgArray.length - 1){
		$('.arrow-right').attr('disabled', true);
	}
	
}

function prevImg(){
	if (index > 0){
		index--;
		$('.container').css('background-image', imgArray[index]);
	}
	if (index === 0){
		$('.arrow-left').attr('disabled', true);
	}

}

//Smooth Scrolling
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

//Active Class Switching
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 701) {
        $('.slide').each(function(i) {
            if ($(this).position().top <= windscroll - 20) {
                $('nav a.active').removeClass('active');
                $('nav a').eq(i + 1).addClass('active');
            }
        });

    } else {

        $('nav').removeClass('fixed');
        $('nav a.active').removeClass('active');
        $('nav a:nth-child(2)').addClass('active');
    }

}).scroll();

//Click on link to make active
$('#nav a').click(function() {
    $('a').removeClass('active');
    $(this).addClass('active');
});

