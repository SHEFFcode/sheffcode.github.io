//Global Variables
var imgArray = ['url(img/content-img.jpg', 'url(img/bike.jpg)', 'url(img/bike1.jpg)', 'url(img/bike2.jpg)'];
var index = 0;

//Event Handlers
$('.arrow-left').on('click', prevImg);
$('.arrow-right').on('click', nextImg);

//Functions
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