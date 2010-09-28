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
