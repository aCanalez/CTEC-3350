//Date 03.26.2019

$(function () {
    const navigationToggler = $(".navbar-toggler");
    const mainNavigation = $("#navigation");

    navigationToggler.on("click", function () {
        mainNavigation.toggleClass("open");
    });

});