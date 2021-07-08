
$(".background_color").spectrum({
    color:"#fb0a0c",
    change: function(color){
        $(".userprofile").css("background-color","#"+color.toHex());
    }
});

$(".menutext_color").spectrum({
    color:"#ffffff",
    change: function(color){
        $(".userprofile").css("background-color","#"+color.toHex());
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
        $(".userprofile").css("color","#"+color.toHex());
    }
});

$(".contactbutton_color").spectrum({
    color:"#ffffff",
    change: function(color){
        $(".contactbutton_color").css("background-color","#"+color.toHex());
    }
});

$(".contacttext_color").spectrum({
    color:"#fb0a0c",
    change: function(color){
        $(".contacttext_color").css("color","#"+color.toHex());
    }
});