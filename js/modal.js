$(function(){
    $('.banner>.index').poptrox(
        {preload: true,
        overlayColor: '#000000',
        overlayOpacity: 0.6,
        popupCloserText: '',
        popupLoaderText: '',
        usePopupCloser: false,
		usePopupNav: true,
		windowMargin: 50,
        popupSpeed: 300,
        }
    );
    $('.card>.index').poptrox(
        {preload: true,
        overlayColor: '#000000',
        overlayOpacity: 0.6,
        popupCloserText: '',
        popupLoaderText: '',
        usePopupCloser: false,
        usePopupNav: true,
        windowMargin: 50,
        popupSpeed: 300,}
    );
    $('.ci>.index').poptrox(
        {preload: true,
        overlayColor: '#000000',
        overlayOpacity: 0.6,
        popupCloserText: '',
        popupLoaderText: '',
        usePopupCloser: false,
		usePopupNav: true,
		windowMargin: 50,
        popupSpeed: 300,
        }
    );
    $('.etc>.index').poptrox(
        {preload: true,
        overlayColor: '#000000',
        overlayOpacity: 0.6,
        popupCloserText: '',
        popupLoaderText: '',
        usePopupCloser: false,
		usePopupNav: true,
		windowMargin: 50,
        popupSpeed: 300,
        }
    );
    var fo = $('.index_mob');
    fo.poptrox(
        {overlayColor: '#000000',
        overlayOpacity: 0.6,
        popupCloserText: '',
        popupLoaderText: '',
        usePopupCloser: false,
		usePopupNav: true,
		windowMargin: 50,
        popupSpeed: 300,
        }
    );
    $('.poptrox-overlay').appendTo('.pop');
});