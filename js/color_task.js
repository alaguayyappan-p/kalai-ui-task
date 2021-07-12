$(".menu li").on("click", function () {
    $(".menu li").removeClass("active");
    $(".menu li").removeClass("tooltip");
    $(this).addClass("active");
    $(this).addClass("tooltip");
    var usercolor = $(this).attr("data-id");
    console.log(usercolor);
    $("[data-content-id]").hide();
    $("[data-content-id*='" + usercolor + "']").css("display", "flex");
})

var default_colors = {
    header_background_color: "#f83300",
    header_text_color: "#ffffff",
    name_color: "#ffffff",
    designation_color: "#fafafa",
    contactbutton_color: "#ffffff",
    contacttext_color: "#fb0a0c",
    getin_touch_button_color: "#f83300",
    getin_touch_text_color: "#fff",
    website_button_color: "#fff",
    website_text_color: "#f83300",
    phoneno_color: "#000",
    asidebar_color: "#f5cfca",
    profile_background_color: "#f5cfca",
    profile_text_color: "#ffffff",
    body_menutext_color: "#f70905",
    profile_button_color: "#f62701",
    hyperlink_color: "#cfaf63"
}

$(".background_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.header_background_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        background_color_change(color, ".userprofile");
    },
    change: function (color) {
        background_color_change(color, ".userprofile");
    },
    get: function (color) {
        background_color_change(color, ".userprofile");
    },
    hide: function (color) {
        background_color_change(color, ".userprofile");
    }
});

$(".menutext_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.header_text_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        text_color_change(color, ".user_option a");
    },
    change: function (color) {
        text_color_change(color, ".user_option a");
    },
    get: function (color) {
        text_color_change(color, ".user_option a");
    },
    hide: function (color) {
        text_color_change(color, ".user_option a");
    }
});

$(".name_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.name_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        text_color_change(color, ".name");
    },
    change: function (color) {
        text_color_change(color, ".name");
    },
    get: function (color) {
        text_color_change(color, ".name");
    },
    hide: function (color) {
        text_color_change(color, ".name");
    }
});

$(".designation_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.designation_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        text_color_change(color, ".designation");
    },
    change: function (color) {
        text_color_change(color, ".designation");
    },
    get: function (color) {
        text_color_change(color, ".designation");
    },
    hide: function (color) {
        text_color_change(color, ".designation");
    }
});

$(".contactbutton_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.contactbutton_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        background_color_change(color, ".contact_me");
    },
    change: function (color) {
        background_color_change(color, ".contact_me");
    },
    get: function (color) {
        background_color_change(color, ".contact_me");
    },
    hide: function (color) {
        background_color_change(color, ".contact_me");
    }
});

$(".contacttext_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.contacttext_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        text_color_change(color, ".contact");
    },
    change: function (color) {
        text_color_change(color, ".contact");
    },
    get: function (color) {
        text_color_change(color, ".contact");
    },
    hide: function (color) {
        text_color_change(color, ".contact");
    }
});

$(".getin_touch_button_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.getin_touch_button_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        background_color_change(color, ".getintouch");
    },
    change: function (color) {
        background_color_change(color, ".getintouch");
    },
    get: function (color) {
        background_color_change(color, ".getintouch");
    },
    hide: function (color) {
        background_color_change(color, ".getintouch");
    }
});

$(".getin_touch_text_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.getin_touch_text_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        text_color_change(color, ".getintouch");
    },
    change: function (color) {
        text_color_change(color, ".getintouch");
    },
    get: function (color) {
        text_color_change(color, ".getintouch");
    },
    hide: function (color) {
        text_color_change(color, ".getintouch");
    }
});

$(".website_button_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.website_button_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        background_color_change(color, ".visitwebsite");
    },
    change: function (color) {
        background_color_change(color, ".visitwebsite");
    },
    get: function (color) {
        background_color_change(color, ".visitwebsite");
    },
    hide: function (color) {
        background_color_change(color, ".visitwebsite");
    }
});

$(".website_text_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.website_text_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        text_color_change(color, ".visitwebsite");
    },
    change: function (color) {
        text_color_change(color, ".visitwebsite");
    },
    get: function (color) {
        text_color_change(color, ".visitwebsite");
    },
    hide: function (color) {
        text_color_change(color, ".visitwebsite");
    }
});

$(".phoneno_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.phoneno_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        text_color_change(color, ".mobileno");
    },
    change: function (color) {
        text_color_change(color, ".mobileno");
    },
    get: function (color) {
        text_color_change(color, ".mobileno");
    },
    hide: function (color) {
        text_color_change(color, ".mobileno");
    }
});

$(".asidebar_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.website_button_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        background_color_change(color, ".aside");
    },
    change: function (color) {
        background_color_change(color, ".aside");
    },
    get: function (color) {
        background_color_change(color, ".aside");
    },
    hide: function (color) {
        background_color_change(color, ".aside");
    }
});

// main body options

$(".profile_background_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.profile_background_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        background_color_change(color, ".contrary");
    },
    change: function (color) {
        background_color_change(color, ".contrary");
    },
    get: function (color) {
        background_color_change(color, ".contrary");
    },
    hide: function (color) {
        background_color_change(color, ".contrary");
    }
});

$(".body_menutext_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.body_menutext_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        text_color_change(color, ".contrary_details");
    },
    change: function (color) {
        text_color_change(color, ".contrary_details");
    },
    get: function (color) {
        text_color_change(color, ".contrary_details");
    },
    hide: function (color) {
        text_color_change(color, ".contrary_details");
    }
});

$(".profile_button_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.profile_button_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        background_color_change(color, ".send");
    },
    change: function (color) {
        background_color_change(color, ".send");
    },
    get: function (color) {
        background_color_change(color, ".send");
    },
    hide: function (color) {
        background_color_change(color, ".send");
    }
});

$(".profile_text_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.profile_text_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        text_color_change(color, ".send");
    },
    change: function (color) {
        text_color_change(color, ".send");
    },
    get: function (color) {
        text_color_change(color, ".send");
    },
    hide: function (color) {
        text_color_change(color, ".send");
    }
});

$(".hyperlink_color").custompicker({
    preferredFormat: "hex",
    clickoutFiresChange: false,
    flat: false,
    showInput: true,
    showPalette: true,
    showSelectionPalette: true,
    color: default_colors.hyperlink_color,
    chooseText: "Set color",
    palette: [],
    maxSelectionSize: 12,
    localStorageKey: "my_recent",
    move: function (color) {
        text_color_change(color, ".page_link");
    },
    change: function (color) {
        text_color_change(color, ".page_link");
    },
    get: function (color) {
        text_color_change(color, ".page_link");
    },
    hide: function (color) {
        text_color_change(color, ".page_link");
    }
});

function background_color_change(color, cssclass) {
    var color = color.toHexString();
    $(cssclass).css({
        'background-color': color
    });
}

function text_color_change(color, cssclass) {
    var color = color.toHexString();
    $(cssclass).css({
        'color': color
    });
}


