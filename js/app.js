// Slider IN MIDDLE BOX =========================================================================

$(document).ready(function () {
  $('.slider_container').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    draggable: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: false,
        }
      }
    ]
  });
});

// MAIN - SLIDER =============================================================================================

  $(document).ready(function(){
    $('.wraper-container-slick').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      // dots:$(".slick-dots > li:nth-child(3)").css('color' , 'red'),
      prevArrow: $('.prev-block'),
      nextArrow: $('.next-block'),
      appendDots: $('.right_inner'),
      draggable: false,

    });
  });
  

// BURGER_MENU ==================================================================================

$(".button-burger").click(function () {
    $(this).closest(".header").toggleClass("active");
});

// POP UP      =============================================================================
// open pop-up ==============================

$('.request_btn').click(function () { 
    $(".inner_request").show()
});
// close pop-up =============================
$('.up_img > img').click(function () { 
    $(".inner_request").hide()
});

//TABS ==========================================================================
const tabsBtn   = document.querySelectorAll(".tabs__nav-btn")
const tabsItems = document.querySelectorAll(".tabs__item")

tabsBtn.forEach(onTabClick);
// главная function
function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId)

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active')
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active')
            });
    
            currentBtn.classList.add('active')
            currentTab.classList.add('active')
        }
    });
}

document.querySelector('.tabs__nav-btn').click()

//TABS - END ==========================================================================

// POP-UP in slider Additional Information ===================================================================
$('.btn-in-item').click(function () {
  $('.inner_btn_slider').css('display', 'none')
  $(".inner_popUp_detail").css('display', 'flex')
  $(".inner_popUp_detail").show()
});

$('.header_window > img').click(function () {
  $('.inner_btn_slider').css('display', 'flex')
    $(".inner_popUp_detail").hide()
});

// Control iNPUT VUE =======================================================================================
// Vue.createApp({
//   data: () => ({
//   placeOne: 'Ваше имя',
//   placeTwo: 'Номер телефона',
//   inputValueName: '',
//   inputValueNum: '',
//   }),
//   methods: {
//     sendInfo() {
//       if (this.inputValueName !== '' && this.inputValueNum !== '') {
//         // let a = inputValueName + inputValueNum
//         console.log('a');
//       }
//     }
    
//   },
//     watch: {
//     inputValueName(value) {
//       console.log('input value' ,value);
//     }
//   }

// }).mount('.inner_input')


//Input control wrapper_contacts==============================================
// Vue.createApp({
//   data: () => ({
//   placeOn: 'Ваше имя',
//   placeTw: 'Номер телефона',
  
//   }),

// }).mount('.under_block_contacts')



// ===========================================================================================

