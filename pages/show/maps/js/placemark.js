ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [23, -100],
            zoom: 4
        }, {
            searchControlProvider: 'yandex#search'
        });

    myMap.setType('yandex#hybrid');

    var myFactory = new ymaps.Placemark([19.192082, -100.090525], {
      balloonContentHeader: "Valle de Bravo",
      hintContent: "Haz clic para obtener más información"
    }, {
      preset: 'islands#darkGreenFactoryCircleIcon',
      hideIconOnBalloonOpen: false
    })

    myFactory.events.add('click', function () {
      var url = "../index.html";
      window.location.href = url;
      /*
      var mapa = document.getElementById("map");
      mapa.style.display = 'none';
      var clsUp = document.getElementById("closeUp");
      clsUp.style.display = "inline-block";
      */
    });
    var myGeoObjects = [
      new ymaps.Placemark([19.43, -99.13], {
          balloonContentHeader: "Ciudad de México (Zona A)",
          balloonContentBody: "Mercado potencial: $80,000,000",
          balloonContentFooter: "25 contenedores",
          hintContent: "Haz clic para obtener más información"
      }, {
          preset: 'islands#nightStarCircleIcon',
          iconCaptionMaxWidth: '50',
          hideIconOnBalloonOpen: false
      }),
      new ymaps.Placemark([19.44, -99.13], {
          balloonContentHeader: "Ciudad de México (Zona B)",
          balloonContentBody: "Mercado potencial: $50,000,000",
          balloonContentFooter: "20 contenedores",
          hintContent: "Haz clic para obtener más información"
      }, {
          preset: 'islands#nightStarCircleIcon',
          iconCaptionMaxWidth: '50',
          hideIconOnBalloonOpen: false
      }),
      new ymaps.Placemark([19.43, -99.10], {
          balloonContentHeader: "Ciudad de México (Zona C)",
          balloonContentBody: "Mercado potencial: $55,000,000",
          balloonContentFooter: "23 contenedores",
          hintContent: "Haz clic para obtener más información"
      }, {
          preset: 'islands#nightStarCircleIcon',
          iconCaptionMaxWidth: '50',
          hideIconOnBalloonOpen: false
      }),
      new ymaps.Placemark([19.44, -99.15], {
          balloonContentHeader: "Ciudad de México (Zona D)",
          balloonContentBody: "Mercado potencial: $30,000,000",
          balloonContentFooter: "10 contenedores",
          hintContent: "Haz clic para obtener más información"
      }, {
          preset: 'islands#nightStarCircleIcon',
          iconCaptionMaxWidth: '50',
          hideIconOnBalloonOpen: false
      }),
      new ymaps.Placemark([20.67, -103.34], {
          balloonContentHeader: "Guadalajara",
          balloonContentBody: "Mercado potencial: $80,000,000",
          balloonContentFooter: "35 contenedores",
          hintContent: "Haz clic para obtener más información"
      }, {
          preset: 'islands#nightStarCircleIcon',
          iconCaptionMaxWidth: '50',
          hideIconOnBalloonOpen: false
      }),
      new ymaps.Placemark([21.161908, -86.8515279], {
          balloonContentHeader: "Cancún",
          balloonContentBody: "Mercado potencial: $100,000,000",
          balloonContentFooter: "50 contenedores",
          hintContent: "Haz clic para obtener más información"
      }, {
          preset: 'islands#nightStarCircleIcon',
          iconCaptionMaxWidth: '50',
          hideIconOnBalloonOpen: false
      }),
      new ymaps.Placemark([20.6170006, -105.2301788], {
          balloonContentHeader: "Puerto Vallarta",
          balloonContentBody: "Mercado potencial: $50,000,000",
          balloonContentFooter: "30 contenedores",
          hintContent: "Haz clic para obtener más información"
      }, {
          preset: 'islands#nightStarCircleIcon',
          iconCaptionMaxWidth: '50',
          hideIconOnBalloonOpen: false
      }),
      new ymaps.Placemark([23.2267, -106.408], {
          balloonContentHeader: "Mazatlán",
          balloonContentBody: "Mercado potencial: $40,000,000",
          balloonContentFooter: "20 contenedores",
          hintContent: "Haz clic para obtener más información"
      }, {
          preset: 'islands#nightStarCircleIcon',
          iconCaptionMaxWidth: '50',
          hideIconOnBalloonOpen: false
      }),
      new ymaps.Placemark([32.502, -117.003], {
          balloonContentHeader: "Tijuana",
          balloonContentBody: "Mercado potencial: $65,000,000",
          balloonContentFooter: "25 contenedores",
          hintContent: "Haz clic para obtener más información"
      }, {
          preset: 'islands#nightStarCircleIcon',
          iconCaptionMaxWidth: '50',
          hideIconOnBalloonOpen: false
      }),
      new ymaps.Placemark([24.1333, -110.3], {
          balloonContentHeader: "La Paz",
          balloonContentBody: "Mercado potencial: $65,000,000",
          balloonContentFooter: "35 contenedores",
          hintContent: "Haz clic para obtener más información"
      }, {
          preset: 'islands#nightStarCircleIcon',
          iconCaptionMaxWidth: '50',
          hideIconOnBalloonOpen: false
      })
    ];

    var myClusterer = new ymaps.Clusterer({
            preset: 'islands#invertedNightClusterIcons'
        });
    myClusterer.add(myGeoObjects);
    myMap.geoObjects.add(myClusterer);
    myMap.geoObjects.add(myFactory);
    /*
    ymaps.modules.require(['Heatmap'], function (Heatmap) {
     var data = [[20.6170006, -105.2301788], [23.2267, -106.408], [23.22, -106.40]],
         heatmap = new Heatmap(data);
     heatmap.setMap(myMap);
    });
    */
}
