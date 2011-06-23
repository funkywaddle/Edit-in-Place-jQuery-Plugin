<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<script type="text/javascript" src="js/jquery-1.4.2.min.js" ></script>
		<script type="text/javascript" src="js/jQuery.editInPlace.js" ></script>
		<title>Edit in place test</title>
		<style type="text/css">
			.wysiwyg{
				background-color: #000000;
				color:#ffffff;
			}
		</style>
		<script type="text/javascript">
			$(document).ready(function() {
				jQuery('.editInPlace').editInPlace(
					{
//						editimg: 'icons/pencil.png',
						editlink: 'Edit This',
						saveimg: 'icons/disk.png',
						autosave: function(text)
						{
							jQuery('input[name=editInPlace1]').val(text);
						}
					}
				);
				jQuery('.editTextarea').editInPlace(
					{
						edittype:'textarea',
						edittypeclass:'wysiwyg',
						removeable:true
					}
				);

				jQuery('#eip1').editInPlace('destroy');
			});
			
		</script>
    </head>
    <body>
        <div class="editInPlace" id="eip1">Edit in place # 1</div>
		<div class="editInPlace" id="eip2">Edit in place # 2</div>
		<div class="editTextarea" id="eip3">Edit in place # 3</div>

		<input type="hidden" name="editInPlace1" value="" />
    </body>
</html>
