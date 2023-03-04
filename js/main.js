$(function () { 
	// 좌측 메뉴 on/off
	let sideMenu = $('#sideMenu');
	let openCloseBtn = $('.openCloseBtn');
	openCloseBtn.on('click', () => {
		sideMenu.toggleClass('on')
	})
	
	// 컨텐츠 상단 탭 on/off
	let tabMenuBtns = $('.tabMenu button');
	let tabContBoxItem = $('.tabContBox > section');
	let slickBox = $('.slickBox');

	tabMenuBtns.on('click', (e) => {
		let target = e.currentTarget;
		let idx = $(target).parent().index();

		tabMenuBtns.removeClass('on');
		$(target).addClass('on');

		tabContBoxItem.removeClass('on')
		tabContBoxItem.eq(idx).addClass('on')

		slickBox.slick('setPosition'); // 탭안에 slick 위치 고쳐주기
	})


	// 국내 여행 블로그
	let thumSlide = $('.thumSlide');
	thumSlide.find('.slickBox').not(".slick-initialized").slick({
		arrows: true,
		dots:false,
		draggable:true,
		slidesToShow: 5,
		infinite: true,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 1
				}
			},
		]		
	})
	
	// 100만방문자
	let thumTxtSlide = $('.thumTxtSlide');
	thumTxtSlide.find('.slickBox').not(".slick-initialized").slick({
		arrows: true,
		dots:false,
		draggable:true,
		slidesToShow: 2,
		infinite: true,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 1
				}
			},		
		]
	})

	let slideToon = $('.slideToon')
	slideToon.find('.slickBox').not(".slick-initialized").slick({
		centerMode: true,
		arrows: true,
		dots:false,
		draggable:true,
		slidesToShow: 1,
		infinite: true,
		centerPadding: '18.5774%',		
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					dots: true,
					arrows: true,
				}
			},		
		]		
	})

	let winW;
	$(window).on('load resize', function () { 
		winW = $(window).width();
		if (winW <= 1280) { 
			let slideToonDots = $('.slideToon .slick-dots');
			let dotslin = slideToonDots.find('li').length;
			let slideToonDotsW = 14 * dotslin + (14 * (dotslin - 1));
			let slideToonPrev = slideToon.find('.slick-prev');
			let slideToonNext = slideToon.find('.slick-next');
			slideToonPrev.css({
				left: `calc(50% - ${slideToonDotsW}px - 30px)`
			})
			slideToonNext.css({
				right: `calc(50% - ${slideToonDotsW}px - 30px)`
			})
		}
	})

	let m_MenuBtn = $('.m_MenuBtn');
	let dim = $('.dim');
	let sideMenuClose = sideMenu.find('.closeBtn');
	m_MenuBtn.on('click', sideMenuOn)
	sideMenuClose.on('click', sideMenuOff)
	dim.on('click', sideMenuOff)

	function sideMenuOn() { 
		dim.stop().fadeIn();
		sideMenu.stop().animate({
			left: 0
		})
	}

	function sideMenuOff() { 
		dim.stop().fadeOut();
		sideMenu.stop().animate({
			left: `-100%`
		})
	}


})
