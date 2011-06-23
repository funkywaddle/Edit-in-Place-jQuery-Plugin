#  Edit-in-Place jQuery Plugin

This is a “Edit in place” jQuery plugin. It allows you to designate certain portions of text that you want to be able to edit "on the fly".

You can set the text of the links or use an image. You can remove the editable text altogether. You can set the form element to text, password, or textarea, and set the class to assign to the edit form element.

## Available settings and their default values

- __'edittype':'text'__ *The type of form element to use. Can be text, password, textarea*
- __'edittypeclass':null__ *The class to assign to the edit form element - useful if you use textarea and have a WYSIWYG plugin ;)*
- __'editlink':'Edit'__ *The text of the Edit link - the link your users click on the transform the text into the form element to edit the text*
- __'editimg':null__ *path to image. To use an image in place of the editlink text*
- __'removelink':'Remove'__ *The text of the Remove link - the link your users click on to remove the text altogether rather than trying to edit it*
- __'removeimg': null__ *path to image. To use an image in place of the removelink text*
- __'removeable':false__ *Set whether an element is removeable or not - If set to false (default), the remove link will not show. If set to true, the remove link (or image) will show*
- __'savelink':'Save'__ *The text of the Save link - the link your users click on to save the edits they made*
- __'saveimg':null__ *path to image. To use an image in place of the savelink text*
- __'cancellink':'Cancel'__ *The text of the Cancel link - the link your users click on to cancel their edits and return the form element back to the text element*
- __'cancelimg':null__ *path to image. To use an image in place of the cancellink text*
- __'autosave': null__ *a function that will run when the Save link or image is clicked - useful to ajax the results back to the server, set hidden element values, etc (See note below)*

*NOTE: At this time, the updated text of the element is what gets sent as a parameter to the function. I have plans to edit this to send both the id of the element that got edited and the text.*

*NOTE 2: If the img version of the link is set, it will be used instead of the text link. Image trumps Text*

## Example Usage

    jQuery('.editInPlace').editInPlace({
	    editlink: 'Edit This',
	    saveimg: 'icons/disk.png',
	    autosave: function(text)
	    {
		    $.ajax(...);
	    }
    });
