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
		responsive: [
			{
				breakpoint: 1281,
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
		responsive: [
			{
				breakpoint: 1281,
				settings: {
					slidesToShow: 1
				}
			},		
		]
	})

	let slideToon = $('.slideToon')
	let slideToonSlick = slideToon.find('.slickBox')
	let slideToonDots = slideToon.find('.slick-dots')

	slideToon.find('.item').each(function () { 
		slideToonDots.append('<li><button></button></li>')
	})

	let slideToonDotsLi = slideToonDots.find('li')
	slideToonDotsLi.eq(0).addClass('slick-active');

	slideToonSlick.not(".slick-initialized").slick({
		centerMode: true,
		arrows: false,
		dots:false,
		draggable:true,
		slidesToShow: 1,
		centerPadding: '18.5774%',		
		responsive: [
			{
				breakpoint: 1281,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				}
			},		
		]		
	})

	slideToon.find('.slick-prev').click(function(){
		slideToonSlick.slick('slickPrev');
	});
	
	slideToon.find('.slick-next').click(function(){
		slideToonSlick.slick('slickNext');
	});

	slideToonSlick.on('beforeChange', function(event, _ref, currentSlide, nextSlide){
		console.log(_ref)
		slideToonDotsLi.removeClass('slick-active')
		slideToonDotsLi.eq(nextSlide).addClass('slick-active')
	});

	slideToonDotsLi.on('click', function () { 
		let idx = $(this).index();
		slideToonSlick.slick('slickGoTo', idx);
	})


	// 모바일 메뉴
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
