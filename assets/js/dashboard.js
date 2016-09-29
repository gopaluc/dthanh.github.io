// Accès à la météo de Lyon avec la clé d'accès 50a65432f17cf542
ajaxGet("http://api.wunderground.com/api/50a65432f17cf542/conditions/q/India/Nashik_Road.json", function (reponse) {
    var meteo = JSON.parse(reponse);
    // Récupération de certains résultats
    var temperature = meteo.current_observation.temp_c;
    var humidite = meteo.current_observation.relative_humidity;
    var imageUrl = meteo.current_observation.icon_url;
    // Affichage des résultats
    var conditionsElt = document.createElement("div");
    conditionsElt.textContent = "Il fait actuellement " + temperature +
        "°C et l'humidité est de " + humidite;
    var imageElt = document.createElement("img");
    imageElt.src = imageUrl;
    var meteoElt = document.getElementById("meteo");
    meteoElt.appendChild(conditionsElt);
    meteoElt.appendChild(imageElt);
});

// Accès à la météo de Lyon avec la clé d'accès 50a65432f17cf542
ajaxGet("https://tosdr.org/api/1/service/duckduckgo.json", function (reponse) {
    var tosdr = JSON.parse(reponse);
    // Récupération de certains résultats
    var siteClass = tosdr.class;
    // Affichage des résultats
    var conditionsElt = document.createElement("div");
    conditionsElt.textContent = "Class " + siteClass;
    var tosdrElt = document.getElementById("tosdr");
    tosdrElt.appendChild(conditionsElt);
});