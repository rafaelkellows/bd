$(function(){ 
	(function() {
		var bedoo = {
	        init: function() {
	            this.carrossel();
	            this.channels();
	            this.toTop();
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
	        menu: function() {
        		var _opnd, _c;
	        	$('main header nav.menu a').unbind('click').unbind('hover').click(function(){
	        		//To Full Screen Mode
	        		if($(this).hasClass('s_fullscreen')){
	        			if( $('html').hasClass('full') ){
	        				$('html').removeClass('full');
	        				$.cookie("fullscreen", false, {expires:1, path:"/"});
	        			}else{
	        				$('html').addClass('full');
	        				$.cookie("fullscreen", true, {expires:1, path:"/"});
	        			}
						$("section.carrossel > div").data('owlCarousel').destroy();
						setTimeout(function(){bedoo.carrossel();},500);
	        		}
	        		// less than 600 pixels width
	        		if( $(window).width() <= 600 ){
	        			$('main header nav.s_menu, main header nav.s_language, main header nav.s_navg, main header nav.s_acesso').hide();
	        			
	        			if( $(this).hasClass('active') ){
			        		$(this).removeClass('active');
			        		return;
		        		}else{
			        		$('main header nav a').removeClass('active');
			        		$(this).addClass('active');
							$('main header nav.'+$(this).attr('data-menu')).show();
		        		}
	        		}
	        	}).hover(
	        		function(){	        			
	        			if( $(window).width() > 600 ){
		        			clearInterval(_c);
		        			$('main header nav.s_menu, main header nav.s_language, main header nav.s_navg, main header nav.s_acesso').hide();
			        		$('main header nav a').removeClass('active');
		        			$('main header nav.'+$(this).attr('data-menu')).show();
	        				$(this).addClass('active');
        				}
	        		},
	        		function(){
	        			if( $(window).width() > 600 ){
		        			_c = setInterval(function(){
				        		$('main header nav a').removeClass('active');
		        				$('main header nav.s_menu, main header nav.s_language, main header nav.s_navg, main header nav.s_acesso').hide();
		        			}, 500);
	        			}
	        		}
	        	);
	        	$('main header nav').not('.menu').hover(
	        		function(){ 
	        			$(this).find('a').hover(function(){$(this).addClass('active');},function(){$(this).removeClass('active');})
	        			if( $(window).width() > 600 ){
	        				clearInterval(_c);
	        			}
	        		},
	        		function(){
	        			if( $(window).width() > 600 ){
		        			_c = setTimeout(function(){
		        				$('main header nav.s_menu, main header nav.s_language, main header nav.s_navg, main header nav.s_acesso').hide();
								$('main header nav a').removeClass('active');
		        			}, 500);
	        			}
	        		}
	        	)
	        },
	        bets : function(){
        		var _s;
	        	$('main section.alive_bets article ul.body ul.r-colm li a').click(function(){
	        		$(this).addClass('active');
	        		$('.bets_msgs').click(function(){
	        			clearTimeout(_s); $(this).removeClass('open');
	        		}).addClass('open').find('dd').html( eval($('.bets_msgs dd').html()) + 1 );

	        		clearTimeout(_s);
	        		_s = setTimeout(function(){
	        			$('.bets_msgs').removeClass('open');
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
							$('main').addClass('fix_level2').find('section.channels').addClass('fixed');
						}else{
							$('main').removeClass('fix_level2').find('section.channels').removeClass('fixed');
						}
					}else{
						if( jQuery(this).scrollTop() >= 99){
							$('main').addClass('fix_level2').find('section.channels').addClass('fixed');
						}else{
							$('main').removeClass('fix_level2').find('section.channels').removeClass('fixed');
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
				        600:{
				            items:1
				        },
				        1000:{
				            items:1
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