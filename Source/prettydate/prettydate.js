/*
---
description: This plugin provides a way to format JavaScript dates in the style of Twitter's timeline: "just now", "about 8 minutes ago","about 11 hours ago","yesterday". The method is, originally, written by John Resig.

authors:
  - Adrian Statescu - Core developer  (http://thinkphp.ro)
  - fitorec - colaborator (http://fitorec.wordpress.com)

license:
- MIT-style license

requires:
 core/1.3.1: '*'

provides:
  - prettyDate

...
*/
     var PrettyDate = new Class({

         /* Implements */
         Implements: [Options],

         /* options */
         options: {
             now      : "about {x} seconds ago",
             minute   : "about 1 minute ago",
             minutes  : "about {x} minutes ago",
             hour     : "about 1 hour ago",
             hours    : "about {x} hours ago",
             yesterday: " yesterday",
             days     : "about {x} days ago",
             weeks    : "about {x} weeks ago",
             months   : "about {x} months ago",
             timeNow  : new Date(),
             elems	: null
         },

         /* constructor of class - initialize */
         initialize: function(elems,options) {
			 //load now
				//load the template languages
               if (typeof(prettyDateLang) != 'undefined')
						this.options = $merge(this.options, prettyDateLang);
               this.setOptions(options);
               this.options.elems=elems;
               this.update();
               //this.update.periodical(5000, this);
         },
       update: function(){
		   if($type(this.options.elems) == 'array') {
                  this.options.elems.each(function(elem) {
                        var pretty = this.format(elem.get('title'));
                            if(pretty) {
                               elem.set('text',pretty);
                            }
                  }, this); 

               } else {
                        var pretty = this.format(this.options.elems.get('title'));
                            if(pretty) {
                               this.options.elems.set('text',pretty); 
                            }
               }
		},
         /* the method written by John Resig, improving a bit */
         format: function(time){

               var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
               diff = ((this.options.timeNow.getTime() - date.getTime()) / 1000),
               day_diff = Math.floor(diff / 86400);

               if(isNaN(day_diff) || day_diff < 0 ) {
                  return;
                  alert(day_diff);
               }
               return day_diff == 0 && (
							  diff < 60 && this.options.now.replace("{x}",Math.floor(diff)) || 
							  diff < 120 && this.options.minute || 
							  diff < 3600  &&  this.options.minutes.replace("{x}",Math.floor( diff / 60)) ||
							  diff < 7200  &&  this.options.hour || 
							  diff < 86400 &&  this.options.hours.replace("{x}",Math.floor(diff / 3600))
                          ) ||
                          day_diff == 1 && this.options.yesterday || 
                               day_diff < 7 && this.options.days.replace("{x}",day_diff) ||
                                      day_diff < 31  && this.options.weeks.replace("{x}",Math.ceil( day_diff / 7 ))  ||
                                      day_diff >= 31 && this.options.months.replace("{x}",Math.ceil( day_diff / 30 ));
          },
     
     });    

     Element.implement({
             prettyDate: function(options) {
                   new PrettyDate(this,options);
               return this;
             } 
     });


