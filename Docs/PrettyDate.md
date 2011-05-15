Class: PrettyDate (#PrettyDate)
===============================

This plugin provides a way to format JavaScript dates in the style of Twitter's timeline: 
"just now", "about 8 minutes ago","about 11 hours ago","yesterday". 
The method is, originally, written by [John Resig](http://ejohn.org/blog/javascript-pretty-date/).


###Implements:

Options

PrettyDate Method: constructor (#PrettyDate: constructor)
---------------------------------------------------------

### Syntax: 

    var pretty = new PrettyDate(elems, options);

### Arguments:

1. elems   (*Array of Elements* or *Element*) - the elements that contains in their title an ISO8601 date.
2. options (*Object*)                         - the options for this class.

### options:

* now       - (*String*, default to 'just now')              -  
* minute    - (*String*, default to 'about 1 minute ago')    -
* minutes   - (*String*, default to 'about {x} minutes ago') -
* hour      - (*String*, default to 'about 1 hour ago')      -
* hours     - (*String*, default to 'about {x} hour ago')    -
* yesterday - (*String*, default to 'yesterday')             -
* days      - (*String*, default to 'about {x} days ago')    -
* weeks     - (*String*, default to 'about {x} weeks ago')   -
                          

### Returns

An `PrettyDate` instance.

Element Method: prettyDate (#Element: prettyDate)
-------------------------------------------------

`PrettyDate` extends Element with this method.

### Syntax:

    myElem.prettydate(options);

### Arguments

1. options 
 
### Returns

* (element) 'This' element.

### Example

    #html
    <ul>
    <li>@<a href="#">john</a> just happened here <span><br/><i>posted</i> <a class="pretty" href="#" title="2011-05-14 20:35:28">Sun May 14 20:35:28 +0000 2011</a></span></li>
    <li>@<a href="#">code</a> just happened here <span><br/><i>posted</i> <a class="pretty" href="#" title="2011-05-14 19:15:28">Sun May 14 19:15:28 +0000 2011</a></span></li>
    <li>@<a href="#">php</a> just happened here <span><br/><i>posted</i> <a class="pretty" href="#" title="2011-05-14 10:54:28">Sun May 14  10:54:28 +0000 2011</a></span></li>
    <li>@<a href="#">mootools</a> just happened here <span><br/><i>posted</i> <a class="pretty" href="#" title="2011-05-14 21:40:28">Sun May 14 21:40:28 +0000 2011</a></span></li>
    <li>@<a href="#">jquery</a> just happened here <span><br/><i>posted</i> <a class="pretty" href="#" title="2011-05-13 12:54:28">Sun May 14 12:54:28 +0000 2011</a></span></li>
    <li>@<a href="#">yui</a> just happened here <span><br/><i>posted</i> <a class="pretty" href="#" title="2011-05-12 14:54:28">Sun May 14 19:54:28 +0000 2011</a></span></li>
    </ul>

    #JS
    $$("a.pretty").prettyDate();