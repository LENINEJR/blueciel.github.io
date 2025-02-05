ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32629").setExtent([307737.000427, 1202540.103617, 616982.000427, 1373672.603617]);
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
var format_LicenseExport_2 = new ol.format.GeoJSON();
var features_LicenseExport_2 = format_LicenseExport_2.readFeatures(json_LicenseExport_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32629'});
var jsonSource_LicenseExport_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LicenseExport_2.addFeatures(features_LicenseExport_2);
var lyr_LicenseExport_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LicenseExport_2, 
                style: style_LicenseExport_2,
                popuplayertitle: 'LicenseExport',
                interactive: true,
                title: '<img src="styles/legend/LicenseExport_2.png" /> LicenseExport'
            });
var format_SAGSMD_3 = new ol.format.GeoJSON();
var features_SAGSMD_3 = format_SAGSMD_3.readFeatures(json_SAGSMD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32629'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32629'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32629'});
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
var format_CHEF_LIEUX_SIGUIRI_PREFECTURES_6 = new ol.format.GeoJSON();
var features_CHEF_LIEUX_SIGUIRI_PREFECTURES_6 = format_CHEF_LIEUX_SIGUIRI_PREFECTURES_6.readFeatures(json_CHEF_LIEUX_SIGUIRI_PREFECTURES_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32629'});
var jsonSource_CHEF_LIEUX_SIGUIRI_PREFECTURES_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHEF_LIEUX_SIGUIRI_PREFECTURES_6.addFeatures(features_CHEF_LIEUX_SIGUIRI_PREFECTURES_6);
var lyr_CHEF_LIEUX_SIGUIRI_PREFECTURES_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHEF_LIEUX_SIGUIRI_PREFECTURES_6, 
                style: style_CHEF_LIEUX_SIGUIRI_PREFECTURES_6,
                popuplayertitle: 'CHEF_LIEUX_SIGUIRI_PREFECTURES',
                interactive: false,
                title: '<img src="styles/legend/CHEF_LIEUX_SIGUIRI_PREFECTURES_6.png" /> CHEF_LIEUX_SIGUIRI_PREFECTURES'
            });
var format_PARCELLES_7 = new ol.format.GeoJSON();
var features_PARCELLES_7 = format_PARCELLES_7.readFeatures(json_PARCELLES_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32629'});
var jsonSource_PARCELLES_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARCELLES_7.addFeatures(features_PARCELLES_7);
var lyr_PARCELLES_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARCELLES_7, 
                style: style_PARCELLES_7,
                popuplayertitle: 'PARCELLES',
                interactive: true,
    title: 'PARCELLES<br />\
    <img src="styles/legend/PARCELLES_7_0.png" /> Soldée<br />\
    <img src="styles/legend/PARCELLES_7_1.png" /> Non_Soldée<br />'
        });
var format_river_8 = new ol.format.GeoJSON();
var features_river_8 = format_river_8.readFeatures(json_river_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32629'});
var jsonSource_river_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_river_8.addFeatures(features_river_8);
var lyr_river_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_river_8, 
                style: style_river_8,
                popuplayertitle: 'river',
                interactive: false,
                title: '<img src="styles/legend/river_8.png" /> river'
            });
var group_coursdeaux = new ol.layer.Group({
                                layers: [lyr_river_8,],
                                fold: "open",
                                title: 'cours d\'eaux'});
var group_Waypoints_02FEV25 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Waypoints_02-FEV-25'});

lyr_OpenStreetMap_0.setVisible(true);lyr_EsriImagery_1.setVisible(true);lyr_LicenseExport_2.setVisible(true);lyr_SAGSMD_3.setVisible(true);lyr_limite_sousprefecture_4.setVisible(true);lyr_COULOIRS_ARTISANAUX_5.setVisible(true);lyr_CHEF_LIEUX_SIGUIRI_PREFECTURES_6.setVisible(true);lyr_PARCELLES_7.setVisible(true);lyr_river_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EsriImagery_1,lyr_LicenseExport_2,lyr_SAGSMD_3,lyr_limite_sousprefecture_4,lyr_COULOIRS_ARTISANAUX_5,lyr_CHEF_LIEUX_SIGUIRI_PREFECTURES_6,lyr_PARCELLES_7,group_coursdeaux];
lyr_LicenseExport_2.set('fieldAliases', {'Code': 'Code', 'Ancien_C': 'Ancien_C', 'Nom': 'Nom', 'Parties': 'Parties', 'Type': 'Type', 'Intérêt': 'Intérêt', 'Substanc': 'Substanc', 'Statut': 'Statut', 'Date_Sou': 'Date_Sou', 'Date_dO': 'Date_dO', 'Date_de_': 'Date_de_', 'Date_du_': 'Date_du_', 'Date_Let': 'Date_Let', 'superfic': 'superfic', 'Référenc': 'Référenc', 'guidShap': 'guidShap', 'guidLice': 'guidLice', 'PartName': 'PartName', });
lyr_SAGSMD_3.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'PERIMETER': 'PERIMETER', 'ENCLOSED_A': 'ENCLOSED_A', 'id': 'id', });
lyr_limite_sousprefecture_4.set('fieldAliases', {'ADM3_NAME': 'ADM3_NAME', 'ADM3_CODE': 'ADM3_CODE', 'ADM2_NAME': 'ADM2_NAME', 'ADM2_CODE': 'ADM2_CODE', 'ADM1_NAME': 'ADM1_NAME', 'ADM1_CODE': 'ADM1_CODE', 'CNTRY_NAME': 'CNTRY_NAME', 'CNTRY_CODE': 'CNTRY_CODE', 'WHO_CODE': 'WHO_CODE', });
lyr_COULOIRS_ARTISANAUX_5.set('fieldAliases', {'id': 'id', 'site': 'site', 'prefecture': 'prefecture', 'sous_pref': 'sous_pref', });
lyr_CHEF_LIEUX_SIGUIRI_PREFECTURES_6.set('fieldAliases', {'ID': 'ID', 'Noms': 'Noms', 'Villetype': 'Villetype', 'index': 'index', 'X': 'X', 'Y': 'Y', });
lyr_PARCELLES_7.set('fieldAliases', {'id': 'id', 'TYPE': 'TYPE', 'DISTRICT': 'DISTRICT', 'GERANT': 'GERANT', 'SOUS_PREF': 'SOUS_PREF', 'GROUPEMENT': 'GROUPEMENT', });
lyr_river_8.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_LicenseExport_2.set('fieldImages', {'Code': 'TextEdit', 'Ancien_C': 'TextEdit', 'Nom': 'TextEdit', 'Parties': 'TextEdit', 'Type': 'TextEdit', 'Intérêt': 'TextEdit', 'Substanc': 'TextEdit', 'Statut': 'TextEdit', 'Date_Sou': 'DateTime', 'Date_dO': 'DateTime', 'Date_de_': 'DateTime', 'Date_du_': 'DateTime', 'Date_Let': 'DateTime', 'superfic': 'TextEdit', 'Référenc': 'TextEdit', 'guidShap': 'TextEdit', 'guidLice': 'TextEdit', 'PartName': 'TextEdit', });
lyr_SAGSMD_3.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'PERIMETER': 'TextEdit', 'ENCLOSED_A': 'TextEdit', 'id': 'TextEdit', });
lyr_limite_sousprefecture_4.set('fieldImages', {'ADM3_NAME': 'TextEdit', 'ADM3_CODE': 'TextEdit', 'ADM2_NAME': 'TextEdit', 'ADM2_CODE': 'TextEdit', 'ADM1_NAME': 'TextEdit', 'ADM1_CODE': 'TextEdit', 'CNTRY_NAME': 'TextEdit', 'CNTRY_CODE': 'TextEdit', 'WHO_CODE': 'TextEdit', });
lyr_COULOIRS_ARTISANAUX_5.set('fieldImages', {'id': 'TextEdit', 'site': 'TextEdit', 'prefecture': 'TextEdit', 'sous_pref': 'TextEdit', });
lyr_CHEF_LIEUX_SIGUIRI_PREFECTURES_6.set('fieldImages', {'ID': 'TextEdit', 'Noms': 'TextEdit', 'Villetype': 'TextEdit', 'index': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_PARCELLES_7.set('fieldImages', {'id': 'TextEdit', 'TYPE': 'TextEdit', 'DISTRICT': 'TextEdit', 'GERANT': 'TextEdit', 'SOUS_PREF': 'TextEdit', 'GROUPEMENT': 'TextEdit', });
lyr_river_8.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr_LicenseExport_2.set('fieldLabels', {'Code': 'no label', 'Ancien_C': 'no label', 'Nom': 'header label - visible with data', 'Parties': 'no label', 'Type': 'header label - always visible', 'Intérêt': 'no label', 'Substanc': 'header label - visible with data', 'Statut': 'no label', 'Date_Sou': 'no label', 'Date_dO': 'no label', 'Date_de_': 'no label', 'Date_du_': 'no label', 'Date_Let': 'no label', 'superfic': 'no label', 'Référenc': 'no label', 'guidShap': 'no label', 'guidLice': 'no label', 'PartName': 'no label', });
lyr_SAGSMD_3.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'PERIMETER': 'no label', 'ENCLOSED_A': 'no label', 'id': 'no label', });
lyr_limite_sousprefecture_4.set('fieldLabels', {'ADM3_NAME': 'no label', 'ADM3_CODE': 'no label', 'ADM2_NAME': 'no label', 'ADM2_CODE': 'no label', 'ADM1_NAME': 'no label', 'ADM1_CODE': 'no label', 'CNTRY_NAME': 'no label', 'CNTRY_CODE': 'no label', 'WHO_CODE': 'no label', });
lyr_COULOIRS_ARTISANAUX_5.set('fieldLabels', {'id': 'no label', 'site': 'header label - always visible', 'prefecture': 'header label - always visible', 'sous_pref': 'header label - always visible', });
lyr_CHEF_LIEUX_SIGUIRI_PREFECTURES_6.set('fieldLabels', {'ID': 'no label', 'Noms': 'no label', 'Villetype': 'no label', 'index': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_PARCELLES_7.set('fieldLabels', {'id': 'inline label - always visible', 'TYPE': 'header label - always visible', 'DISTRICT': 'header label - always visible', 'GERANT': 'hidden field', 'SOUS_PREF': 'header label - always visible', 'GROUPEMENT': 'header label - always visible', });
lyr_river_8.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr_river_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});