var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
}

$("#credits").click(function () {
    $("#play").animate({ right: "100%" }, "500", function () {
        $("#credits").animate({ right: "100%" }, "500", function () {
            $("#credit-div").css("display", "grid");
            $("#credit-div").animate({width: "1200px", height: "1200px"}, "slow");
            $("#credits-exit").animate({ width: "50px", height: "50px" }, "500", function(){
                $("#credits-exit").css("display", "inline-block");
            });
        });
    });
});

$("#credits-exit").click(function () {
    $("#credits-exit").css("display", "none");
    $("#credit-div").animate({ width: "0px", height: "0px" }, "slow", function () {
        $("#credit-div").css("display", "none");
        $("#play").animate({ right: "-36%" }, "500", function () {
            $("#credits").animate({ right: "-30%" }, "500");
        });
    });
});

$("#play").click(function () {
    $("#intro-header").animate({ right: "130%" }, "slow", function () {
        $("#play").animate({ right: "100%" }, "500", function () {
            $("#credits").animate({ right: "100%" }, "500");
            $("#difficulty").animate({ width: "1200px", height: "1200px" }, "slow", function () {
                $("#nightmare").css("display", "initial");
                $("#nightmare").animate({ width: "525px", height: "205px", }, "slow", function () {
                    $("#death-mode").css("display", "initial");
                    $("#death-mode").animate({ width: "525px", height: "205px" }, "slow", function () {
                        $("#impossible").css("display", "initial");
                        $("#impossible").animate({ width: "525px", height: "205px" }, "slow", function () {
                            $("h2").css("display", "initial");
                        });
                        $("#difficulty-exit").animate({ width: "50px", height: "50px" }, "500", function () {
                            $("#difficulty-exit").css("display", "initial");
                        });
                    });
                });
            });
        });
    });
});

$("#nightmare").hover(function () {
    $("#nightmare").animate({ width: "550px", height: "225px", left: "28%" }, "500");
}, function () {
    $("#nightmare").animate({ width: "525px", height: "205px", left: "29%" }, "500");
})

$("#death-mode").hover(function () {
    $("#death-mode").animate({ width: "550px", height: "225px", left: "28%" }, "500");
}, function () {
    $("#death-mode").animate({ width: "525px", height: "205px", left: "29%" }, "500");
})

$("#impossible").hover(function () {
    $("#impossible").animate({ width: "550px", height: "225px", left: "28%" }, "500");
}, function () {
    $("#impossible").animate({ width: "525px", height: "205px", left: "29%" }, "500");
});

$("#difficulty-exit").click(function () {
    $("#difficulty-exit").css("display", "none");
    $("#nightmare").animate({ width: "0px", height: "0px" }, "500", function () {
        $("#nightmare").css("display", "none");
    });
    $("#death-mode").animate({ width: "0px", height: "0px" }, "500", function () {
        $("#death-mode").css("display", "none");
    });
    $("#impossible").animate({ width: "0px", height: "0px" }, "500", function () {
        $("#impossible").css("display", "none");
        $("#difficulty").animate({ width: "0px", height: "0px" }, "500", function () {
            $("#play").animate({ right: "-36%" }, "500", function () {
                $("#credits").animate({ right: "-30%" }, "500", function () {
                    $("#intro-header").animate({ right: "-15%" }, "500");
                });
            });
        });
    });
});

$("#nightmare").click(function () {
    $("#difficulty-exit").css("display", "none");
    $("#nightmare").css("display", "none");
    $("#nightmare").animate({ width: "0px", height: "0px" }, "500");
    $("#death-mode").css("display", "none");
    $("death-mode").animate({ width: "0px", height: "0px" }, "500");
    $("#impossible").css("display", "none");
    $("#difficulty").animate({ width: "0px", height: "0px" }, "500", function () {
        $("body").css("background", "black");
        window.location.assign("index.html");
    });
});

$("#death-mode").click(function () {
    $("#difficulty-exit").css("display", "none");
    $("#nightmare").css("display", "none");
    $("#nightmare").animate({ width: "0px", height: "0px" }, "500");
    $("#death-mode").css("display", "none");
    $("death-mode").animate({ width: "0px", height: "0px" }, "500");
    $("#impossible").css("display", "none");
    $("#difficulty").animate({ width: "0px", height: "0px" }, "500", function () {
        $("body").css("background", "black");
        window.location.assign("index.html");
    });
});

$("#impossible").click(function () { 
    $("#difficulty-exit").css("display", "none");
    $("#nightmare").css("display", "none");
    $("#nightmare").animate({ width: "0px", height: "0px" }, "500");
    $("#death-mode").css("display", "none");
    $("death-mode").animate({ width: "0px", height: "0px" }, "500");
    $("#impossible").css("display", "none");
    $("#difficulty").animate({ width: "0px", height: "0px" }, "500", function () {
        $("body").css("background", "black");
        window.location.assign("index.html");
    });
});