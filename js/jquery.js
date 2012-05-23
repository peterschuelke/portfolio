function pageSlide() {
		
		$('.home').click(function(){
			if($('#home_page:visible').length>0){return};
			$('.slide:visible').css('z-index','10').animate({top:'1500px', marginBottom:'-1500px'},1000, function(){
				$(this).hide().css('z-index','0');
				$('#home_page').css('z-index','10');
				$('.home').addClass('homehighlight');
			});
			$('.portfolio, .skills, .about, .contact').removeClass('contacthighlight portfoliohighlight skillshighlight abouthighlight');
			$('#home_page').css('top','0px').css({'top':'0px','marginBottom':'0px'}).show();
		})
		
		$('.portfolio').click(function(){
			if($('#portfolio_page:visible').length>0){return};
			$('.slide:visible').css('z-index','10').animate({top:'1500px', marginBottom:'-1500px'},1000, function(){
				$(this).hide().css('z-index','0');
				$('#portfolio_page').css('z-index','10');
				$('.portfolio').addClass('portfoliohighlight');
			});
			$('.home, .skills, .about, .contact').removeClass('homehighlight contacthighlight skillshighlight abouthighlight');
			$('#portfolio_page').css({'top':'0px','marginBottom':'0px'}).show();
		})
		
		$('.about').click(function(){
			if($('#about_page:visible').length>0){return};
			$('.slide:visible').css('z-index','10').animate({top:'1500px', marginBottom:'-1500px'},1000, function(){
				$(this).hide().css('z-index','0');
				$('#about_page').css('z-index','10');
				$('.about').addClass('abouthighlight');
			});
			$('.portfolio, .skills, .home, .contact').removeClass('homehighlight portfoliohighlight skillshighlight contacthighlight');
			$('#about_page').css({'top':'0px','marginBottom':'0px'}).show();
		})
		
		$('.skills').click(function(){
			if($('#skills_page:visible').length>0){return};
			$('.slide:visible').css('z-index','10').animate({top:'1500px', marginBottom:'-1500px'},1000, function(){
				$(this).hide().css('z-index','0');
				$('#skills_page').css('z-index','10');
				$('.skills').addClass('skillshighlight');
			});
			$('.portfolio, .home, .about, .contact').delay(500).removeClass('homehighlight portfoliohighlight contacthighlight abouthighlight');
			$('#skills_page').css({'top':'0px','marginBottom':'0px'}).show();
		})
		
		$('.contact').click(function(){
			if($('#contact_page:visible').length>0){return};
			$('.slide:visible').css('z-index','10').animate({top:'1500px', marginBottom:'-1500px'},1000, function(){
				$(this).hide().css('z-index','0');
				$('#contact_page').css('z-index','10');
				$('.contact').addClass('contacthighlight');
			});
			$('.portfolio, .skills, .about, .home').removeClass('homehighlight portfoliohighlight skillshighlight abouthighlight');
			$('#contact_page').css({'top':'0px','marginBottom':'0px'}).show();
		})
	};

	
function bookAssemble() {
		orgin = pageArray[0];
			leftMargin =[];
			rightMargin = [];
			topMarginChange = [];
			leftTabHeight =[];
			rightTabHeight =[];
			mainLeftFlipped = [];
			bindLeftFlipped = [];
			mainRightFlipped = [];
			bindRightFlipped = [];
			mainLeftShow = [];
			bindLeftShow = [];
			mainRightShow = [];
			bindRightShow = [];

			for (var p in pageArray){
				leftMargin.push(p);
				rightMargin.push(p);
				topMarginChange.push(p);
				leftTabHeight.push(p);
				rightTabHeight.push(p);
				mainLeftFlipped.push(p);
				bindLeftFlipped.push(p);
				mainRightFlipped.push(p);
				bindRightFlipped.push(p);
				mainLeftShow.push(p);
				bindLeftShow.push(p);
				mainRightShow.push(p);
				bindRightShow.push(p);

			};
		
		for (var p in pageArray){
			leftTabHeight[p] = parseFloat(p) *100;
			leftMargin[p]= (pageArray.length-parseFloat(p)-1)/2;
			rightMargin[p]=parseFloat(p)/2;
			topMarginChange[p]= ((leftMargin[p])-((parseFloat(p)+1)/2))/2;
			
			mainRightFlipped[p] = document.createElement('style');
			mainRightFlipped[p].type ='text/css';
			mainRightFlipped[p].innerHTML ='.'+pageArray[p]+'.right.main {transform: translate('+(-(rightMargin[p]+13))+'px, '+(-topMarginChange[p])+'px) scaleX(0) !important; -moz-transform:translate('+(rightMargin[p]+13)+'px, '+(-topMarginChange[p])+'px) scaleX(0) !important; -ms-transform:translate('+(-(rightMargin[p]+13))+'px, '+(-topMarginChange[p])+'px) scaleX(0) !important; -o-transform:translate('+(-(rightMargin[p]+13))+'px, '+(-topMarginChange[p])+'px) scaleX(0) !important; -webkit-transform:translate('+(-(rightMargin[p]+13))+'px, '+(-topMarginChange[p])+'px) scaleX(0) !important; z-index:10;}';
			
			
			bindRightFlipped[p] =$('<style> .'+pageArray[p]+'.right.bind {transform: translate('+(-(rightMargin[p]+7))+'px, '+(-topMarginChange[p])+'px) scaleX(0) !important; -moz-transform:translate('+(-(rightMargin[p]+7))+'px, '+(-topMarginChange[p])+'px) scaleX(0) !important; -ms-transform:translate('+(-(rightMargin[p]+7))+'px, '+(-topMarginChange[p])+'px) scaleX(0) !important; -o-transform:translate('+(-(rightMargin[p]+7))+'px, '+(-topMarginChange[p])+'px) scaleX(0) !important; -webkit-transform:translate('+(-(rightMargin[p]+7))+'px, '+(-topMarginChange[p])+'px) scaleX(0) !important; z-index:1;}</style>');
			mainLeftFlipped[p] =$('<style> .'+pageArray[p]+'.left.main {transform: translate('+(leftMargin[p]+26)+'px, '+(topMarginChange[p])+'px) scaleX(0) !important; -moz-transform:translate('+(leftMargin[p]+26)+'px, '+(topMarginChange[p])+'px) scaleX(0) !important; -ms-transform:translate('+(leftMargin[p]+26)+'px, '+(topMarginChange[p])+'px) scaleX(0) !important; -o-transform:translate('+(leftMargin[p]+26)+'px, '+(topMarginChange[p])+'px) scaleX(0) !important; -webkit-transform:translate('+(leftMargin[p]+26)+'px, '+(topMarginChange[p])+'px) scaleX(0) !important; z-index:10 !important;}</style>');
			bindLeftFlipped[p] =$('<style> .'+pageArray[p]+'.left.bind {transform: translate('+(leftMargin[p]+5)+'px, '+(topMarginChange[p])+'px) scaleX(0) !important; -moz-transform:translate('+(leftMargin[p]+5)+'px, '+(topMarginChange[p])+'px) scaleX(0) !important; -ms-transform:translate('+(leftMargin[p]+5)+'px, '+(topMarginChange[p])+'px) scaleX(0) !important; -o-transform:translate('+(leftMargin[p]+5)+'px, '+(topMarginChange[p])+'px) scaleX(0) !important; -webkit-transform:translate('+(leftMargin[p]+5)+'px, '+(topMarginChange[p])+'px) scaleX(0) !important; z-index:1;}</style>');
			mainRightShow[p] =$('<style> .'+pageArray[p]+'.right.main {transform: translate('+(rightMargin[p])+'px, 0px) scaleX(1) !important; -moz-transform:translate('+(rightMargin[p])+'px, 0px) scaleX(1) !important; -ms-transform:translate('+(rightMargin[p])+'px, 0px) scaleX(1) !important; -o-transform:translate('+(rightMargin[p])+'px, 0px) scaleX(1) !important; -webkit-transform:translate('+(rightMargin[p])+'px, 0px) scaleX(1) !important;}</style>');
			bindRightShow[p] =$('<style> .'+pageArray[p]+'.right.bind {transform: translate('+(rightMargin[p])+'px, 0px) scaleX(1) !important; -moz-transform:translate('+(rightMargin[p])+'px, 0px) scaleX(1) !important; -ms-transform:translate('+(rightMargin[p])+'px, 0px) scaleX(1) !important; -o-transform:translate('+(rightMargin[p])+'px, 0px) scaleX(1) !important; -webkit-transform:translate('+(rightMargin[p])+'px, 0px) scaleX(1) !important;}</style>');
			mainLeftShow[p] =$('<style> .'+pageArray[p]+'.left.main {transform: translate('+(leftMargin[p])+'px, 0px) scaleX(1) !important; -moz-transform:translate('+(leftMargin[p])+'px, 0px) scaleX(1) !important; -ms-transform:translate('+(leftMargin[p])+'px, 0px) scaleX(1) !important; -o-transform:translate('+(leftMargin[p])+'px, 0px) scaleX(1) !important; -webkit-transform:translate('+(leftMargin[p])+'px, 0px) scaleX(1) !important;z-index:1;}</style>');
			bindLeftShow[p] =$('<style> .'+pageArray[p]+'.left.bind {transform: translate('+(leftMargin[p])+'px, 0px) scaleX(1) !important; -moz-transform:translate('+(leftMargin[p])+'px, 0px) scaleX(1) !important; -ms-transform:translate('+(leftMargin[p])+'px, 0px) scaleX(1) !important; -o-transform:translate('+(leftMargin[p])+'px, 0px) scaleX(1) !important; -webkit-transform:translate('+(leftMargin[p])+'px, 0px) scaleX(1) !important; z-index:1;}</style>');

		};
		
		
		for (var p in pageArray){
			
			
			
			$('.'+pageArray[p]+'.left.main').addClass('flip_left');
			$('.'+pageArray[p]+'.left.main').css({'background':'url("images/book_left_main.png") no-repeat','background-position': ' 0px 42px','margin':'-'+leftMargin[p]+'px 0 0 '+(42-leftMargin[p])+'px','z-index':'10'});
			$('.'+pageArray[p]+'.left.bind').addClass('flip_left');
			$('.'+pageArray[p]+'.left.bind').css({'margin':'-'+leftMargin[p]+'px 0 0 '+(481-leftMargin[p])+'px'});
			
			$('.'+pageArray[p]+'.right.main').addClass('flip_right');
			if (p == 0){
				
				$('.'+pageArray[p]+'.right.main').css({'background':'url("images/book_right_main.png") no-repeat','background-position':'42px 42px','margin':'-'+rightMargin[p]+'px 0 0 '+(rightMargin[p]+490)+'px'});
			} else{
				
				$('.'+pageArray[p]+'.right.main').css({'background':'url("images/book_right_main.png") no-repeat','background-position':'42px 42px','margin':'-'+rightMargin[p]+'px 0 0 '+(rightMargin[p]+490)+'px','z-index':'10'});
				document.getElementsByTagName('head')[0].appendChild(mainRightFlipped[p]);

				$('.'+pageArray[p]+'.right.bind').append(bindRightFlipped[p]);
			};
			
			$('.'+pageArray[p]+'.right.bind').addClass('flip_right');
			$('.'+pageArray[p]+'.right.bind').css({'margin':'-'+rightMargin[p]+'px 0 0 '+(rightMargin[p]+514)+'px'});

			$('.'+pageArray[p]+'.left.main h3').css({'background':'url("images/snake_tab_rotate.png") no-repeat','background-position': '0px 0px','margin':(leftTabHeight[p]-leftMargin[p]+67.5)+'px 0 0 -77.5px'});
			$('.'+pageArray[p]+'.right.main h3').css({'background':'url("images/snake_tab_rotate_flip.png") no-repeat','background-position':'0px 0px','margin':(leftTabHeight[p]-100-leftMargin[p]+81)+'px 0 0 445px'});
			
		};
	};

	
	
function bookTurn() {

		$('#portfolio_book .left h3').click(function(){
			var selected = $(this).parent().attr("class").split(" ");
			selected= selected[0];
			if (orgin == selected){
				console.log('stopped');
				return
			};
			for (var p in pageArray){
				if (pageArray[p] == orgin ){
					var startPage = parseFloat(p);
				}
				if (pageArray[p] == selected){
					var endPage = parseFloat(p);
				}
			};
			var i=startPage;
			doFlip = function(){
				$('.'+pageArray[i]+'.left.main').append(mainLeftFlipped[i]);
				$('.'+pageArray[i]+'.left.bind').append(bindLeftFlipped[i]);
				i++;
				if (i == endPage){
					clearInterval( interval ) ;
				};
			};
			var interval = setInterval ( "doFlip()", 200 );
			
			setTimeout(function(){
				var j=startPage;
				endFlip = function(){
					$('.'+pageArray[j+1]+'.right.main').append(mainRightShow[j+1]);
					$('.'+pageArray[j+1]+'.right.bind').append(bindRightShow[j+1]);
					j++;
					if (j == endPage){
						clearInterval( interval2 ) ;
					};
				};
				var interval2 = setInterval ( "endFlip()", 200 );
			},1000);
			
			setTimeout(function(){
				var k=startPage;
				fixFlip = function(){
					$('.'+pageArray[k]+'.right.main').append('<style> .'+pageArray[k]+'.right.main {z-index:1;}</style>');
					k++;
					if (k == endPage){
						clearInterval( interval3 ) ;
					};
				};
				var interval3 = setInterval ( "fixFlip()", 200 );
			},2000);
			orgin = selected;
		});
		
		$('#portfolio_book .right h3').click(function(){
			
			var selected = $(this).parent().prev().prev().attr("class").split(" ");
			selected= selected[0];
			if (orgin == selected){
				console.log('stopped');
				return
			};
			for (var p in pageArray){
				if (pageArray[p] == orgin ){
					var startPage = parseFloat(p);
				}
				if (pageArray[p] == selected){
					var endPage = parseFloat(p);
				}
			};
			var i=startPage;
			doFlip2 = function(){
				//$('.'+pageArray[i]+'.right.main').css({'z-index':'10'});
				$('.'+pageArray[i]+'.right.main').append(mainRightFlipped[i]);
				$('.'+pageArray[i]+'.right.bind').append(bindRightFlipped[i]);
				
				i--;
				if (i == endPage){
					clearInterval( interval ) ;
				};
			};
			var interval = setInterval ( "doFlip2()", 200 );
			
			setTimeout(function(){
				var j=startPage;
				endFlip2 = function(){
					$('.'+pageArray[j-1]+'.left.main').append(mainLeftShow[j-1]);
					$('.'+pageArray[j-1]+'.left.bind').append(bindLeftShow[j-1]);
					j--;
					if (j == endPage){
						clearInterval( interval2 ) ;
					};
				};
				var interval2 = setInterval ( "endFlip2()", 200 );
			},1000);
			
			setTimeout(function(){
				var k=startPage;
				fixFlip2 = function(){
					$('.'+pageArray[k]+'.left.main').attr('z-index','1');
					k--;
					if (k == endPage){
						clearInterval( interval3 ) ;
					};
				};
				var interval3 = setInterval ( "fixFlip2()", 200 );
			},2000);
			orgin = selected;
		});

	};

