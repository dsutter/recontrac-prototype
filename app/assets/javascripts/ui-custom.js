$(document).ready(function(){
    // on page load, add bootstrap alert classes to all devise error_explanation divs
    if ($("#error_explanation").length) {
        $("body #error_explanation").addClass("alertnoticewin");
        $("body #error_explanation").addClass("alertbar");
        $("body #error_explanation").addClass("notification-color");
    };
    // fade out alert window after 3 seconds
    if ($(".alertnoticewin").is(":visible")) {
        $(".alertnoticewin").delay(3000).fadeOut(600);
    };
    $(window).scroll(function(){
        if ($("#maxcontainer").scrollTop() > 100) {
            $('.btn-up').fadeIn(400);
        } else {
            $('.btn-up').fadeOut(400);
        }
    });
    $('.btn-up').click(function(){
        $('#maxcontainer').animate({scrollTop : 0},800);
        $('.btn-up').fadeOut(400);
        return false;
    });
    $(".notification-toggle").click(function () {
        var windowwidth = $(window).width();
        if (windowwidth >= 635) {
            if ($(".notification-toggle").hasClass("navclosed")) {
                open_notification_bin();
                close_organization_bin();
                close_profilenav_bin();
            } else {
                close_notification_bin();
            }
        } else {
            // link direct to "view all notifications" page
        }

    });
    $("#profilenav-toggle").click(function () {
        close_organization_bin();
        close_navigationmenu();
        $("#profilenav-bin").fadeToggle("slow");
        $("#profilenav-toggle").toggleClass("navclosed");
        $("#profilenav-toggle").toggleClass("navopen");

    });
    $("#organization-toggle").click(function () {
        close_profilenav_bin();
        $("#organization-bin").fadeToggle("slow");
        $("#organization-toggle").toggleClass("navclosed");
        $("#organization-toggle").toggleClass("navopen");
    });
    $("#organizationbin-close").click(function () {
        close_organization_bin();
    });
    $("#profilebin-close").click(function () {
        close_profilenav_bin();
    });
    $(".close-this").click(function () {
        $(this).parent().slideUp();
        check_notification_bin();
    });
    $("#navigationmenu-toggle").click(function () {
        close_profilenav_bin();
        $("#navigation-menu").slideToggle("fast");
        $("#navigationmenu-toggle").toggleClass("navclosed");
        $("#navigationmenu-toggle").toggleClass("navopen");
    });
    $("#navigationmenu-close").click(function () {
        close_navigationmenu();
    });

    // SIZE MAXCONTAINER ON WINDOW RESIZE
    $(window).resize(function(){
        var windowwidth = $(window).width();
        if (windowwidth >= 635) {
            close_navigationmenu();
            close_notification_bin();
        }
    });
});

$(function () {
    //detect touch devices and deactivate tooltips on those devices
    var deviceAgent = navigator.userAgent.toLowerCase();
    var isTouchDevice = ('ontouchstart' in document.documentElement) ||
        (deviceAgent.match(/(iphone|ipod|ipad)/) ||
        deviceAgent.match(/(android)/)  ||
        deviceAgent.match(/(iemobile)/) ||
        deviceAgent.match(/iphone/i) ||
        deviceAgent.match(/ipad/i) ||
        deviceAgent.match(/ipod/i) ||
        deviceAgent.match(/blackberry/i) ||
        deviceAgent.match(/bada/i));

    if (isTouchDevice) {
        // touch devices
    } else {
        // non-touch devices
        if ($(".tooltipclass").length) {
            $(".tooltipclass").tooltip({
                placement: "right",
                container: "body"
            });
        }
        if ($(".tooltipclasstop").length) {
            $(".tooltipclasstop").tooltip({
                placement: "top",
                container: "body"
            });
        }
        if ($(".tooltipclassbtm").length) {
            $(".tooltipclassbtm").tooltip({
                placement: "bottom",
                container: "body"
            });
        }
    }
});
function open_notification_bin(){
    var binheight = "130px";
    $(".notification-toggle").removeClass("navclosed");
    $(".notification-toggle").addClass("navopen");
    $("#notification-bin").show();
    $("#notification-bin").animate({height: binheight}, 400);
    $("#notification-tab-bin").slideDown("slow");
};
function close_notification_bin(){
    if ($(".notification-toggle").hasClass("navopen")) {
        $("#notification-tab-bin").slideUp("fast");
        $(".notification-toggle").removeClass("navopen");
        $(".notification-toggle").addClass("navclosed");
        $("#notification-bin").animate({height: '0px'}, 200);
        setTimeout(function() {
            $("#notification-bin").hide();
        }, 200);
    }
};
function check_notification_bin(){
    // check all alertbins...once last one is closed, close notification-bin too
    var visiblebincount = $('#notification-bin .alertbar:visible').length;

    var currentcount = $("#headerbar-nonmobile .navbar-count-circle").text();
    var newcount = parseInt(currentcount) - 1;
    $(".notification-toggle .navbar-count-circle").text(newcount);

    if (visiblebincount == 1) {
        if ($(".notification-toggle").hasClass("navopen")) {
            $("#headerbar-nonmobile .notification-toggle").click();
        }
    }
};
function close_profilenav_bin(){
    if ($("#profilenav-toggle").hasClass("navopen")) {
        $("#profilenav-toggle").click();
    }
};
function close_organization_bin(){
    if ($("#organization-toggle").hasClass("navopen")) {
        $("#organization-toggle").click();
    }
};
function close_navigationmenu(){
    if ($("#navigationmenu-toggle").hasClass("navopen")) {
        $("#navigationmenu-toggle").click();
    }
};
function loadlogin() {
    $("#bg-image").delay(100).fadeIn(600);
    $("#bg-overlay").delay(1000).fadeIn(1200);
    $("#logincontainer").delay(1600).fadeIn(800);
    $(".alertbar").delay(2000).slideDown(800);
};
