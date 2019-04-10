/*
Mandatory rotating banner
*/

$(function () {
    //Document ready will wait until the HTML is loaded before running the Javascript

    /*
    1 - Listen for rotating banner controls
    2 - Follow control direction
    3 - If on last slide and user clicks next move to fist slide
    4 - If on first slide and user clicks previous move to last slide
    5 - Listen for pagination clicks and direct users accordingly
     */

    let heroControl = $(".hero-control");
    let heroSlidesCount = $(".hero-slide").length - 1;
    let pagination = $(".hero-indicators li");

    heroControl.on("click", function () {
        let heroControlDirection = $(this).attr("data-slide");
        let currentHeroSlide = $(".hero-slide.active").index();
        let nextSlide;


        if (heroControlDirection === "next") {
            nextSlide = currentHeroSlide + 1;
        } else {
            nextSlide = currentHeroSlide - 1;
        }

        if (nextSlide < 0) {
            nextSlide = heroSlidesCount;
        } else if (nextSlide > heroSlidesCount) {
            nextSlide = 0;
        }
        console.log(nextSlide);
        slider(currentHeroSlide, nextSlide);
    });

    function slider(current, next) {
        $(".hero-slide").eq(current).removeClass("active");
        $(".hero-slide").eq(next).addClass("active");
        pagination.eq(current).removeClass("active");
        pagination.eq(next).addClass("active");
    }

    pagination.on("click", function () {
        let nextPagination = $(this).index();
        let previousPagination = $(".hero-indicators li.active").index();

        if (previousPagination !== nextPagination) {
            slider(previousPagination, nextPagination)
        } else {
        }
    });

    let automatic;

    $(".start").on("click", function () {
        automatic = setInterval(autoRotate, 2000);
        function autoRotate() {
            $(".hero-control-next").trigger("click");
        }
    });

    $(".stop").on("click", function () {
        clearInterval(automatic);
    })

});