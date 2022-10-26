ymaps.ready(init);

function init(){
    let point = [59.92352716861979,30.352399337959266];

    let myMap = new ymaps.Map("map", {
        center: point,
        zoom: 18,
        controls: []
    });

    let myPlacemark = new ymaps.Placemark(point, {

    }, {
        iconLayout: 'default#image',
        iconImageHref: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
        iconImageSize: [50, 50],
        iconImageOffset: [-20, -50]
    });

    myMap.geoObjects.add(myPlacemark);
}

(function($) {
    if($(window).width() > 768) {
        Bnovo_Widget.init(function(){
            Bnovo_Widget.open('_bn_widget_', {
                type: "horizontal",
                uid: "7623eac4-d00f-4de6-99f1-4190f415fae0",
                lang: "ru",
                width: "960px",
                background: "#9f64a6",
                bg_alpha: "100",
                padding: "20",
                border_radius: "5",
                font_type: "verdana",
                font_size: "18",
                title_color: "#ffffff",
                title_size: "20",
                inp_color: "#222222",
                // inp_bordhover: "#30b6bc",
                // inp_bordcolor: "#30b6bc",
                // border_color: "#30b6bc",
                title: "Забронировать прямо сейчас",
                inp_alpha: "100",
                btn_background: "#f8f8f8",
                btn_background_over: "#ffffff",
                btn_textcolor: "#222222",
                btn_textover: "#222222",
                // btn_bordcolor: "#30b6bc",
                btn_bordhover: "#cccccc",
            });
        });
    } else {
        Bnovo_Widget.init(function(){
            Bnovo_Widget.open('_bn_widget_', {
                type: "vertical",
                uid: "7623eac4-d00f-4de6-99f1-4190f415fae0",
                lang: "ru",
                width: "100%",
                background: "#9f64a6",
                bg_alpha: "100",
                padding: "20",
                border_radius: "5",
                font_type: "verdana",
                font_size: "18",
                title_color: "#ffffff",
                title_size: "20",
                inp_color: "#222222",
                inp_bordhover: "#30b6bc",
                inp_bordcolor: "#30b6bc",
                border: "on",
                border_color: "#30b6bc",
                title: "Забронировать прямо сейчас",
                inp_alpha: "100",
                btn_background: "#f8f8f8",
                btn_background_over: "#ffffff",
                btn_textcolor: "#222222",
                btn_textover: "#222222",
                btn_bordcolor: "#30b6bc",
                btn_bordhover: "#cccccc",
            });
        });
    }
})(jQuery);