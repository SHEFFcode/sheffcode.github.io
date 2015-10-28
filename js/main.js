//Mobile Menu
$('.hamburger').on('click', function(){
    $('#mobile-menu').toggleClass('open');
    if ($('#mobile-menu').hasClass('open') === true){
        $('#mobile-menu').animate({right: "0"}, 400);
    } else {
        $('#mobile-menu').animate({right: "-250"}, 400);
    }
    $('.nav-mobile').on('click', function(){
        $('#mobile-menu').animate({right: "-250"}, 400);
        $('#mobile-menu').removeClass('open');
    });
});

//Timeline
$('#A1').click(timeline1);
$('#Y2007').click(timeline1);

function timeline1(e){
    e.preventDefault();
    $('#Y2007').animate({
        left: '50%',
    }, 500 );
    $('#Y2012').animate({
        left: '100%',
    }, 500 );
    $('#Y2014').animate({
        left: '150%',
    }, 500 );
    $('#sheffBrick').animate({
        left: '200%',
    }, 500 );
    $('#sheffGA').animate({
        left: '250%',
    }, 500 );
}

$('#A2').click(timeline2);
$('#Y2012').click(timeline2);

function timeline2(e){
    e.preventDefault();
    $('#Y2007').animate({
        left: '0',
    }, 500 );
    $('#Y2012').animate({
        left: '50%',
    }, 500 );
    $('#Y2014').animate({
        left: '100%',
    }, 500 );
    $('#sheffBrick').animate({
        left: '150%',
    }, 500 );
    $('#sheffGA').animate({
        left: '200%',
    }, 500 );
}

$('#A3').click(timeline3);
$('#Y2014').click(timeline3);

function timeline3(e){
    e.preventDefault();
    $('#Y2007').animate({
        left: '-50%',
    }, 500 );
    $('#Y2012').animate({
        left: '0%',
    }, 500 );
    $('#Y2014').animate({
        left: '50%',
    }, 500 );
    $('#sheffBrick').animate({
        left: '100%',
    }, 500 );
    $('#sheffGA').animate({
        left: '150%',
    }, 500 );
}

$('#A4').click(timeline4);
$('#sheffBrick').click(timeline4);

function timeline4(e){
    e.preventDefault();
    $('#Y2007').animate({
        left: '-100%',
    }, 500 );
    $('#Y2012').animate({
        left: '-50%',
    }, 500 );
    $('#Y2014').animate({
        left: '0%',
    }, 500 );
    $('#sheffBrick').animate({
        left: '50%',
    }, 500 );
    $('#sheffGA').animate({
        left: '100%',
    }, 500 );
}

$('#A5').click(timeline5);
$('#sheffGA').click(timeline5);

function timeline5(e){
    e.preventDefault();
    $('#Y2007').animate({
        left: '-150%',
    }, 500 );
    $('#Y2012').animate({
        left: '-100%',
    }, 500 );
    $('#Y2014').animate({
        left: '-50%',
    }, 500 );
    $('#sheffBrick').animate({
        left: '0%',
    }, 500 );
    $('#sheffGA').animate({
        left: '50%',
    }, 500 );
}

//Instagram
var instaObj; 

jQuery(function($) {
    $('.instagram').on('willLoadInstagram', function(event, options) {
        //console.log(options);
    });

    $('.instagram').on('didLoadInstagram', function(event, response) {
        instaObj = response.data;
        // for ( var obj in response.data){
        //     $('.instagram').append('<div class="image-div"><img src="' + response.data[obj].images.low_resolution.url + ' "></div>');
        // }
        console.log(instaObj); 
        addEventListeners();
    });

    $('.instagram').instagram({
        hash: 'divvy',
        clientId: '1d60092324264d1681671e08f58b8936'
    });

    function addEventListeners(){
        $('.leftarrow').on('click', prevPic);
        $('.rightarrow').on('click', nextPic);
    }
});
var instaIndex = 0;

function nextPic(){
    if (instaIndex < instaObj.length - 1){
        instaIndex++;
        $('.instaImg').css('background-image', 'url(' + instaObj[instaIndex].images.standard_resolution.url + ')');
        $('.instaCapt').html('<p>' + instaObj[instaIndex].caption.text + '</p>'); 
        $('#arrow-left').attr('disabled', false);
    } 
    if (instaIndex === instaObj.length - 1){
        $('.arrow-right').attr('disabled', true);
    }
}

function prevPic(){
    if (instaIndex > 0){
        instaIndex--;
        $('.instaImg').css('background-image', 'url(' + instaObj[instaIndex].images.standard_resolution.url + ')');
        $('.instaCapt').html('<p>' + instaObj[instaIndex].caption.text + '</p>'); 
        $('#arrow-right').attr('disabled', false);
    }
    if (instaIndex === 0){
        $('.arrow-left').attr('disabled', true);
    }

}

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

//Click on link to make active
$('#nav a').click(function() {
    $('a').removeClass('active');
    if ((this).hasClass('logoA')){

    } else {
            $(this).addClass('active');
    }

});

