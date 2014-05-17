PrettyDate
==========

This plugin provides a way to format JavaScript dates in the style of Twitter's timeline: 
"just now", "about 8 minutes ago","about 11 hours ago","yesterday". 
The method is, originally, written by [John Resig](http://ejohn.org/blog/javascript-pretty-date/).

![Screenshot](http://farm4.static.flickr.com/3229/5721430624_80ab38a116.jpg)

How to use
----------

First you must to include the JS files in the head of your HTML document.

        #HTML
        <!-- load Mootools core -->
        <script src="https://ajax.googleapis.com/ajax/libs/mootools/1.3.0/mootools.js"></script>
        <!-- load prettyDate object -->
        <script type="text/javascript" src="prettydate/prettydate.js"></script>
        <!-- load Spanish locatize for prettyDate  -->
		<script type="text/javascript" src="prettydate/lang/es.js"></script>

You need to specify the source of the ISO8601-date.

       #HTML
       <ul>
       <li>@<a href="#">john</a> just happened here <span><br/><i>posted</i> <a class="pretty" href="#" title="2011-05-14 20:35:28">Sun May 14 20:35:28 +0000 2011</a></span></li>
       <li>@<a href="#">code</a> just happened here <span><br/><i>posted</i> <a class="pretty" href="#" title="2011-05-14 19:15:28">Sun May 14 19:15:28 +0000 2011</a></span></li>
       <li>@<a href="#">php</a> just happened here <span><br/><i>posted</i> <a class="pretty" href="#" title="2011-05-14 10:54:28">Sun May 14  10:54:28 +0000 2011</a></span></li>
       <li>@<a href="#">mootools</a> just happened here <span><br/><i>posted</i> <a class="pretty" href="#" title="2011-05-14 21:40:28">Sun May 14 21:40:28 +0000 2011</a></span></li>
       <li>@<a href="#">jquery</a> just happened here <span><br/><i>posted</i> <a class="pretty" href="#" title="2011-05-13 12:54:28">Sun May 14 12:54:28 +0000 2011</a></span></li>
       <li>@<a href="#">yui</a> just happened here <span><br/><i>posted</i> <a class="pretty" href="#" title="2011-05-12 14:54:28">Sun May 14 19:54:28 +0000 2011</a></span></li>
       </ul>

Then you can apply the method.

       #JS
       window.addEvent('domready', function() {
              new PrettyDate($$("a.pretty"));
       });

       OR

       //apply `prettyDate` method to those;
       window.addEvent('domready', function() {
              $$("a.pretty").prettyDate(); 
       });       


localize and overwrite the options
--------------------------------------------

To localize this plugin :
ex: french localization:

	#HTML
	<script type="text/javascript" src="../Source/prettydate/lang/fr.js"></script>
	#JS 
	window.addEvent('domready', function() {
		$$('a.pretty').prettyDate(options); 
	});

Or you can overwrite the options. ex: french localization:

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
			weeks    : " il y a {x} semaines",
			months   : " il y a {x} months"
		};
		$$('a.pretty').prettyDate(options); 
	});

Files lists
-------------------------------------------------------------
	  prettydate.
				|-- demo
				|   |-- prettydate-de.html 	<-- Germany example with the yui compressed package
				|   |-- prettydate-es.html 	<-- Spanish example with the yui compressed package
				|   `-- prettydate.html  	<-- normal example 
				|-- Docs
				|   `-- PrettyDate.md
				|-- package.yml
				|-- README.md
				`-- Source
					`-- prettydate
						|-- lang
						|   |-- de.js	<-- Germany Location
						|   |-- en.js	<-- English Location
						|   |-- es.js	<-- Spanish Location
						|   `-- fr.js		<-- French Location
						|-- prettydate.js	<-- prettyDate object
						`-- prettydate-yui-compressed.js

	5 directories, 12 files
