(function( $ ){
	var methods = {
		init : function( settings ){
			settings = $.extend({
				'edittype':'text',
				'edittypeclass':null,
				'editlink':'Edit',
				'editimg':null,
				'removelink':'Remove',
				'removeimg': null,
				'removeable':false,
				'savelink':'Save',
				'saveimg':null,
				'cancellink':'Cancel',
				'cancelimg':null,
				'autosave': null
			}, settings);

			this.each(function(){
				// if the edit link doesn't exist, it hasn't been initialized already
				if($('#edit_id_' + $(this).attr('id')).length == 0)
				{
					var input_types = ['text','password','checkbox','radio'];
					var edit_id = 'edit_id_' + $(this).attr('id');
					var save_id = 'save_id_' + $(this).attr('id');
					var cancel_id = 'cancel_id_' + $(this).attr('id');
					var input = '';

					if($.inArray(settings['edittype'], input_types) > -1)
					{
						input = $('<input />').attr('type',settings['edittype']);
					}
					else
					{
						input = $('<'+settings['edittype']+' />');
					}

					$(input)
						.attr('class', $(this).attr('id'))
						.val($(this).text());

					if(settings['edittypeclass'])
					{
						$(input).addClass(settings['edittypeclass']);
					}

					var span = $('<span />')
								.append(input)
								.append(getLink('save',this))
								.append(getLink('cancel',this))
								.addClass('eip')
								.hide();

					var span_edit = $('<span />').append(getLink('edit',this));

					$(this).before(span);
					$(this).append(span_edit);

					if(settings['removeable'])
					{
						var remove_id = 'remove_id_' + $(this).attr('id');

						//create remove link
						var span_remove = $('<span />').append(getLink('remove',this));
						$(this).append(span_remove);

						//bind click event to remove link
						$('#' + remove_id).live('click',function(){
							var el_id = $(this).attr('id').replace('remove_id_','');
							$('#'+el_id).remove();
							$('.'+el_id).parent().remove();
						});
					}

					$('#' + edit_id).live('click',function(){
						var el_id = $(this).attr('id').replace('edit_id_','');
						$('#'+el_id).hide();
						$('.'+el_id).parent().show();
					});

					

					$('#' + save_id).live('click',function(){
						var el_id = $(this).attr('id').replace('save_id_','');
						var new_text = $('.'+el_id).val();
						$('#'+el_id).text(new_text);
						$('#'+el_id).append(getLink('edit', $('#'+el_id)));
						if(settings['removeable'])
						{
							$('#'+el_id).append(getLink('remove', $('#'+el_id)));
						}
						$('#'+el_id).show();
						$('.'+el_id).parent().hide();

						if(settings['autosave']) {
							// calls the autosave function, passing in the input value
							settings['autosave'](new_text);
						}
					});

					$('#' + cancel_id).live('click',function(){
						var el_id = $(this).attr('id').replace('cancel_id_','');
						$('#'+el_id).show();
						$('.'+el_id).parent().hide();
					});
				}
			});

			function getLink(type, parent)
			{
				var id = type + '_id_' + $(parent).attr('id');

				var setting = '';
				var html = '';

				if(settings[type+'img'] != null)
				{
					setting = type + 'img';
					html = '<img src=\''+settings[setting]+'\' />';
				}
				else
				{
					setting = type + 'link';
					html = settings[setting];
				}

				return $('<a />')
							.attr('class',type + '_' + $(parent).attr('id'))
							.attr('id',id)
							.css('cursor','pointer')
							.css('text-decoration','underline')
							.css('margin-left','5px')
							.html(html);
			}
		},
		destroy : function( ) {
			this.each(function(){
				$(this).prev('.eip').remove();
				$(this).children('span').remove();
			});
		}
	};

	$.fn.editInPlace = function( method )
	{
		if ( methods[method] )
		{
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		}
		else if ( typeof method === 'object' || ! method )
		{
			return methods.init.apply( this, arguments );
		}
		else
		{
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}
	};
})( jQuery );