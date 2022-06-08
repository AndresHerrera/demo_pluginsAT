var mapOptions = {
	zoomControl: false
}
		 
var map = L.map('map',mapOptions).setView([51.505, -0.09], 13);

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	
//control zoom box
var zoomBoxControl = L.control.zoomBox({
	addToZoomControl: false,
	modal: false,
	className:"leaflet-zoom-box-icon"
});

map.addControl(zoomBoxControl);

//control escala grafica
var scaleGraph = L.control.betterscale({
	metric:true,
	imperial:false,
	maxWidth:200,
});
map.addControl(scaleGraph);

//control medicion area y longitud 

//Personalizo el componente
L.Measure = {
    linearMeasurement: "Medición distancias",
    areaMeasurement: "Medición de áreas",
    start: "Inicio",
    meter: "m",
    kilometer: "km",
    squareMeter: "m²",
    squareKilometers: "km²",
    };


/*
var measureControl = L.control.measure({});
map.addControl(measureControl);
*/

//Control imprimir mapa 

var printerControl = L.easyPrint({
      		hidden:true,
      		sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
      		filename: 'myMap',
      		exportOnly: true,
      		hideControlContainer: true
});

map.addControl(printerControl);	
		

zoomInBtn.addEventListener("click", function()
{ 
	map.zoomIn(); 
});

zoomOutBtn.addEventListener("click", function()
{ 
	map.zoomOut();  
});

zoomBoxBtn.addEventListener("click", function()
{ 
	zoomBoxControl.activate(); 
});



measureDistanceBtn.addEventListener("click", function()
{ 
	var measureAction = new L.MeasureAction(map, {
		model: "distance",
		color:"#0000FF",
	});
	measureAction.enable();
});


measureAreaBtn.addEventListener("click", function()
{ 
	var measureAction = new L.MeasureAction(map, {
		model: "area",
		color:"#FF0000",
	});
	measureAction.enable();
});

printBtn1.addEventListener("click", function()
{ 
	printerControl.printMap('CurrentSize', 'impresion1')
});

printBtn2.addEventListener("click", function()
{ 
	printerControl.printMap('A4Portrait page', 'impresion2')
});

printBtn3.addEventListener("click", function()
{ 
	printerControl.printMap('A4Landscape page', 'impresion3')
});
		
		