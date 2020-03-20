
$(document).ready(function () {
	var owl = $('#demos');
	owl.owlCarousel({
		margin: 0,
		nav: true,
		loop: false,
		autoplay: 3000,
		lazyLoad: true,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 2
			},
			479: {
				items: 2
			},
			767: {
				items: 3
			},
			991: {
				items: 5
			}
		}
	})

	var owl2 = $('#demos2,#demos4');
	owl2.owlCarousel({
		margin: 0,
		nav: true,
		loop: false,
		autoplay: 3000,
		lazyLoad: true,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 2
			},
			479: {
				items: 2
			},
			767: {
				items: 3
			},
			991: {
				items: 4
			}
		}
	})

	var owl3 = $('#demos3,#demos5');
	owl3.owlCarousel({
		margin: 0,
		nav: true,
		loop: true,
		autoplay: 3000,
		lazyLoad: true,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			479: {
				items: 2
			},
			767: {
				items: 3
			},
			991: {
				items: 4
			}
		}
	})

})