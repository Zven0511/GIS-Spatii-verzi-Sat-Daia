ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([443343.539422, 477398.945968, 445412.761270, 478780.765304]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SVAliniamenteInfrastructura_3 = new ol.format.GeoJSON();
var features_SVAliniamenteInfrastructura_3 = format_SVAliniamenteInfrastructura_3.readFeatures(json_SVAliniamenteInfrastructura_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVAliniamenteInfrastructura_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVAliniamenteInfrastructura_3.addFeatures(features_SVAliniamenteInfrastructura_3);
var lyr_SVAliniamenteInfrastructura_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVAliniamenteInfrastructura_3, 
                style: style_SVAliniamenteInfrastructura_3,
                popuplayertitle: 'SV-Aliniamente Infrastructura',
                interactive: true,
                title: '<img src="styles/legend/SVAliniamenteInfrastructura_3.png" /> SV-Aliniamente Infrastructura'
            });
var format_CopaciSatDaia_4 = new ol.format.GeoJSON();
var features_CopaciSatDaia_4 = format_CopaciSatDaia_4.readFeatures(json_CopaciSatDaia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciSatDaia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciSatDaia_4.addFeatures(features_CopaciSatDaia_4);
var lyr_CopaciSatDaia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciSatDaia_4, 
                style: style_CopaciSatDaia_4,
                popuplayertitle: 'Copaci Sat Daia',
                interactive: true,
                title: '<img src="styles/legend/CopaciSatDaia_4.png" /> Copaci Sat Daia'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_SVAliniamenteInfrastructura_3.setVisible(true);lyr_CopaciSatDaia_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_GoogleSatelliteHybrid_2,lyr_SVAliniamenteInfrastructura_3,lyr_CopaciSatDaia_4];
lyr_SVAliniamenteInfrastructura_3.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Supr.[mp]': 'Supr.[mp]', 'Localitate': 'Localitate', });
lyr_CopaciSatDaia_4.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_SVAliniamenteInfrastructura_3.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Supr.[mp]': 'TextEdit', 'Localitate': 'TextEdit', });
lyr_CopaciSatDaia_4.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_SVAliniamenteInfrastructura_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', });
lyr_CopaciSatDaia_4.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciSatDaia_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});