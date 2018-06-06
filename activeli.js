 $(function() {
	$('#navbarResponsive a[href~="' + location.href + '"]').parents('li').addClass('active');
});