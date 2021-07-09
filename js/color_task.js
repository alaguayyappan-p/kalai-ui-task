$(".menu li").on("click",function(){
$(".menu li").removeClass("active");
$(".menu li").removeClass("tooltip");
$(this).addClass("active");
$(this).addClass("tooltip");
var usercolor = $(this).attr("data-id");
console.log(usercolor);
$("[data-content-id]").hide();
$("[data-content-id*='" + usercolor + "']").css("display","flex");

})

$(".background_color").spectrum({
    color:"#fb0a0c",
    change: function(color){
        $(".userprofile").css("background-color","#"+color.toHex());
    }
});

$(".menutext_color").spectrum({
    color:"#ffffff",
    change: function(color){
        $(".user_option a").css("color","#"+color.toHex());
    }
});

$(".name_color").spectrum({
    color:"#ffffff",
    change: function(color){
        $(".name").css("color","#"+color.toHex());
    }
});

$(".designation_color").spectrum({
    color:"#fafafa",
    change: function(color){
        $(".designation").css("color","#"+color.toHex());
    }
});

$(".contactbutton_color").spectrum({
    color:"#ffffff",
    change: function(color){
        $(".contact_me").css("background-color","#"+color.toHex());
    }
});

$(".contacttext_color").spectrum({
    color:"#fb0a0c",
    change: function(color){
        $(".contact_me a").css("color","#"+color.toHex());
    }
});

$(".getin_touch_button_color").spectrum({
    color:"#f83300",
    change: function(color){
        $("a.getintouch").css("background-color","#"+color.toHex());
    }
});

$(".getin_touch_text_color").spectrum({
    color:"#fff",
    change: function(color){
        $(".getintouch").css("color","#"+color.toHex());
    }
});

$(".website_button_color").spectrum({
    color:"#fff",
    change: function(color){
        $(".visitwebsite").css("background-color","#"+color.toHex());
    }
});

$(".website_text_color").spectrum({
    color:"#f83300",
    change: function(color){
        $(".visitwebsite").css("color","#"+color.toHex());
    }
});

$(".phoneno_color").spectrum({
    color:"#000",
    change: function(color){
        $(".mobileno").css("color","#"+color.toHex());
    }
});

$(".asidebar_color").spectrum({
    color:"#f5cfca",
    change: function(color){
        $(".aside").css("background-color","#"+color.toHex());
    }
});

// main body options

$(".profile_background_color").spectrum({
    color:"#f5cfca",
    change: function(color){
        $(".contrary").css("background-color","#"+color.toHex());
    }
});

$(".body_menutext_color").spectrum({
    color:"#f5cfca",
    change: function(color){
        $(".contrary").css("color","#"+color.toHex());
    }
});

$(".profile_button_color").spectrum({
    color:"#f62701",
    change: function(color){
        $(".send").css("background-color","#"+color.toHex());
    }
});

$(".profile_text_color").spectrum({
    color:"#fff",
    change: function(color){
        $(".send").css("color","#"+color.toHex());
    }
});

$(".hyperlink_color").spectrum({
    color:"#eaddb9",
    change: function(color){
        $(".page_link").css("color","#"+color.toHex());
    }
});
