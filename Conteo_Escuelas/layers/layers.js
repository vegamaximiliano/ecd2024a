var wms_layers = [];

var format_ConteoEscuelas_0 = new ol.format.GeoJSON();
var features_ConteoEscuelas_0 = format_ConteoEscuelas_0.readFeatures(json_ConteoEscuelas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConteoEscuelas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConteoEscuelas_0.addFeatures(features_ConteoEscuelas_0);
var lyr_ConteoEscuelas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConteoEscuelas_0, 
                style: style_ConteoEscuelas_0,
                popuplayertitle: "Conteo Escuelas",
                interactive: true,
    title: 'Conteo Escuelas<br />\
    <img src="styles/legend/ConteoEscuelas_0_0.png" /> 1 - 153<br />\
    <img src="styles/legend/ConteoEscuelas_0_1.png" /> 153 - 365<br />\
    <img src="styles/legend/ConteoEscuelas_0_2.png" /> 365 - 732<br />\
    <img src="styles/legend/ConteoEscuelas_0_3.png" /> 732 - 1254<br />\
    <img src="styles/legend/ConteoEscuelas_0_4.png" /> 1254 - 4743<br />'
        });
var group_ign_riesgopoblacion_departamentos_indec_2022 = new ol.layer.Group({
                                layers: [lyr_ConteoEscuelas_0,],
                                fold: "open",
                                title: "ign_riesgo:poblacion_departamentos_indec_2022"});

lyr_ConteoEscuelas_0.setVisible(true);
var layersList = [group_ign_riesgopoblacion_departamentos_indec_2022];
lyr_ConteoEscuelas_0.set('fieldAliases', {'departamento': 'departamento', 'escuelas': 'escuelas', });
lyr_ConteoEscuelas_0.set('fieldImages', {'departamento': 'TextEdit', 'escuelas': 'TextEdit', });
lyr_ConteoEscuelas_0.set('fieldLabels', {'departamento': 'no label', 'escuelas': 'no label', });
lyr_ConteoEscuelas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});