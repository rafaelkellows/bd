$(function(){ 
	(function() {
		var bedoo = {
	        init: function() {
	        	this.loading();
	            this.menu();
	            this.carrossel();
	            this.channels();
	            this.toTop();
	            this.chn_events();
	            this.bets();
	        },
	        loadJson : function () {
	        	//if(!$.cookie("lang")) return;
				$.ajax({
					url : '../js/....js',
					dataType : 'json',
					success : function(json) { 
						console.log('Foi ' + json[0].home.highlight);
						bedoo.loadJsonContent();
					},
					error : function(r) { 
						console.log('Deu Erro');
					}
				});
	        },
	        loadJsonContent : function (argument) {
	        	
	        },
	        loading : function(){
	        	$(window).load(function(){
					$('.loading').removeClass('active');
	        	});
	        },
	        menu: function() {
				/*if (document.documentElement.clientWidth < 480) { 
					document.querySelector("meta[name=viewport]").setAttribute('content','width=device-width, initial-scale=0.69, maximum-scale=1.0, user-scalable=0');
				}*/
	        	$('main header nav a.menu').click(function(){
	        		$('main header nav.menu').fadeIn('fast',function(){
	        			$('main header nav.menu a.close').click(function(){
	        				$('main header nav.menu').fadeOut('fast');
	        			});
	        		});
	        	});
	        },
	        chn_events : function(){
	        	$('main section.channels ul li a').click(function(){
	        		var _chn = $(this).attr('for');
	        		$('main section.channels ul li').removeClass('active');
	        		$(this).parent().addClass('active');
					$('main section.bets').addClass('active').find('article').removeClass('active');
					$('main section.bets article').removeClass('active');
					$('main section.bets article#cont_'+_chn).addClass('active');
	        	});
	        	$('main section.bets article').addClass('active');
	        },
	        bets : function(){
        		var _s;
	        	$('main section.bets article ul.body ul.r-colm li a').click(function(){
	        		$(this).addClass('active');
	        		$('.bets_msgs').click(function(){
	        			clearTimeout(_s); $(this).removeClass('active');
	        		}).addClass('active').find('dd').html( eval($('.bets_msgs dd').html()) + 1 );

	        		clearTimeout(_s);
	        		_s = setTimeout(function(){
	        			$('.bets_msgs').removeClass('active');
	        			clearTimeout(_s);
	        		},3000);
	        	});
	        },
	        toTop : function(elem){
		        var offset = 1;
		        var duration = 500;
		        jQuery(window).scroll(function() {

					if( $(window).width() > 480 ){ //&& $(window).width() > 1024 
						if( jQuery(this).scrollTop() >= 150){
							$('main').addClass('fix_level2').find('section.channels, section.bets').addClass('fixed');
						}else{
							$('main').removeClass('fix_level2').find('section.channels, section.bets').removeClass('fixed');
						}
					}else{
						if( jQuery(this).scrollTop() >= 99){
							$('main').addClass('fix_level2').find('section.channels, section.bets').addClass('fixed');
						}else{
							$('main').removeClass('fix_level2').find('section.channels, section.bets').removeClass('fixed');
						}
					}

				});
	        },
	        carrossel: function() {
				var owl = $("section.carrossel > div"); 
				if(!owl.length) return -1;
				owl.owlCarousel({
					autoplay:true,
					smartSpeed: 1200,
				    loop:true,
				    margin:0,
				    nav:false,
				    responsive:{
				        0:{
				            items:1
				        },
				        640:{
				            items:2
				        }
				    },
					autoPlay:5000
				}); 
	        },
	        channels: function() {
				var owlChn = $("section.channels > div > ul"); 
				if(!owlChn.length) return -1;
				owlChn.owlCarousel({
				    loop:true,
				    autoWidth:true,
				    nav:false,
				    dots:false,
				    responsive:{
				        0:{
				            items:5
				        },
				        375:{
				            items:6
				        },
				        768:{
				            items:9
				        }
				    }
				}); 
	        }
    	}
		bedoo.init();
	})();
});