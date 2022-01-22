function ibg(){
	let ibg = document.querySelectorAll('.ibg');
	for(var i=0;i<ibg.length;i++){
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}

}
ibg();

$(document).ready(function(){
	$('.sliderFirst').slick({
		asNavFor:'.sliderSecond',
		rtl:true,
		variableWidth:true,
		arrows:false,
		touchThreshold:10,
		infinite:true,
		responsive:[{
			breakpoint:850,
			settings:{
				rtl:false
			}
		}]
	});
	$('.sliderSecond').slick({
		asNavFor:'.sliderFirst',
		infinite:true,
		variableWidth:true,
		arrows:false,
		touchThreshold:10
	});


	$('.header-language').click(function(){
		$('.header-lang').toggleClass('active');
		$('.promo').toggleClass('active');
	})
	
	$(".header-body__list").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

	let w = $(window).width();
	let menu = $('.header-body__list');
	let burgerBody = $('.burger-menu__body');
	let burgerBtn = $('.header-burger');
	let headLink = $('.header-link');
	burgerBtn.click(function(){
		$('.burger-menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.container').toggleClass('lock');
	})
	if(w<850){
		menu.appendTo(burgerBody);
		headLink.appendTo(burgerBody);
	}else{
		menu.insertAfter($('.header-body__logo'));
		headLink.insertAfter(burgerBtn);
	}
	
	

	let faqP = $('.faq-body__p');
	faqP.hide();
	let faqItem = $('.faq-body__item');
	faqItem.each(function(){
		$(this).click(function(){
			if($(this).find($('.faq-body__p')).css('display') == 'none'){
			faqP.hide(500);
			faqItem.each(function(){
				$(this).removeClass('active');
			})
			$(this).find($(".faq-body__p")).show(500);
			$(this).addClass('active');
		}else{
			faqP.hide(500);
			$(this).removeClass('active');
		}
		})
	})
})

