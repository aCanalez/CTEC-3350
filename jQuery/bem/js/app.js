//Date: 03.19.2019
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

    /*
    FAQ Component
    1.- ALL FAQ descriptions must be closed
    2.- When user clicks title the description will show if it is closed
    2.- ... will close if it is open
     */

    const faqControl = $(".faq-control li");
    let faqDescription = $(".faq-description");

    faqControl.on("click", function () {
        let control = $(this).attr("class");

        if (control === "open-faq") {
            faqDescription.show();
        } else if (control === "close-faq") {
            faqDescription.hide();
        }
    });


    const faqTitle = $(".faq-title");

    faqTitle.on("click", function () {
        let faqDescription = $(this).closest(".faq-item").find(".faq-description");
        faqDescription.toggle();
    })

});

