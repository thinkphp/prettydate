/*
---
description: prettyDate Format.
link: http://www.paste.mootools.net/forge/p/prettydate

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

var PrettyDate=new Class({Implements:[Options],options:{now:"about {x} seconds ago",minute:"about 1 minute ago",minutes:"about {x} minutes ago",hour:"about 1 hour ago",hours:"about {x} hours ago",yesterday:" yesterday",days:"about {x} days ago",weeks:"about {x} weeks ago",months:"about {x} months ago",timeNow:new Date,elems:null},initialize:function(a,b){if(typeof prettyDateLang!="undefined")this.options=$merge(this.options,prettyDateLang);this.setOptions(b);this.options.elems=a;this.update()},update:function(){if($type(this.options.elems)=="array"){this.options.elems.each(function(a){var b=this.format(a.get("title"));if(b){a.set("text",b)}},this)}else{var a=this.format(this.options.elems.get("title"));if(a){this.options.elems.set("text",a)}}},format:function(a){var b=new Date((a||"").replace(/-/g,"/").replace(/[TZ]/g," ")),c=(this.options.timeNow.getTime()-b.getTime())/1e3,d=Math.floor(c/86400);if(isNaN(d)||d<0){return;alert(d)}return d==0&&(c<60&&this.options.now.replace("{x}",Math.floor(c))||c<120&&this.options.minute||c<3600&&this.options.minutes.replace("{x}",Math.floor(c/60))||c<7200&&this.options.hour||c<86400&&this.options.hours.replace("{x}",Math.floor(c/3600)))||d==1&&this.options.yesterday||d<7&&this.options.days.replace("{x}",d)||d<31&&this.options.weeks.replace("{x}",Math.ceil(d/7))||d>=31&&this.options.months.replace("{x}",Math.ceil(d/30))}});Element.implement({prettyDate:function(a){new PrettyDate(this,a);return this}})
