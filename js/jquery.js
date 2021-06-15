$(function () {

	// $('.c-button--hamburger').on('click', function () {
	// 	$('.c-button--hamburger').toggleClass('close');
	// 	$('.p-hamburger-menu').fadeToggle('500');
	// 	$('body').toggleClass('nonscroll');
	// });

	$('.c-button--hamburger, .c-button--hamburger__contact').on('click', function () {
		$('.c-button--hamburger, .c-button--hamburger__contact').toggleClass('close');
		$('.p-hamburger-menu').fadeToggle('500');
		$('body').toggleClass('nonscroll');
	});

});