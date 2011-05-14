PrettyDate
==========

This plugin provides a way to format JavaScript dates in the style of Twitter'timeline: 
"just now", "about 8 minutes ago","about 11 hours ago","yesterday". 
The method is, originally, written by [John Resig](http://ejohn.org/blog/javascript-pretty-date/).

![Screenshot]()

How to use
----------

First you must to include the JS files in the head of your HTML document.

        #HTML
       <script src="http://www.google.com/jsapi?key=ABQIAAAA1XbMiDxx_BTCY2_FkPh06RRaGTYH6UMl8mADNa0YKuWNNa8VNxQEerTAUcfkyrr6OwBovxn7TDAH5Q"></script>
       <script type="text/javascript">google.load("mootools", "1.3");</script>
       <script type="text/javascript" src="prettydate.js"></script>


You need to specify the source of the ISO8601-date

       #HTML
       #JS
       window.addEvent('domready', function() {
              new PrettyDate($$("a.pretty"));
       });

       OR

       //apply prettyDate method to those;
       window.addEvent('domready', function() {
              $$("a.pretty").prettyDate(); 
       });       

 
To localize this plugin overwrite the options. 
ex: french localization:

       #JS 
       window.addEvent('domready', function() {
            var options = {
             now      : "a l'instant",
             minute   : "il y a 1 minute",
             minutes  : "il y a {x} minutes",
             hour     : "il y a 1 heure",
             hours    : "il y a {x} heures",
             yesterday: " hier",
             days     : " il y a {x} jours",
             weeks    : " il y a {x} semaines"             
            };
            $$('a.pretty').prettyDate(options); 
       });
         