$(function() {
	mentoringBubbleClick();
	setInterval(function(){articleTada()},4000);
	designBGstuff();
	blogarticlesclick();
});

//this is shorthand for $( document ).ready() which means our function will start running as soon as the whole DOM is finished loading
$( window ).resize(function() {
	defaultRestore();
});


function blogarticlesclick () {
	if ( $(window).width() > 640) {

	$('#article-cta').click(function(){

		$('.post-picture').css('display','none');
		$('.post-list').css('display','flex');
	});

	$('#article-return-cta'). click(function(){
		$('.post-picture').css('display', 'flex');
		$('.post-list').hide(800);
	});
}

else {
	$('#article-cta').click(function(){

		$('.post-picture').css('display','none');
		$('.post-list-small').css('display','block');
	});

	$('.article-return-cta-small'). click(function(){
		$('.post-picture').css('display', 'block');
		$('.post-list-small').hide(800);
	});
}
}

//this is our function to control the article section.  Sections start as display none and then when you click on the see more or back button it changes their display to block



function designBGstuff(){
	$('.design-img-link').hover(function(){

		$(this).parent().parent().css('background-color', $(this).data('color'));
	}, function(){
		//this is saying go to the design-img-link when we hover over it and go up two two parents and change it to the background color that is stored in the data


		$(this).parent().parent().css('background-color', $(this).parent().parent().data('orig-color'));

		//go to the original which is four parents higher and change to that original color which we also stored in data
	});


};

function articleTada(){
	var randNum = Math.floor(Math.random() * $('.article-thumb').length) +1
	$('.article-thumb').eq(randNum).addClass('is-emph')
		.siblings().removeClass('is-emph');
}

/*
do some random math and multiply that by how many 'article-thumb''s there are which in the case is
12.  The +1 because it is zero index counting in javascript.  eq means take the selected obect
which in this case is the randNum and add the class is-emp

*/

function mentoringBubbleClick() {
	$('.face').on('click',function() {
		var $this = $(this),
			faceTop = $(this).position().top,
			vertMath = -1 * (faceTop - 230);
			faceLeft = $(this).position().left,
			horzMath = 0 - faceLeft;

		if($(window).width() > 640){
			$this.parent().css('top', + vertMath + 'px');
		} else {
			if($this.hasClass('back-btn')){
				mentoringNarrowStart();

			} else{
				$this.parent().css('left', + horzMath + 'px');
			}
		}
		if(!$this.hasClass('back-btn')){
		$this.addClass('has-bubble-open')
			.siblings().removeClass('has-bubble-open');
		}
	});
}

// when I click a face
// get the distance of the face from its parent
// move the whole container up 115px + the count
// add the is-open class to the to pop the balloon

/*
function blogarticlesclick(){
	$('#article-cta').on('click',function(){
		$('.article-wrap').toggle();
	});

};

this function will display or not display my .article-wrap everytime I click on 'article-cta'
*/






$(window).scroll(function() {
	youtubeVidScroll();
	startMentoring();
	startArticles();
});

/*

this is saying that when the window is finished loading, not just he DOM but everything, including pictures and things, then when you scroll it calls the following functions
$( document ).ready(function() {
  console.log( 'ready!' );
})

is the same as
$(function() {
  console.log( 'ready!' );
});

So what we are doing with this first bit of javascript is making all of the following functions only load when the window is loaded and scrolled
*/

function youtubeVidScroll() {
	var wScroll = $(window).scrollTop();
	$('.video-strip').css('background-position','center -'+wScroll + 'px');
}

/*

The first part is saying our variable wScroll is going to mean
Look at the window and see how far we have scrolled from the top
that is what wScroll is going to mean
then...
go and get all of the elements with the class ".video-strip" and
change the css background-position property from center 0px to
how many pixels we have scrolled down

*/

function startArticles(){
	var wScroll = $(window).scrollTop();

	if($('section.articles').offset().top - $(window).height()/2 < wScroll){
		$('.article-thumb').each(function(i){
			setTimeout(function(){
			$('.article-thumb').eq(i).addClass('is-visible');
			}, 300 * i);
		});
	}
}

/*
so again get that number of how many pixels we have scrolled down
then if the position of 'section.articles' is half of the window height
then run the function of adding a class 'is visible' to each 'article-thumb'
but wait for 300ms between each one.  The * i says for the first one wait 300ms
then wait 300x2 for the second one, then 300x3 for the third one
*/


function startMentoring(){

	var wScroll = $(window).scrollTop();

	if($('section.mentoring').offset().top - $(window).height()/2 < wScroll) {
		if($(window).width() > 640){
		$('.faces').addClass('launched');
			if(!$('.face').hasClass('has-bubble-open')) {
				setTimeout(function(){
					$('.face:nth-child(3)').addClass('has-bubble-open');
				}, 400);
			}
		} else{
			mentoringNarrowStart();
		}
	}
};

/*
so again get that number of how many pixels we have scrolled down
and start the




*/
function mentoringNarrowStart() {
	$('.faces').css({
		'top': '230px',
		'left': '0px'
	});
	$('.face').first().addClass('has-bubble-open')
		.siblings().removeClass('has-bubble-open');
}
/*
find the faces id and add top 230px and left 0px
also find the first face and add 'has-bubble-open'
and then remove that from any of it's siblings

*/

function mentoringWideStart() {
	$('.faces').css({
		'top': '0px',
		'left': '0px'
	});
	$('.face:nth-child(3)').first().addClass('has-bubble-open')
		.siblings().removeClass('has-bubble-open');
}

/*
add 0px to both top and left and also on the 3rd child add has-bubble-open
*/

$(window).resize(function() {
	if($(window).width() > 640){
		mentoringWideStart();
	} else{
		mentoringNarrowStart();
	}
});

//if the width is over 640 pixes run the function mentoringWideStart but if not
//run the function "mentoringNarrowStart"
