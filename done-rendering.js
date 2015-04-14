;(function($){

	$.extend(jQuery.expr[':'], {
		'done-rendering': function (el) {
			return !!$(el).data('done-rendering');
		}
	});

})(jQuery);
