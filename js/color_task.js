$(".menu li").on("click",function(){
$(".menu li").removeClass("active");
$(this).addClass("active");
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
