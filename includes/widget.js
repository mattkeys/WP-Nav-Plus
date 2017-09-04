jQuery(document).on( 'click', '.toggle_wpnp_option', function() {
	jQuery(this).closest('.wpnp_section_title').next('.wpnp_section_wrap').toggle();

	jQuery('.wpnp_menu_name').on( 'change ready', function() {

		jQuery.post(
			ajaxurl,
			{
				'action'		:	'wpnp_get_nav_items',
				'menu_id'		:	jQuery(this).val(),
				'segment_id'	:	jQuery(this).closest('.widget-content').find('.wpnp_section_wrap.segment select').attr('id'),
				'current'		:	jQuery(this).closest('.widget-content').find('.wpnp_section_wrap.segment .selected_segment').data('selected')
			},
			function( response ) {
				obj = jQuery.parseJSON( response );

				var selector	= obj[0];
				var current		= obj[1];
				var items		= obj[2];

				var options = '<option value="0">N/A (disabled)</option>';

				jQuery( items ).each( function( index, el ) {
					if ( el.title == current ) {
						options = options + '<option value="' + el.title + '" selected="selected">' + el.title + '</option>';
					} else {
						options = options + '<option value="' + el.title + '">' + el.title + '</option>';
					}
				});

				jQuery('#' + selector).html( options );
			}
		);

	});
});