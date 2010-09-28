/*
 * jquery.ieselect.js
 * 
 * John Griffiths
 * 
 * Hack for Internet Explorer allowing a drop-down select box 
 * to operate moderately the same as in Firefox, Chrome or Safari.
 * 
 * Basically when the select box is set to a specific size in FF but
 * contains more than this limit it expands when selecting but in IE
 * it cuts off.
 *
 * Here we apply the hack to our select box, set a min & max width and
 * onfocus it expands to the max, and onblur it contracts to the min.
 *
 * We also check to see which browser we're running to apply the patch
 * only to IE.
 * 
 */

(function($) {

    $.fn.ieselect = function(min, max) {
      if ($.browser.msie) {
        // counter for over-expanding elements
        $(this).css({"position":"relative", "z-index":"0"});

        // expand and contract
        $(this).focus(function(){
          $(this).css("z-index", "1").width(max);
        }).blur(function(){
          $(this).width(min).css("z-index", "0");
        });
      }
    };

    // selectparse (stand-alone)
    // apply to drop-down, once option selected, copy value to text property 
    // of 'el'. don't accept 'Please select...' as a value and append 'append'
    // to the string (optional)

    $.fn.selectparse = function(el, append) {
    
      append = append || '';
    
      $(this).change(function(){
        var str = '';
        $(this).find("option:selected").each(function () {
            str += $(this).text().replace(/(Please select...)/, '') + " ";
        });

        if (str.length > 1) {
            $(el).text(str+append);
        }
      });
    };

})(jQuery);
