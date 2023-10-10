$(window).on("load", function () {

    AOS.init({
        debounceDelay: 200, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 399, // the delay on throttle used while scrolling the page (advanced)
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
      
      });
    // Slider Component
    if ($(".designpeer-slider-wrapper").length > 0) {
        $(".designpeer-slider-wrapper").each(function () {
            let $this = $(this),
                $thisID = $this.attr("id"),
                $data_space_desktop = ($this.data("space-desktop") !== undefined) ? $this.data("space-desktop") : 0,
                $data_space_tablet = ($this.data("space-tablet") !== undefined) ? $this.data("space-tablet") : 0,
                $data_space_mobile = ($this.data("space-mobile") !== undefined) ? $this.data("space-mobile") : 0,
                $items_desktop = ($this.data("items-desktop") !== undefined) ? $this.data("items-desktop") : 1,
                $items_tablet = ($this.data("items-tablet") !== undefined) ? $this.data("items-tablet") : 1,
                $items_mobile = ($this.data("items-mobile") !== undefined) ? $this.data("items-mobile") : 1,
                $auto_speed = ($this.data("autoplay-speed") !== undefined) ? $this.data("autoplay-speed") : 500000,
                $loop = ($this.data("loop") !== undefined) ? true : false,
                $free = ($this.data("freemode") !== undefined) ? true : false,
                $center = ($this.data("centered") !== undefined) ? true : false;
            let swiper = new Swiper("#" + $thisID, {
                loop: $loop,
                centeredSlides: $center,
                freeMode: $free,
                autoplay: {
                    delay: $auto_speed,
                    disableOnInteraction: true,
                },
                navigation: {
                    nextEl: `#${$thisID} .designpeer-slide-next`,
                    prevEl: `#${$thisID} .designpeer-slide-prev`,
                },
                pagination: {
                    el: `#${$thisID} .designpeer-slide-pagination`,
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: $items_mobile,
                        spaceBetween: $data_space_mobile
                    },
                    757: {
                        slidesPerView: $items_tablet,
                        spaceBetween: $data_space_tablet
                    },
                    1024: {
                        slidesPerView: $items_desktop,
                        spaceBetween: $data_space_desktop
                    }
                }
            });
        })
    }

    // -----------------------------------------------
    // ===================================================================
    // -----------------------------------------------

    // Tabs Component 
    if ($(".designpeer-tabs").length > 0) {
        $(".designpeer-tabs").each(function () {
            let $currentTab = $(this),
                $currentTabId = "#" + $currentTab.attr("id").toString();

            $($currentTabId + " .designpeer-tabs-nav ul li").click(function () {
                var currentTabIndex = $(this).index(),
                    tabsContainer = $(this).closest(".designpeer-tabs"),
                    tabsNav = $(tabsContainer).children(".designpeer-tabs-nav").children("ul").children("li"),
                    tabsContent = $(tabsContainer).children(".designpeer-tabs-content").children("div");

                $(this).parent("li").addClass("active");
                $(tabsNav).removeClass("active");
                $(this).addClass("active");

                $(tabsContent).removeClass("active");
                $(tabsContent).eq(currentTabIndex).addClass("active");
            });
        });
    }
    // mega menu tabs Tabs Component 
    if ($(".megamenu").length > 0) {
        function tabContent() {
            $(".megamenu-tab-content").addClass("hidden");
            $(".megamenu-tab-item").removeClass("active");
            $(".megamenu-tab-item:first-child").addClass("active");

            if ($(window).width() > 1024) {
                $(".megamenu-tab-content:first-child").removeClass("hidden");
            }

            $(".megamenu-tab-item").on("mouseenter", function () {
                let it = $(this).attr("data-item");
                if ($(window).width() > 1024) {
                    $(".megamenu-tab-item").removeClass("active");
                    $(this).addClass("active");
                    $(".megamenu-tab-content").addClass("hidden");
                    $(`.megamenu-tab-content[data-item=${it}]`).removeClass("hidden");
                }
            }).on("click", function () {
                if ($(window).width() < 1024) {
                    $(".megamenu-tab-content").addClass("hidden");
                    let it = $(this).attr("data-item");
                    $(".megamenu-tab-content").addClass("hidden");
                    $(`.megamenu-tab-content[data-item=${it}]`).removeClass("hidden");
                }

            });
            // $(".megamenu-tab-content").addClass("hidden");
            // if ($(window).width() > 1024) {
            //     $(".megamenu-tab-content:first-child").removeClass("hidden");
            //     $(".megamenu-tab-item:first-child").addClass("active");
            //     $(".megamenu-tab-item").on("mouseenter", function () {
            //         let it = $(this).attr("data-item");
            //         $(".megamenu-tab-item").removeClass("active");
            //         $(this).addClass("active");
            //         $(".megamenu-tab-content").addClass("hidden");
            //         $(`.megamenu-tab-content[data-item=${it}]`).removeClass("hidden");
            //     });
            // } else {
            //     console.log("less");
            //     $(".megamenu-tab-item").on("click", function () {
            //         $(".megamenu-tab-content").addClass("hidden");
            //         let it = $(this).attr("data-item");
            //         $(".megamenu-tab-content").addClass("hidden");
            //         $(`.megamenu-tab-content[data-item=${it}]`).removeClass("hidden");
            //     });
            // }
        }

        tabContent();

        $(window).on("resize", function () {
            tabContent();
        });

    }
    // mega menu tabs Tabs Component 
    if ($(".mobile-menu").length > 0) {
        $(".mobile-menu-btn").on("click", function () {
            $(".mobile-menu").addClass("active")
        })
        $(".close-mobile-menu").on("click", function () {
            $(".mobile-menu").removeClass("active")
        })
        $(".close-megamenu-tab-content").on("click", function () {
            $(".megamenu-tab-content").addClass("hidden").removeClass("active")
        })
    }

    // -----------------------------------------------
    // ===================================================================
    // -----------------------------------------------

    // if ($(window).width() < 768) {
    //     $(".megamenu-tab-content").addClass("hidden")
    // }

    // -----------------------------------------------
    // ===================================================================
    // -----------------------------------------------

    // Accordion Component 
    if ($(".designpeer-accordion").length > 0) {
        $(".designpeer-accordion").each(function () {
            let $designpeerAccordion = $(this),
                $accordionTitle = $designpeerAccordion.find(".designpeer-tab-title"),
                $accordionType = $designpeerAccordion.data("accordion-type"),
                $accordionSpeed = $designpeerAccordion.data("toogle-speed");

            // Open default actived tab
            $accordionTitle.each(function () {
                if ($(this).hasClass("active-default")) {
                    $(this).parent().addClass("active");
                    $(this).addClass("show active");
                    $(this).next().slideDown($accordionSpeed);
                }
            });

            // Remove multiple click event for nested accordion
            $accordionTitle.unbind("click");

            $accordionTitle.click(function (e) {
                e.preventDefault();
                let $this = $(this);

                if ($accordionType === "accordion") {
                    if ($this.hasClass("show")) {
                        $this.removeClass("show active");
                        $this.parent().removeClass("active");
                        $this.next().slideUp($accordionSpeed);
                    } else {
                        $designpeerAccordion.find(".designpeer-accordion-item").removeClass("active");
                        $this.parent().addClass("active");
                        $this.parent().parent().find(".designpeer-tab-title").removeClass("show active");
                        $this.parent().parent().find(".designpeer-tab-content").slideUp($accordionSpeed);
                        $this.toggleClass("show active");
                        $this.next().slideToggle($accordionSpeed);
                    }
                } else {
                    // For acccordion type 'toggle'
                    if ($this.hasClass("show")) {
                        $this.removeClass("show active");
                        $this.parent().removeClass("active");
                        $this.next().slideUp($accordionSpeed);
                    } else {
                        $this.addClass("show active");
                        $this.parent().addClass("active");
                        $this.next().slideDown($accordionSpeed);
                    }
                }
            });
        });
    }
    // -----------------------------------------------
    // ===================================================================
    // -----------------------------------------------

});


// 
if ($(".paralex-element-1").length > 0) {
    window.addEventListener("scroll", () => {
        let sec = window.scrollY - $(".paralex-element-2").offset().top + 1000
        document.querySelector(".paralex-element-1").style.left = sec * .5 + "px";
        document.querySelector(".paralex-element-2").style.right = sec * .55 + "px";
    });
}

// 
if ($(".filters-container").length > 0) {
    $(".filters-container").each(function () {
        let th = $(this);
        th.find(".filter-item").on("click", function () {
            th.find(".filter-item").removeClass("active");
            $(this).addClass("active");
            let filt = $(this).attr("data-filter");
            if (filt === "*") {
                $(".resourses-container .resource-item").removeClass("hidden");
            }
            else {
                $(".resourses-container .resource-item").removeClass("hidden");
                $(`.resourses-container .resource-item:not(${filt})`).addClass("hidden");
            }
        })
    })
}


// 
if ($(".footer-cta-img").length > 0) {
    $(".footer-cta-img").css("max-height", $(".footer-cta-content").innerHeight() + "px")
}

// Mega Menu
if ($(".nav-has-megamenu").length > 0) {
    $(".nav-has-megamenu").on("mouseenter", function () {
        $(this).find(".megamenu").addClass("active");
    }).on("mouseleave", function () {
        $(this).find(".megamenu").removeClass("active");
    })
}

