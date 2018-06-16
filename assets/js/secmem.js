$(function () {
	$aside.init();
	$gotop.init();

	var wow = new WOW({
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)
		mobile:       true        // trigger animations on mobile devices (true is default)
	});
	wow.init();

	$window.on('load scroll resize', function () {
		if ( $window.scrollTop() > $window.height()/4 ) {
			$('#header').addClass('barmode');
		} else {
			$('#header').removeClass('barmode');
		}
	});

	$('#container').append($('#footer'));
});

// primary element
var $window = $(window),
	$document = $(document);

// scroll, resize end event
(function(a){var f=window.Chicago||{utils:{now:Date.now||function(){return(new Date).getTime()},uid:function(a){return(a||"id")+f.utils.now()+"RAND"+Math.ceil(1E5*Math.random())},is:{number:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},fn:function(a){return"function"===typeof a},object:function(a){return"[object Object]"===Object.prototype.toString.call(a)}},debounce:function(a,b,d){var c;return function(){var e=this,g=arguments,f=d&&!c;c&&clearTimeout(c);c=setTimeout(function(){c=null;d||a.apply(e,g)},b);f&&a.apply(e,g)}}},$:window.jQuery||null};"function"===typeof define&&define.amd&&define("chicago",function(){f.load=function(a,b,d,c){a=a.split(",");var e=[];c=(c.config&&c.config.chicago&&c.config.chicago.base?c.config.chicago.base:"").replace(/\/+$/g,"");if(!c)throw Error("Please define base path to jQuery resize.end in the requirejs config.");for(var g=0;g<a.length;){var h=a[g].replace(/\./g,"/");e.push(c+"/"+h);g+=1}b(e,function(){d(f)})};return f});if(window&&window.jQuery)return a(f,window,window.document);if(!window.jQuery)throw Error("jQuery resize.end requires jQuery");})(function(a,f,h){a.$win=a.$(f);a.$doc=a.$(h);a.events||(a.events={});a.events.resizeend={defaults:{delay:250},setup:function(){var b=arguments,d={delay:a.$.event.special.resizeend.defaults.delay};a.utils.is.fn(b[0])||(a.utils.is.number(b[0])?d.delay=b[0]:a.utils.is.object(b[0])&&(d=a.$.extend({},d,b[0])));var b=a.utils.uid("resizeend"),c=a.$.extend({delay:a.$.event.special.resizeend.defaults.delay},d),e=c,d=function(b){e&&clearTimeout(e);e=setTimeout(function(){e=null;b.type="resizeend.chicago.dom";return a.$(b.target).trigger("resizeend",b)},c.delay)};a.$(this).data("chicago.event.resizeend.uid",b);return a.$(this).on("resize",a.utils.debounce(d,100)).data(b,d)},teardown:function(){var b=a.$(this).data("chicago.event.resizeend.uid");a.$(this).off("resize",a.$(this).data(b));a.$(this).removeData(b);return a.$(this).removeData("chicago.event.resizeend.uid")}};(function(){a.$.event.special.resizeend=a.events.resizeend;a.$.fn.resizeend=function(b,d){return this.each(function(){a.$(this).on("resizeend",b,d)})}})()});
(function(a){var f=window.Chicago||{utils:{now:Date.now||function(){return(new Date).getTime()},uid:function(a){return(a||"id")+f.utils.now()+"RAND"+Math.ceil(1E5*Math.random())},is:{number:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},fn:function(a){return"function"===typeof a},object:function(a){return"[object Object]"===Object.prototype.toString.call(a)}},debounce:function(a,d,c){var b;return function(){var g=this,e=arguments,f=c&&!b;b&&clearTimeout(b);b=setTimeout(function(){b=null;c||a.apply(g,e)},d);f&&a.apply(g,e)}}},$:window.jQuery||null};"function"===typeof define&&define.amd&&define("chicago",function(){f.load=function(a,d,c,b){a=a.split(",");var g=[];b=(b.config&&b.config.chicago&&b.config.chicago.base?b.config.chicago.base:"").replace(/\/+$/g,"");if(!b)throw Error("Please define base path to jQuery scrollend in the requirejs config.");for(var e=0;e<a.length;){var k=a[e].replace(/\./g,"/");g.push(b+"/"+k);e+=1}d(g,function(){c(f)})};return f});if(window&&window.jQuery)return a(f,window,window.document);if(!window.jQuery)throw Error("jQuery scrollend requires jQuery");})(function(a,f,h){a.$win=a.$(f);a.$doc=a.$(h);a.events||(a.events={});a.events.scrollend={defaults:{delay:150},setup:function(f){var c=arguments,b={delay:a.$.event.special.scrollend.defaults.delay};a.utils.is.fn(c[0])||(a.utils.is.number(c[0])?b.delay=c[0]:a.utils.is.object(c[0])&&(b=a.$.extend({},b,c[0])));var c=a.utils.uid("scrollend"),d=a.$.extend({delay:a.$.event.special.scrollend.defaults.delay},b),e=d,b=function(b){e&&clearTimeout(e);e=setTimeout(function(){e=null;b.type="scrollend.chicago.dom";return a.$(b.target).trigger("scrollend",b)},d.delay)};a.$(this).data("chicago.event.scrollend.uid",c);return a.$(this).on("scroll",a.utils.debounce(b,100)).data(c,b)},teardown:function(){var d=a.$(this).data("chicago.event.scrollend.uid");a.$(this).off("scroll",a.$(this).data(d));a.$(this).removeData(d);return a.$(this).removeData("chicago.event.scrollend.uid")}};(function(){a.$.event.special.scrollend=a.events.scrollend;a.$.fn.scrollend=function(d,c){return this.each(function(){a.$(this).on("scrollend",d,c)})}})()});

var $aside = {};
$.extend($aside, {
	init: function () {
		var $this = this,
			$init = $this.init;

		$init.header = $('#header');
		$init.aside = $('#aside');
		$init.ov = $init.aside.find('.ov');
		$init.wr = $init.aside.find('.wr');
		$init.asideCt = $('#aside_ct');
		$init.asideClose = $init.aside.find('.aside_close');

		$init.asideCt.click(function () {
			if ( $init.aside.hasClass('open') ) {
				$aside.close();
			} else {
				$aside.open();
			}
		});

		$init.asideClose.click(function () {
			$aside.close();
		});

		$init.ov.click(function () {
			$aside.close();
		});
	},
	open: function () {
		var $this = this,
			$init = $this.init;

		$init.header.addClass('aside_open');
		$init.aside.addClass('open');
		$('body').addClass('noscroll');
	},
	close: function () {
		var $this = this,
			$init = $this.init;

		$init.header.removeClass('aside_open');
		$init.aside.removeClass('open');
		$('body').removeClass('noscroll');
	}
});

var $gotop = {};
$.extend($gotop, {
	init: function () {
		var $this = this,
			$init = $this.init;

		$init.btn = $('.btn_gotop');

		$init.btn.click(function () {
			$this.gotop();
			return false;
		});
	},
	gotop: function () {
		$('html, body').animate({'scrollTop': 0}, 1000, 'easeInOutQuart');
	}
});

// main
var $main = {};
$.extend($main, {
	init: function () {
		var $this = this,
			$init = $this.init;

		$init.container = $('#container');
		$init.section = $init.container.find('.m_section');
		$init.sectionCnt = Math.round($window.scrollTop() / $window.height());
		$init.sectionMaxCnt = $init.section.length;
		$init.sectionScrollingFlag = false;
		$init.navigation = $init.container.find('.navigation');
		$init.isWide = false;

		$this.sectionMoveEvent();
		$this.wideChange();
		$this.navigationClick();

		$window.on('resize', function () {
			if ( $window.outerWidth() > 900 ) {
				$init.isWide = true;
			} else {
				$init.isWide = false;
			}
		}).trigger('resize');
	},
	sectionMoveEvent: function () {
		var $this = this,
			$init = $this.init;

		$window.on('resizeend', { delay : 200 }, function() {
			scrollResizeEvent();
		});
		$window.on('scrollend', { delay : 200 }, function () {
			scrollResizeEvent();
		});

		function scrollResizeEvent () {
			if ( !$init.isWide ) { return false; }
			if ( $init.sectionScrollingFlag ) { return false; }
			if ( $init.sectionMaxCnt == $init.sectionCnt ) { return false; }

			$init.sectionCnt = Math.round($window.scrollTop() / $window.height());
			if ( $init.sectionCnt >= 2 ) { return false; }
			$this.sectionMove($init.sectionCnt);
		}

		$window.on('mousewheel.sectionMove DOMMouseScroll.sectionMove', function(e) {
			if ( $init.isWide ) {

				if ( $window.scrollTop() == $('#calendar').offset().top ) {

					if ( $init.sectionScrollingFlag ) { return false; }

					if ( e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ) {
						if ( $init.sectionCnt <= 0 ) { return false; }
						$init.sectionCnt = $init.sectionCnt - 1;
						$this.sectionMove($init.sectionCnt);
						return false;
					}

				} else if ( $window.scrollTop()+100 > $('#calendar').offset().top ) { // 캘린더 & 푸터

				} else {
					
					if ( $init.sectionScrollingFlag ) { return false; }

					if ( e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ) {
						if ( $init.sectionCnt <= 0 ) { return false; }
						$init.sectionCnt = $init.sectionCnt - 1;
					} else {
						if ( $init.sectionMaxCnt == $init.sectionCnt ) { return false; }
						$init.sectionCnt = $init.sectionCnt + 1;
					}

					$this.sectionMove($init.sectionCnt);

				    return false;

				}
				
			}
		});
	},
	sectionMove: function ( cnt ) {
		var $this = this,
			$init = $this.init;

		$init.sectionCnt = cnt;

		$init.sectionScrollingFlag = true;

		$('html, body').stop().animate({'scrollTop': $window.height() * $init.sectionCnt}, 500, 'easeInOutQuart', function () {
			$init.sectionScrollingFlag = false;
		});
		$this.navigationActive($init.sectionCnt);
	},
	wideChange: function () { // main section background wide change
		var $this = this,
			$init = $this.init;

		var setSection = function () {
			if ( $window.outerWidth() > $window.outerHeight() ) {
				$init.section.addClass('wide');
			} else {
				$init.section.removeClass('wide');
			}
		}
		setSection();

		$window.on('resizeend', { delay : 10 }, function() {
			setSection();
		});
	},
	navigationClick: function () {
		var $this = this,
			$init = $this.init;

		$init.navigation.find('a').click(function () {
			$this.sectionMove($(this).parent().index());
			return false;
		});
	},
	navigationActive: function ( cnt ) { // navigation active setting
		var $this = this,
			$init = $this.init;

		if ( !cnt || cnt == undefined || cnt == null ) {
			cnt = 0;
		}

		$init.navigation.find('li.active').removeClass('active');
		$init.navigation.find('li').eq(cnt).addClass('active');
	}
});

var $ssm = {};
$.extend($ssm, {
	visual: function () {
		var $this = this,
			$init = $this.init;

		var visual = $('#ssm_visual');

		var setbg = function () {
			if ( $window.outerWidth() > $window.outerHeight() ) {
				visual.addClass('wide');
			} else {
				visual.removeClass('wide');
			}
		}
		setbg();

		$window.on('resizeend', { delay : 10 }, function() {
			setbg();
		});
		$window.on('load scroll resize', function () {
			visual.css({'opacity': 1-0.8*$(window).scrollTop()/$(window).height()});
		});

		var visualTxt = visual.find('.visual_txt');
		$window.on('resize', function () {
			if ( $window.outerWidth() > 900 ) {
				if ( visual.find('.visual_txt').length == 0 ) {
					visual.find('.info').append(visualTxt);
				}
			} else {
				if ( visual.find('.visual_txt').length > 0 ) {
					visual.after(visualTxt);
				}
			}
		}).trigger('resize');
		
	},
	timeline: function () {
		var $this = this,
			$init = $this.init;

		$(".timeline ul").owlCarousel({
			items : 3,
			navigation : true,
			itemsDesktopSmall : [5000,3], // 1200 ~ 5000
			itemsTablet: [1200,2], // 640 ~ 1200
			itemsMobile : [640, 1] // 0 ~ 640
		});
	},
	award: function () {
		var $this = this,
			$init = $this.init;

		var award = $('.award');

		var setbg = function () {
			if ( $window.outerWidth() > $window.outerHeight() ) {
				award.addClass('wide');
			} else {
				award.removeClass('wide');
			}
		}
		setbg();

		$window.on('resizeend', { delay : 10 }, function() {
			setbg();
		});

		var chartData = [
		    {
		        "year": "2007",
		        "value": 49
		    },
		    {
		        "year": "2008",
		        "value": 75
		    },
		    {
		        "year": "2009",
		        "value": 52
		    },
		    {
		        "year": "2010",
		        "value": 142
		    },
		    {
		        "year": "2011",
		        "value": 149
		    },
		    {
		        "year": "2012",
		        "value": 246
		    },
		    {
		        "year": "2013",
		        "value": 258
		    },
		    {
		        "year": "2014",
		        "value": 225
		    },
		];

		var chart = AmCharts.makeChart("chartdiv", {
		    "type": "serial",
		    "theme": "dark",
		    "marginRight": 10,
		    "marginLeft": 40,
		    "autoMarginOffset": 20,
		    "mouseWheelZoomEnabled":false,
		    "dataDateFormat": "YYYY",
		    "valueAxes": [{
		        "id": "v1",
		        "axisAlpha": 0,
		        "position": "left",
		        "ignoreAxisWidth":true
		    }],
		    "balloon": {
		        "borderThickness": 1,
		        "shadowAlpha": 0
		    },
		    "graphs": [{
		        "id": "g1",
		        "lineColor": "#ffffff",
		        "balloon":{
		          "drop":true,
		          "adjustBorderColor":false,
		          "color":"#ffffff"
		        },
		        "bullet": "round",
		        "bulletBorderAlpha": 1,
		        "bulletColor": "#FFFFFF",
		        "bulletSize": 5,
		        "lineThickness": 1,
		        "useLineColorForBulletBorder": true,
		        "valueField": "value",
		        "balloonText": "<span style='color:#222;'>[[value]]</span>"
		    }],
		    // "chartScrollbar": {},
		    "chartCursor": {
		        "valueLineEnabled": true,
		        "valueLineBalloonEnabled": true,
		        "cursorAlpha":1,
		        "cursorColor":"#fff",
		        "limitToGraph":"g1",
		        "valueLineAlpha":0.2,
		        "valueZoomable":true,
		        "categoryBalloonDateFormat": "YYYY"
		    },
		    "categoryField": "year",
		    "categoryAxis": {
		        "parseDates": true,
		        "minPeriod": 'YYYY',
		        "dashLength": 3,
		        "minorGridEnabled": true,
		        "minorGridAlpha": 0.1
		    },
		    "export": {
		        "enabled": true
		    },
		    "dataProvider": chartData
		});
		// function zoomChart() {
		//     chart.zoomToDates(new Date(2007, 0), new Date(2015, 0));
		// }
		// chart.addListener("rendered", zoomChart);
	}
});

var $program = {};
$.extend($program, {
	visual: function () {
		var $this = this,
			$init = $this.init;

		var visual = $('#program_visual');

		var setbg = function () {
			if ( $window.outerWidth() > $window.outerHeight() ) {
				visual.addClass('wide');
			} else {
				visual.removeClass('wide');
			}
		}
		setbg();

		$window.on('resizeend', { delay : 10 }, function() {
			setbg();
		});
		$window.on('load scroll resize', function () {
			visual.css({'opacity': 1-0.8*$(window).scrollTop()/$(window).height()});
		});

		visual.find('.items ul').owlCarousel({
			items : 3,
			navigation : true,
			itemsDesktopSmall : [5000,3], // 1200 ~ 5000
			itemsTablet: [1200,2], // 640 ~ 1200
			itemsMobile : [640, 1] // 0 ~ 640
		});
	}
});

var $faq = {};
$.extend($faq, {
	init: function () {
		var $this = this,
			$init = $this.init;

		$init.question = $('.question');

		$init.answer = $('.answer');
		$init.answer.slideUp(0);

		$init.question.click(function () {
			if ( $(this).parent().hasClass('open') ) {
				$faq.close($(this));
			} else {
				$faq.open($(this));
			}
		});
	},
	open: function (obj) {
		var $this = this,
			$init = $this.init;

		obj.parent().addClass('open');
		obj.siblings('.answer').stop().slideDown(400);
	},
	close: function (obj) {
		obj.parent().removeClass('open');
		obj.siblings('.answer').stop().slideUp(400);
	}
});