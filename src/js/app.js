$('.owl-carousel-card').owlCarousel({
    lazyLoad: true,
    stagePadding: 24,
    loop: false,
    margin: 10,
    nav: false,
    responsive:{
        0: {
            stagePadding: 24,
            margin: 8,
            items: 2
        },
        768: {
            stagePadding: 24,
            margin: 12,
            items: 3
        },
        1024: {
            stagePadding: 32,
            margin: 16,
            items: 5
        }
    }
})



$('.owl-carousel-featured').owlCarousel({
    lazyLoad: true,
    stagePadding: 24,
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            stagePadding: 24,
            margin: 8,
            items: 1
        },
        768: {
            stagePadding: 24,
            margin: 12,
            items: 1
        },
        1024: {
            stagePadding: 32,
            margin: 16,
            items: 2.99
        }
    }
})


window.addEventListener("load", function () {
    $(".search-open").click(function () {
        $(".advanced-search").toggleClass("toggled")
    }),
        $(".search-close").click(function () {
            $(".advanced-search").toggleClass("toggled")
        })
});


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