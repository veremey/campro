
ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [55.765291, 37.631406],
            zoom: 16
        }),
        myPlacemark = new ymaps.Placemark([55.766233, 37.630023], {
            hintContent: 'Москва, Лебяжий переулок, д.8</p><p>+7 (495) 697-06-02'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location_green.png',
            // Размеры метки.
            iconImageSize: [105, 92],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).

    }, {
      balloonShadow: false
    });
    myMap.geoObjects.add(myPlacemark);
     myMap.behaviors
         .disable(['scrollZoom']);

});




var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);
function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.746993, 37.608284], // Москва
        zoom: 17
    });

    // document.getElementById('destroyButton').onclick = function () {
    //     // Для уничтожения используется метод destroy.
    //     myMap.destroy();
    // };

  };

  // смотри js/yandexMapInit.js


  //  #####  Карта AND ######