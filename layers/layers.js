var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_EsriImagery_1 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_cadastre_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'cadastre',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/cadastre_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1159260.064688, 1171487.047087, -879932.939890, 1406178.250449]
                            })
                        });
var format_SAGSMD_3 = new ol.format.GeoJSON();
var features_SAGSMD_3 = format_SAGSMD_3.readFeatures(json_SAGSMD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAGSMD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAGSMD_3.addFeatures(features_SAGSMD_3);
var lyr_SAGSMD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAGSMD_3, 
                style: style_SAGSMD_3,
                popuplayertitle: 'SAG&SMD',
                interactive: false,
                title: '<img src="styles/legend/SAGSMD_3.png" /> SAG&SMD'
            });
var format_limite_sousprefecture_4 = new ol.format.GeoJSON();
var features_limite_sousprefecture_4 = format_limite_sousprefecture_4.readFeatures(json_limite_sousprefecture_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limite_sousprefecture_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_sousprefecture_4.addFeatures(features_limite_sousprefecture_4);
var lyr_limite_sousprefecture_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_sousprefecture_4, 
                style: style_limite_sousprefecture_4,
                popuplayertitle: 'limite_sousprefecture',
                interactive: false,
                title: '<img src="styles/legend/limite_sousprefecture_4.png" /> limite_sousprefecture'
            });
var format_COULOIRS_ARTISANAUX_5 = new ol.format.GeoJSON();
var features_COULOIRS_ARTISANAUX_5 = format_COULOIRS_ARTISANAUX_5.readFeatures(json_COULOIRS_ARTISANAUX_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COULOIRS_ARTISANAUX_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COULOIRS_ARTISANAUX_5.addFeatures(features_COULOIRS_ARTISANAUX_5);
var lyr_COULOIRS_ARTISANAUX_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COULOIRS_ARTISANAUX_5, 
                style: style_COULOIRS_ARTISANAUX_5,
                popuplayertitle: 'COULOIRS_ARTISANAUX',
                interactive: true,
                title: '<img src="styles/legend/COULOIRS_ARTISANAUX_5.png" /> COULOIRS_ARTISANAUX'
            });
var format_PARCELLES_6 = new ol.format.GeoJSON();
var features_PARCELLES_6 = format_PARCELLES_6.readFeatures(json_PARCELLES_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARCELLES_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARCELLES_6.addFeatures(features_PARCELLES_6);
var lyr_PARCELLES_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARCELLES_6, 
                style: style_PARCELLES_6,
                popuplayertitle: 'PARCELLES',
                interactive: true,
    title: 'PARCELLES<br />\
    <img src="styles/legend/PARCELLES_6_0.png" /> Soldée<br />\
    <img src="styles/legend/PARCELLES_6_1.png" /> Non_Soldée<br />'
        });
var format_PARCELLEvrifier_7 = new ol.format.GeoJSON();
var features_PARCELLEvrifier_7 = format_PARCELLEvrifier_7.readFeatures(json_PARCELLEvrifier_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARCELLEvrifier_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARCELLEvrifier_7.addFeatures(features_PARCELLEvrifier_7);
var lyr_PARCELLEvrifier_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARCELLEvrifier_7, 
                style: style_PARCELLEvrifier_7,
                popuplayertitle: 'PARCELLE à vérifier',
                interactive: true,
    title: 'PARCELLE à vérifier<br />\
    <img src="styles/legend/PARCELLEvrifier_7_0.png" /> Soldée<br />\
    <img src="styles/legend/PARCELLEvrifier_7_1.png" /> Non_Soldée<br />'
        });
var format_routes_8 = new ol.format.GeoJSON();
var features_routes_8 = format_routes_8.readFeatures(json_routes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_routes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routes_8.addFeatures(features_routes_8);
var lyr_routes_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_routes_8, 
                style: style_routes_8,
                popuplayertitle: 'routes',
                interactive: true,
                title: '<img src="styles/legend/routes_8.png" /> routes'
            });
var format_CHEF_LIEUX_SIGUIRI_PREFECTURES_9 = new ol.format.GeoJSON();
var features_CHEF_LIEUX_SIGUIRI_PREFECTURES_9 = format_CHEF_LIEUX_SIGUIRI_PREFECTURES_9.readFeatures(json_CHEF_LIEUX_SIGUIRI_PREFECTURES_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHEF_LIEUX_SIGUIRI_PREFECTURES_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHEF_LIEUX_SIGUIRI_PREFECTURES_9.addFeatures(features_CHEF_LIEUX_SIGUIRI_PREFECTURES_9);
var lyr_CHEF_LIEUX_SIGUIRI_PREFECTURES_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHEF_LIEUX_SIGUIRI_PREFECTURES_9, 
                style: style_CHEF_LIEUX_SIGUIRI_PREFECTURES_9,
                popuplayertitle: 'CHEF_LIEUX_SIGUIRI_PREFECTURES',
                interactive: false,
                title: '<img src="styles/legend/CHEF_LIEUX_SIGUIRI_PREFECTURES_9.png" /> CHEF_LIEUX_SIGUIRI_PREFECTURES'
            });
var format_ch_lieux_sspref_28N_10 = new ol.format.GeoJSON();
var features_ch_lieux_sspref_28N_10 = format_ch_lieux_sspref_28N_10.readFeatures(json_ch_lieux_sspref_28N_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ch_lieux_sspref_28N_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ch_lieux_sspref_28N_10.addFeatures(features_ch_lieux_sspref_28N_10);
var lyr_ch_lieux_sspref_28N_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ch_lieux_sspref_28N_10, 
                style: style_ch_lieux_sspref_28N_10,
                popuplayertitle: 'ch_lieux_sspref_28N',
                interactive: false,
                title: '<img src="styles/legend/ch_lieux_sspref_28N_10.png" /> ch_lieux_sspref_28N'
            });
var format_river_11 = new ol.format.GeoJSON();
var features_river_11 = format_river_11.readFeatures(json_river_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_river_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_river_11.addFeatures(features_river_11);
var lyr_river_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_river_11, 
                style: style_river_11,
                popuplayertitle: 'river',
                interactive: false,
                title: '<img src="styles/legend/river_11.png" /> river'
            });
var format_river_12 = new ol.format.GeoJSON();
var features_river_12 = format_river_12.readFeatures(json_river_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_river_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_river_12.addFeatures(features_river_12);
var lyr_river_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_river_12, 
                style: style_river_12,
                popuplayertitle: 'river',
                interactive: false,
                title: '<img src="styles/legend/river_12.png" /> river'
            });
var group_coursdeaux = new ol.layer.Group({
                                layers: [lyr_river_11,lyr_river_12,],
                                fold: "open",
                                title: 'cours d\'eaux'});
var group_COOPERATIVEMINIEREDESIGUIRI = new ol.layer.Group({
                                layers: [lyr_routes_8,],
                                fold: "open",
                                title: 'COOPERATIVE MINIERE DE SIGUIRI'});

lyr_OpenStreetMap_0.setVisible(true);lyr_EsriImagery_1.setVisible(true);lyr_cadastre_2.setVisible(true);lyr_SAGSMD_3.setVisible(true);lyr_limite_sousprefecture_4.setVisible(true);lyr_COULOIRS_ARTISANAUX_5.setVisible(true);lyr_PARCELLES_6.setVisible(true);lyr_PARCELLEvrifier_7.setVisible(true);lyr_routes_8.setVisible(true);lyr_CHEF_LIEUX_SIGUIRI_PREFECTURES_9.setVisible(true);lyr_ch_lieux_sspref_28N_10.setVisible(true);lyr_river_11.setVisible(true);lyr_river_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EsriImagery_1,lyr_cadastre_2,lyr_SAGSMD_3,lyr_limite_sousprefecture_4,lyr_COULOIRS_ARTISANAUX_5,lyr_PARCELLES_6,lyr_PARCELLEvrifier_7,group_COOPERATIVEMINIEREDESIGUIRI,lyr_CHEF_LIEUX_SIGUIRI_PREFECTURES_9,lyr_ch_lieux_sspref_28N_10,group_coursdeaux];
lyr_SAGSMD_3.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'PERIMETER': 'PERIMETER', 'ENCLOSED_A': 'ENCLOSED_A', 'id': 'id', });
lyr_limite_sousprefecture_4.set('fieldAliases', {'ADM3_NAME': 'ADM3_NAME', 'ADM3_CODE': 'ADM3_CODE', 'ADM2_NAME': 'ADM2_NAME', 'ADM2_CODE': 'ADM2_CODE', 'ADM1_NAME': 'ADM1_NAME', 'ADM1_CODE': 'ADM1_CODE', 'CNTRY_NAME': 'CNTRY_NAME', 'CNTRY_CODE': 'CNTRY_CODE', 'WHO_CODE': 'WHO_CODE', });
lyr_COULOIRS_ARTISANAUX_5.set('fieldAliases', {'id': 'id', 'site': 'site', 'prefecture': 'prefecture', 'sous_pref': 'sous_pref', });
lyr_PARCELLES_6.set('fieldAliases', {'id': 'id', 'TYPE': 'TYPE', 'DISTRICT': 'DISTRICT', 'GERANT': 'GERANT', 'SOUS_PREF': 'SOUS_PREF', 'GROUPEMENT': 'GROUPEMENT', });
lyr_PARCELLEvrifier_7.set('fieldAliases', {'id': 'id', 'TYPE': 'TYPE', 'DISTRICT': 'DISTRICT', 'GERANT': 'GERANT', 'SOUS_PREF': 'SOUS_PREF', 'GROUPEMENT': 'GROUPEMENT', });
lyr_routes_8.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_CHEF_LIEUX_SIGUIRI_PREFECTURES_9.set('fieldAliases', {'ID': 'ID', 'Noms': 'Noms', 'Villetype': 'Villetype', 'index': 'index', 'X': 'X', 'Y': 'Y', });
lyr_ch_lieux_sspref_28N_10.set('fieldAliases', {'ID': 'ID', 'Noms': 'Noms', 'Villetype': 'Villetype', 'X': 'X', 'Y': 'Y', 'index': 'index', });
lyr_river_11.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'STREAM_ID': 'STREAM_ID', 'IN_FLOW': 'IN_FLOW', 'OUT_FLOW': 'OUT_FLOW', 'DRAIN_AREA': 'DRAIN_AREA', });
lyr_river_12.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_SAGSMD_3.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'PERIMETER': 'TextEdit', 'ENCLOSED_A': 'TextEdit', 'id': 'TextEdit', });
lyr_limite_sousprefecture_4.set('fieldImages', {'ADM3_NAME': 'TextEdit', 'ADM3_CODE': 'TextEdit', 'ADM2_NAME': 'TextEdit', 'ADM2_CODE': 'TextEdit', 'ADM1_NAME': 'TextEdit', 'ADM1_CODE': 'TextEdit', 'CNTRY_NAME': 'TextEdit', 'CNTRY_CODE': 'TextEdit', 'WHO_CODE': 'TextEdit', });
lyr_COULOIRS_ARTISANAUX_5.set('fieldImages', {'id': 'TextEdit', 'site': 'TextEdit', 'prefecture': 'TextEdit', 'sous_pref': 'TextEdit', });
lyr_PARCELLES_6.set('fieldImages', {'id': 'TextEdit', 'TYPE': 'TextEdit', 'DISTRICT': 'TextEdit', 'GERANT': 'TextEdit', 'SOUS_PREF': 'TextEdit', 'GROUPEMENT': 'TextEdit', });
lyr_PARCELLEvrifier_7.set('fieldImages', {'id': '', 'TYPE': '', 'DISTRICT': '', 'GERANT': '', 'SOUS_PREF': '', 'GROUPEMENT': '', });
lyr_routes_8.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_CHEF_LIEUX_SIGUIRI_PREFECTURES_9.set('fieldImages', {'ID': 'TextEdit', 'Noms': 'TextEdit', 'Villetype': 'TextEdit', 'index': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_ch_lieux_sspref_28N_10.set('fieldImages', {'ID': '', 'Noms': '', 'Villetype': '', 'X': '', 'Y': '', 'index': '', });
lyr_river_11.set('fieldImages', {'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'STREAM_ID': 'Range', 'IN_FLOW': 'Range', 'OUT_FLOW': 'Range', 'DRAIN_AREA': 'TextEdit', });
lyr_river_12.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr_SAGSMD_3.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'PERIMETER': 'no label', 'ENCLOSED_A': 'no label', 'id': 'no label', });
lyr_limite_sousprefecture_4.set('fieldLabels', {'ADM3_NAME': 'no label', 'ADM3_CODE': 'no label', 'ADM2_NAME': 'no label', 'ADM2_CODE': 'no label', 'ADM1_NAME': 'no label', 'ADM1_CODE': 'no label', 'CNTRY_NAME': 'no label', 'CNTRY_CODE': 'no label', 'WHO_CODE': 'no label', });
lyr_COULOIRS_ARTISANAUX_5.set('fieldLabels', {'id': 'no label', 'site': 'header label - visible with data', 'prefecture': 'header label - visible with data', 'sous_pref': 'header label - visible with data', });
lyr_PARCELLES_6.set('fieldLabels', {'id': 'inline label - always visible', 'TYPE': 'header label - visible with data', 'DISTRICT': 'header label - visible with data', 'GERANT': 'hidden field', 'SOUS_PREF': 'header label - visible with data', 'GROUPEMENT': 'header label - visible with data', });
lyr_PARCELLEvrifier_7.set('fieldLabels', {'id': 'no label', 'TYPE': 'header label - visible with data', 'DISTRICT': 'header label - visible with data', 'GERANT': 'header label - visible with data', 'SOUS_PREF': 'header label - visible with data', 'GROUPEMENT': 'header label - visible with data', });
lyr_routes_8.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_CHEF_LIEUX_SIGUIRI_PREFECTURES_9.set('fieldLabels', {'ID': 'no label', 'Noms': 'no label', 'Villetype': 'no label', 'index': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_ch_lieux_sspref_28N_10.set('fieldLabels', {'ID': 'no label', 'Noms': 'no label', 'Villetype': 'no label', 'X': 'no label', 'Y': 'no label', 'index': 'no label', });
lyr_river_11.set('fieldLabels', {'LAYER': 'no label', 'ELEVATION': 'no label', 'STREAM_ID': 'no label', 'IN_FLOW': 'no label', 'OUT_FLOW': 'no label', 'DRAIN_AREA': 'no label', });
lyr_river_12.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr_river_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});