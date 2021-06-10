$(function () {

	$('.c-button--hamburger').on('click', function () {
		$('.c-button--hamburger').toggleClass('close');
		$('.p-hamburger-menu').fadeToggle('500');
		$('body').toggleClass('nonscroll');
	});

});