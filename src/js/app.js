window.addEventListener("load", function () {
  let cardSlider = tns({
      container: '.card-slider',
      loop: false,
      mouseDrag: true,
      swipeAngle: 45,
      autoplay: false,
      controls: false,
      nav: false,
      startIndex: 0,
      responsive: {
          0: {
              edgePadding: 24,
              gutter: 8,
              items: 2
          },
          768: {
              edgePadding: 24,
              gutter: 8,
              items: 3
          },
          1024: {
              edgePadding: 32,
              gutter: 16,
              items: 5
          }
      }
  });

  let cardSlider2 = tns({
      container: '.card-slider-2',
      loop: false,
      mouseDrag: true,
      swipeAngle: 45,
      autoplay: false,
      controls: false,
      nav: false,
      startIndex: 0,
      responsive: {
          0: {
              edgePadding: 24,
              gutter: 8,
              items: 2
          },
          768: {
              edgePadding: 24,
              gutter: 8,
              items: 3
          },
          1024: {
              edgePadding: 32,
              gutter: 16,
              items: 5
          }
      }
  });

  let cardSlider3 = tns({
      container: '.card-slider-3',
      loop: false,
      mouseDrag: true,
      swipeAngle: 45,
      autoplay: false,
      controls: false,
      nav: false,
      startIndex: 0,
      responsive: {
          0: {
              edgePadding: 24,
              gutter: 8,
              items: 2
          },
          768: {
              edgePadding: 24,
              gutter: 8,
              items: 3
          },
          1024: {
              edgePadding: 32,
              gutter: 16,
              items: 5
          }
      }
  });

  let cardSlider4 = tns({
      container: '.card-slider-4',
      loop: false,
      mouseDrag: true,
      swipeAngle: 45,
      autoplay: false,
      controls: false,
      nav: false,
      startIndex: 0,
      responsive: {
          0: {
              edgePadding: 24,
              gutter: 8,
              items: 2
          },
          768: {
              edgePadding: 24,
              gutter: 8,
              items: 3
          },
          1024: {
              edgePadding: 32,
              gutter: 16,
              items: 5
          }
      }
  });

  let cardSlider5 = tns({
      container: '.card-slider-5',
      loop: false,
      mouseDrag: true,
      swipeAngle: 45,
      autoplay: false,
      autoplayButton: false,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
      startIndex: 0,
      responsive: {
          0: {
              edgePadding: 24,
              gutter: 8,
              items: 2
          },
          768: {
              edgePadding: 24,
              gutter: 8,
              items: 3
          },
          1024: {
              edgePadding: 32,
              gutter: 16,
              items: 5
          }
      }
  });
});


window.addEventListener("load", function () {
  let featuredSlider = tns({
      container: '.featured-slider',
      loop: false,
      mouseDrag: true,
      swipeAngle: 45,
      autoplay: true,
      controls: false,
      nav: false,
      startIndex: 0,
      responsive: {
          0: {
              edgePadding: 24,
              gutter: 8,
              items: 1
          },
          768: {
              edgePadding: 24,
              gutter: 8,
              items: 1
          },
          1024: {
              edgePadding: 32,
              gutter: 16,
              items: 2.99
          }
      }
  });
});



// window.addEventListener("load", function () {
//     const swiperFeatured = new Swiper('.featured-carousel .swiper-container', {
//         updateOnWindowResize: true,
//         observer: true,
//         roundLengths: true,
//         grabCursor: true,
//         pagination: {
//             el: '.swiper-pagination',
//             dynamicBullets: true,
//         },
//         initialSlide: 0,
//         spaceBetween: 8,
//         slidesPerView: 1.15,
//         breakpoints: {
//             768: {
//                 slidesPerView: 2.5,
//                 pagination: false,
//                 clickable: true
//             },
//             1024: {
//                 slidesPerView: 3,
//                 pagination: false,
//                 clickable: true
//             }
//         }
//     });

//     const swiperCard = new Swiper('.card-carousel .swiper-container', {
//         updateOnWindowResize: true,
//         observer: true,
//         roundLengths: true,
//         grabCursor: true,
//         freeModeMomentum: true,
//         initialSlide: 0,
//         spaceBetween: 8,
//         slidesPerView: 2.5,
//         breakpoints: {
//             768: {
//                 slidesPerView: 3.5,
//                 pagination: {
//                     el: '.swiper-pagination',
//                     dynamicBullets: true,
//                 },
//                 clickable: true
//             },
//             1024: {
//                 slidesPerView: 5,
//                 pagination: {
//                     el: '.swiper-pagination',
//                     dynamicBullets: true,
//                 },
//                 clickable: true
//             },
//             1366: {
//                 slidesPerView: 6,
//                 pagination: {
//                     el: '.swiper-pagination',
//                     dynamicBullets: true,
//                 },
//                 clickable: true
//             }
//         }
//     });
// });

window.addEventListener("load", function () {
  // store tabs variable
  var myTabs = document.querySelectorAll("ul.nav-tabs > li");
  function myTabClicks(tabClickEvent) {
      for (var i = 0; i < myTabs.length; i++) {
          myTabs[i].classList.remove("active");
      }
      var clickedTab = tabClickEvent.currentTarget;
      clickedTab.classList.add("active");
      tabClickEvent.preventDefault();
      var myContentPanes = document.querySelectorAll(".tab-pane");
      for (i = 0; i < myContentPanes.length; i++) {
          myContentPanes[i].classList.remove("active");
      }
      var anchorReference = tabClickEvent.target;
      var activePaneId = anchorReference.getAttribute("href");
      var activePane = document.querySelector(activePaneId);
      activePane.classList.add("active");
  }
  for (i = 0; i < myTabs.length; i++) {
      myTabs[i].addEventListener("click", myTabClicks)
  }
});
