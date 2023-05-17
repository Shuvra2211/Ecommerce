$(function () {
  // banner js section start
  $('.banner_slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'banner_slider_dots',
    autoplay: true,
    autoplaySpeed:2000,
  });
  // banner js section end

  //   new product js section start
  $('.new_product_slider').slick({
    slidesToShow: 4,
    prevArrow: '<i class="fa-solid fa-chevron-left product_slider_icon"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right product_slider_icon"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
        }
      },
    ]
  });

  // new product js section end

  // deals js saction start
  $('#deal_intro').countdown('2024/10/10', function (event) {
    var $this = $(this).html(event.strftime(''
      + ' '
      + '<div><h3>%d</h3><p>Days</p></div> '
      + '<span>:</span>'
      + '<div><h3>%H</h3><p>Hour</p></div> '
      + '<span>:</span>'
      + '<div><h3>%M</h3><p>Minute</p></div> '
      + '<span>:</span>'
      + '<div><h3>%S</h3><p>Sec</p></div>'));
  });
  // deals js section end

  // offer js section start
  $('.offer_slider').slick({
    arrows: false,
    slidesToShow: 2,
    dots: true,
    dotsClass: 'offer_slider_dots',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        }
      },
      
    ]

  });

  // offer js section end

  // latest js section start
  $('.latest_slider').slick({
    arrows: false,
    slidesToShow: 4,
    dots: true,
    dotsClass: 'latest_slider_dots',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          autoplay:true,
        }
      },
      {
        breakpoint: 518,
        settings: {
          slidesToShow: 2,
          autoplay:true,
        }
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
          autoplay:true,
        }
      },
      
    ]
    
  });
  // latest js section end


  // about page leadership js start


  $('.leadership_product_slider').slick({
    slidesToShow: 4,
    prevArrow: '<i class="fa-solid fa-chevron-left leadership_slider_icon"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right leadership_slider_icon"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          autoplay:true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          autoplay:true,
        }
      },
    ]
  });

  // about page leadership js end

  //about page review Slider start
  $('.about_review_slider').slick({
    arrows: false,
    fade: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: 'about_page_review_slider_dots',
  })

  // $('.about_review_slider_navs').slick({
  //   arrows: false,
  //   slidesToShow: 6,
  //   centerMode: true,
  //   focusOnSelect: true,
  //   asNavFor: '.about_review_slider'
  // })

  //about page review Slider end

  // about page instagram js start
  $('.about_instagram_slider').slick({
    arrows: false,
    slidesToShow: 6,
    dots: true,
    dotsClass: 'about_instagram_slider_dots',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          autoplay:true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          autoplay:true,
        }
      },
      {
        breakpoint: 555,
        settings: {
          slidesToShow: 2,
          autoplay:true,
        }
      }, 
      
    ]
  });

  // about page instagram js end


  // shop details page js section start
  $('.releted_products_slider').slick({
    slidesToShow: 4,
    prevArrow: '<i class="fa-solid fa-arrow-left  releted_products_slider-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right releted_products_slider-arrow"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          autoplay:true,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          autoplay:true,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          autoplay:true,
        }
      },
    ]
  })
  $('.shop_product_item_slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.shop_product_item_small_slider'
  })
  $('.shop_product_item_small_slider').slick({

    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.shop_product_item_slider',
    centerMode: true,
    focusOnSelect: true
  })

//   $('.product_slider').slick({
//     slidesToShow: 4,
//     dots: true,
//     dotsClass: 'banner_dots',
//     prevArrow: '<i class="fa-solid fa-chevron-left product_slider_arrow"></i>',
//     nextArrow: '<i class="fa-solid fa-chevron-right product_slider_arrow"></i>',
// })

})


new VenoBox();





const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))