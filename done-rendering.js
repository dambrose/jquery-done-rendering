(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
        define( [ 'jquery', 'underscore' ], factory );
	} else {
		// Browser globals
		root.doneRendering = factory( root.$, root._ );
	}
}(this, function ( $, _ ) {

	$.extend(jQuery.expr[':'], {
		'done-rendering': function (el) {
			return !!$(el).data('done-rendering');
		}
	});

	return _.debounce( _.once(function( el ) {
		$( el ).data('done-rendering', true);
	}), 3000);

}));
