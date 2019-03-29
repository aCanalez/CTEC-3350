//Date: 03.26.2019
$(function () {
    /*
        1.- Listen for Navbar toggle to be clicked
        2.- If navigation is closed - open
        3.- If navigation is open - close

     */

    const navigationToggler = $(".navbar-toggler");
    const mainNavigation = $("#navigation");

    navigationToggler.on("click", function () {
        //alert("Hello world!");
        mainNavigation.toggleClass("open");
    });

});