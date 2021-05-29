/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 4
Version: 4.4.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/admin/
*/


var handleGoogleMapSetting = function () {
	"use strict";
	var map;

	var defaultMapStyles = [];
	var flatMapStyles = [{
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "road",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#ffffff"
		}]
	}, {
		"featureType": "road.arterial",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#fee379"
		}]
	}, {
		"featureType": "road.highway",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#fee379"
		}]
	}, {
		"featureType": "landscape",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#f3f4f4"
		}]
	}, {
		"featureType": "water",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#7fc8ed"
		}]
	}, {}, {
		"featureType": "road",
		"elementType": "labels",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "poi.park",
		"elementType": "geometry.fill",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#83cead"
		}]
	}, {
		"elementType": "labels",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "landscape.man_made",
		"elementType": "geometry",
		"stylers": [{
			"weight": 0.9
		}, {
			"visibility": "off"
		}]
	}];
	var turquoiseWaterStyles = [{
		"featureType": "landscape.natural",
		"elementType": "geometry.fill",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#e0efef"
		}]
	}, {
		"featureType": "poi",
		"elementType": "geometry.fill",
		"stylers": [{
			"visibility": "on"
		}, {
			"hue": "#1900ff"
		}, {
			"color": "#c0e8e8"
		}]
	}, {
		"featureType": "landscape.man_made",
		"elementType": "geometry.fill"
	}, {
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [{
			"lightness": 100
		}, {
			"visibility": "simplified"
		}]
	}, {
		"featureType": "road",
		"elementType": "labels",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "water",
		"stylers": [{
			"color": "#7dcdcd"
		}]
	}, {
		"featureType": "transit.line",
		"elementType": "geometry",
		"stylers": [{
			"visibility": "on"
		}, {
			"lightness": 700
		}]
	}];
	var icyBlueStyles = [{
		"stylers": [{
			"hue": "#2c3e50"
		}, {
			"saturation": 250
		}]
	}, {
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [{
			"lightness": 50
		}, {
			"visibility": "simplified"
		}]
	}, {
		"featureType": "road",
		"elementType": "labels",
		"stylers": [{
			"visibility": "off"
		}]
	}];
	var oldDryMudStyles = [{
		"featureType": "landscape",
		"stylers": [{
			"hue": "#FFAD00"
		}, {
			"saturation": 50.2
		}, {
			"lightness": -34.8
		}, {
			"gamma": 1
		}]
	}, {
		"featureType": "road.highway",
		"stylers": [{
			"hue": "#FFAD00"
		}, {
			"saturation": -19.8
		}, {
			"lightness": -1.8
		}, {
			"gamma": 1
		}]
	}, {
		"featureType": "road.arterial",
		"stylers": [{
			"hue": "#FFAD00"
		}, {
			"saturation": 72.4
		}, {
			"lightness": -32.6
		}, {
			"gamma": 1
		}]
	}, {
		"featureType": "road.local",
		"stylers": [{
			"hue": "#FFAD00"
		}, {
			"saturation": 74.4
		}, {
			"lightness": -18
		}, {
			"gamma": 1
		}]
	}, {
		"featureType": "water",
		"stylers": [{
			"hue": "#00FFA6"
		}, {
			"saturation": -63.2
		}, {
			"lightness": 38
		}, {
			"gamma": 1
		}]
	}, {
		"featureType": "poi",
		"stylers": [{
			"hue": "#FFC300"
		}, {
			"saturation": 54.2
		}, {
			"lightness": -14.4
		}, {
			"gamma": 1
		}]
	}];
	var cobaltStyles = [{
		"featureType": "all",
		"elementType": "all",
		"stylers": [{
			"invert_lightness": true
		}, {
			"saturation": 10
		}, {
			"lightness": 10
		}, {
			"gamma": 0.8
		}, {
			"hue": "#293036"
		}]
	}, {
		"featureType": "water",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#293036"
		}]
	}];
	var darkRedStyles = [{
		"featureType": "all",
		"elementType": "all",
		"stylers": [{
			"invert_lightness": true
		}, {
			"saturation": 10
		}, {
			"lightness": 10
		}, {
			"gamma": 0.8
		}, {
			"hue": "#000000"
		}]
	}, {
		"featureType": "water",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#293036"
		}]
	}];

	var mapProp = {
		zoom: 12,
		center: new google.maps.LatLng(-1.148889, 116.903056),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		// disableDefaultUI: true,
		styles: turquoiseWaterStyles
	};
	map = new google.maps.Map(document.getElementById('google-map-default'), mapProp);

	$(window).resize(function () {
		google.maps.event.trigger(map, "resize");
	});




	$('[data-map-theme]').click(function () {
		var targetTheme = $(this).attr('data-map-theme');
		var targetLi = $(this).closest('li');
		var targetText = $(this).text();
		var inverseContentMode = false;
		$('#map-theme-selection li').not(targetLi).removeClass('active');
		$('#map-theme-text').text(targetText);
		$(targetLi).addClass('active');

		switch (targetTheme) {
			case 'flat':
				map.setOptions({
					styles: flatMapStyles
				});
				break;
			case 'turquoise-water':
				map.setOptions({
					styles: turquoiseWaterStyles
				});
				break;
			case 'icy-COLOR_BLUE':
				map.setOptions({
					styles: icyBlueStyles
				});
				break;
			case 'cobalt':
				map.setOptions({
					styles: cobaltStyles
				});
				inverseContentMode = true;
				break;
			case 'old-dry-mud':
				map.setOptions({
					styles: oldDryMudStyles
				});
				break;
			case 'dark-red':
				map.setOptions({
					styles: darkRedStyles
				});
				inverseContentMode = true;
				break;
			default:
				map.setOptions({
					styles: defaultMapStyles
				});
				break;
		}

		if (inverseContentMode === true) {
			$('#content').addClass('content-inverse-mode');
		} else {
			$('#content').removeClass('content-inverse-mode');
		}
	});

}; //disini

var MapGoogle = function () {
	"use strict";
	return {
		//main function
		init: function () {
			handleGoogleMapSetting();
			initialize();
		}
	};
}();
// 

var data1_tower = [];
var data1_bekapai = [];
var data1_tigagenerasi = [];
var data1_strukturjalan = [];

var data1_pantaimanggar = [];
var data1_pantailamaru = [];
var data1_pantaikemala = [];
var data1_stadionbatakan = [];
var data1_pantaimelawai = [];
var data1_hutanglindungsungaiwain = [];
var data1_kwplhberuangmadu = [];
var data1_penangkaranbuaya = [];
var data1_mangrovegraha = [];
var data1_mangrovemargomulyo = [];
var data1_sikt = [];
var data1_siks = [];
var data1_kampungatasairbarutengah = [];
var data1_kebunrayabalikpapan = [];
var data1_islamiccentre = [];
var data1_monpera = [];
var data1_museumjepangkampungbaru = [];
var data1_creativecenter = [];
var data1_tpamanggar = [];
var data1_dome = [];



var dataopkecamatan = [];
var total;
var itsel = 0;
var ic;
$("#layer_tower").change(function () {
	if ($(this).prop("checked") == true) {

		if (data1_tower.length == '0') {
			data1_tower = new google.maps.Data();
			data1_tower.loadGeoJson('/tower');

			$.getJSON("/tower",
				function (data) {
					total = data.features.length;
					//  $.each(data.features, function (i, v) { 
					//     console.log(v['properties']['KODE_PERUS'])
					//     if(v['properties']['KODE_PERUS']=='TELKOMSEL'){
					//       return itsel++;
					//     }
					//     console.log(itsel);
					//  });
					//  alert(itsel);
					$("#ttl_tower").text(' (' + data.features.length + ')');
				}
			);


			data1_tower.setStyle(function (feature) {
				var typeperusahaan = feature.getProperty('KODE_PERUS');
				if (typeperusahaan == 'INDOSAT') {

					ic = '/public/assets/img/tower_indosat.png';
				} else if (typeperusahaan == 'TELKOMSEL') {
					ic = '/public/assets/img/tower-tsel.png';
				} else if (typeperusahaan == 'XL') {
					ic = '/public/assets/img/tower-xl.png';
				} else if (typeperusahaan == 'THREE') {
					ic = '/public/assets/img/tower-three.png';
				} else {
					ic = '/public/assets/img/tower-transmissions.png'
				}
				return {
					icon: ic
				}
				// data1_tower.revertStyle();

			})

			data1_tower.addListener('click', function (event) {
				$("#isi_tematik").html('');
				$("#btn_modal_tematik").trigger("click");
				$("#isi_tematik").append(
					'<ul><li><b>SITE ID: ' + event.feature.getProperty('SITE_ID') + '</b></li>' +
					'<li><b>REGISTER: ' + event.feature.getProperty('REGISTER') + '</b></li>' +
					'<li><b>NPWRD: ' + event.feature.getProperty('NPWRD') + '</b></li>' +
					'<li><b>SITE NAME: ' + event.feature.getProperty('SITE_NAME') + '</b></li>' +
					'<li><b>ALAMAT: ' + event.feature.getProperty('LOKASI_MEN') + '</b></li>' +
					'<li><b>KECAMATAN: ' + event.feature.getProperty('KEC') + '</b></li>' +
					'<li><b>KELURAHAN: ' + event.feature.getProperty('KEL') + '</b></li>' +
					'<li><b>KODE PERUSAHAAN: ' + event.feature.getProperty('KODE_PERUS') + '</b></li>' +
					'<li><b>LUAS LOKASI: ' + event.feature.getProperty('LUAS_LOKAS') + '</b></li>' +
					'<li><b>JENIS MENARA: ' + event.feature.getProperty('JENIS_MENA') + '</b></li>' +
					'<li><b>LATITUDE: ' + event.feature.getProperty('LATITUDE') + '</b></li>' +
					'<li><b>LONGITUDE: ' + event.feature.getProperty('LONGITUDE') + '</b></li>' +
					'<li><b>TINGGI TOWER: ' + event.feature.getProperty('TINGGI_TOW') + '</b></li>' +
					'</ul>'
				)
				$("#loadingtematik").hide();

			});
		} else {
			data1_tower = data1_tower;
			$("#ttl_tower").text(' (' + total + ')');
		}

		data1_tower.setMap(map);
		map.setZoom(12);
	} else {
		data1_tower.setMap(null);
		map.setZoom(12);
	}
})
$("#layer_bekapai").change(function () {
	if ($(this).prop("checked") == true) {
		console.log('tampil');
		data1_bekapai = new google.maps.Data();
		data1_bekapai.loadGeoJson('/bekapai');
		data1_bekapai.setStyle(function (feature) {
			data1_bekapai.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}

		})

		data1_bekapai.setMap(map);
		var latLng = new google.maps.LatLng(-1.2768149, 116.8338892); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_bekapai.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();

		});
		console.log('tampil')
	} else {
		console.log('tidak');

		data1_bekapai.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_tigagenerasi").change(function () {
	if ($(this).prop("checked") == true) {
		data1_tigagenerasi = new google.maps.Data();
		data1_tigagenerasi.loadGeoJson('/tigagenerasi');
		data1_tigagenerasi.setStyle(function (feature) {
			data1_tigagenerasi.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_tigagenerasi.setMap(map);
		var latLng = new google.maps.LatLng(-1.242135, 116.895463); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_tigagenerasi.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_tigagenerasi.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_pantaimanggar").change(function () {
	if ($(this).prop("checked") == true) {
		data1_pantaimanggar = new google.maps.Data();
		data1_pantaimanggar.loadGeoJson('/pantaimanggar');
		data1_pantaimanggar.setStyle(function (feature) {
			data1_pantaimanggar.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_pantaimanggar.setMap(map);
		var latLng = new google.maps.LatLng(-1.208121, 116.987409); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_pantaimanggar.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_pantaimanggar.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_pantailamaru").change(function () {
	if ($(this).prop("checked") == true) {
		data1_pantailamaru = new google.maps.Data();
		data1_pantailamaru.loadGeoJson('/pantailamaru');
		data1_pantailamaru.setStyle(function (feature) {
			data1_pantailamaru.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_pantailamaru.setMap(map);
		var latLng = new google.maps.LatLng(-1.202898, 116.997097); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_pantailamaru.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_pantailamaru.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_pantaikemala").change(function () {
	if ($(this).prop("checked") == true) {
		data1_pantaikemala = new google.maps.Data();
		data1_pantaikemala.loadGeoJson('/pantaikemala');
		data1_pantaikemala.setStyle(function (feature) {
			data1_pantaikemala.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_pantaikemala.setMap(map);
		var latLng = new google.maps.LatLng(-1.280693, 116.817487); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_pantaikemala.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_pantaikemala.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_stadionbatakan").change(function () {
	if ($(this).prop("checked") == true) {
		data1_stadionbatakan = new google.maps.Data();
		data1_stadionbatakan.loadGeoJson('/stadionbatakan');
		data1_stadionbatakan.setStyle(function (feature) {
			data1_stadionbatakan.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_stadionbatakan.setMap(map);
		var latLng = new google.maps.LatLng(-1.233121, 116.943968); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_stadionbatakan.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_stadionbatakan.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_pantaimelawai").change(function () {
	if ($(this).prop("checked") == true) {
		data1_pantaimelawai = new google.maps.Data();
		data1_pantaimelawai.loadGeoJson('/pantaimelawai');
		data1_pantaimelawai.setStyle(function (feature) {
			data1_pantaimelawai.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_pantaimelawai.setMap(map);
		var latLng = new google.maps.LatLng(-1.278547, 116.810365); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_pantaimelawai.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_pantaimelawai.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_hutanglindungsungaiwain").change(function () {
	if ($(this).prop("checked") == true) {
		data1_hutanglindungsungaiwain = new google.maps.Data();
		data1_hutanglindungsungaiwain.loadGeoJson('/hutanglindungsungaiwain');
		data1_hutanglindungsungaiwain.setStyle(function (feature) {
			data1_hutanglindungsungaiwain.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_hutanglindungsungaiwain.setMap(map);
		var latLng = new google.maps.LatLng(-1.145731, 116.838664); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_hutanglindungsungaiwain.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_hutanglindungsungaiwain.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_kwplhberuangmadu").change(function () {
	if ($(this).prop("checked") == true) {
		data1_kwplhberuangmadu = new google.maps.Data();
		data1_kwplhberuangmadu.loadGeoJson('/kwplhberuangmadu');
		data1_kwplhberuangmadu.setStyle(function (feature) {
			data1_kwplhberuangmadu.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_kwplhberuangmadu.setMap(map);
		var latLng = new google.maps.LatLng(-1.109581, 116.904238); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_kwplhberuangmadu.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_kwplhberuangmadu.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_penangkaranbuaya").change(function () {
	if ($(this).prop("checked") == true) {
		data1_penangkaranbuaya = new google.maps.Data();
		data1_penangkaranbuaya.loadGeoJson('/penangkaranbuaya');
		data1_penangkaranbuaya.setStyle(function (feature) {
			data1_penangkaranbuaya.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_penangkaranbuaya.setMap(map);
		var latLng = new google.maps.LatLng(-1.170395, 117.005658); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_penangkaranbuaya.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_penangkaranbuaya.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_mangrovegraha").change(function () {
	if ($(this).prop("checked") == true) {
		data1_mangrovegraha = new google.maps.Data();
		data1_mangrovegraha.loadGeoJson('/mangrovegraha');
		data1_mangrovegraha.setStyle(function (feature) {
			data1_mangrovegraha.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_mangrovegraha.setMap(map);
		var latLng = new google.maps.LatLng(-1.193318, 116.845582); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_mangrovegraha.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_mangrovegraha.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_mangrovemargomulyo").change(function () {
	if ($(this).prop("checked") == true) {
		data1_mangrovemargomulyo = new google.maps.Data();
		data1_mangrovemargomulyo.loadGeoJson('/mangrovemargomulyo');
		data1_mangrovemargomulyo.setStyle(function (feature) {
			data1_mangrovemargomulyo.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_mangrovemargomulyo.setMap(map);
		var latLng = new google.maps.LatLng(-1.225969, 116.823891); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_mangrovemargomulyo.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_mangrovemargomulyo.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_sikt").change(function () {
	if ($(this).prop("checked") == true) {
		data1_sikt = new google.maps.Data();
		data1_sikt.loadGeoJson('/sikt');
		data1_sikt.setStyle(function (feature) {
			data1_sikt.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_sikt.setMap(map);
		var latLng = new google.maps.LatLng(-1.147472, 117.010290); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_sikt.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_sikt.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_siks").change(function () {
	if ($(this).prop("checked") == true) {
		data1_siks = new google.maps.Data();
		data1_siks.loadGeoJson('/siks');
		data1_siks.setStyle(function (feature) {
			data1_siks.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_siks.setMap(map);
		var latLng = new google.maps.LatLng(-1.215539, 116.831531); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_siks.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_siks.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_monpera").change(function () {
	if ($(this).prop("checked") == true) {
		data1_monpera = new google.maps.Data();
		data1_monpera.loadGeoJson('/monpera');
		data1_monpera.setStyle(function (feature) {
			data1_monpera.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_monpera.setMap(map);
		var latLng = new google.maps.LatLng(-1.279149, 116.822275); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_monpera.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_monpera.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_kampungatasairbarutengah").change(function () {
	if ($(this).prop("checked") == true) {
		data1_kampungatasairbarutengah = new google.maps.Data();
		data1_kampungatasairbarutengah.loadGeoJson('/kampungatasairbarutengah');
		data1_kampungatasairbarutengah.setStyle(function (feature) {
			data1_kampungatasairbarutengah.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_kampungatasairbarutengah.setMap(map);
		var latLng = new google.maps.LatLng(-1.238059, 116.815812); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_kampungatasairbarutengah.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_kampungatasairbarutengah.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_kebunrayabalikpapan").change(function () {
	if ($(this).prop("checked") == true) {
		data1_kebunrayabalikpapan = new google.maps.Data();
		data1_kebunrayabalikpapan.loadGeoJson('/kebunrayabalikpapan');
		data1_kebunrayabalikpapan.setStyle(function (feature) {
			data1_kebunrayabalikpapan.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_kebunrayabalikpapan.setMap(map);
		var latLng = new google.maps.LatLng(-1.136435, 116.857977); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_kebunrayabalikpapan.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_kebunrayabalikpapan.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_islamiccentre").change(function () {
	if ($(this).prop("checked") == true) {
		data1_islamiccentre = new google.maps.Data();
		data1_islamiccentre.loadGeoJson('/islamiccentre');
		data1_islamiccentre.setStyle(function (feature) {
			data1_islamiccentre.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_islamiccentre.setMap(map);
		var latLng = new google.maps.LatLng(-1.237980, 116.881991); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_islamiccentre.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_islamiccentre.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_museumjepangkampungbaru").change(function () {
	if ($(this).prop("checked") == true) {
		data1_museumjepangkampungbaru = new google.maps.Data();
		data1_museumjepangkampungbaru.loadGeoJson('/museumjepangkampungbaru');
		data1_museumjepangkampungbaru.setStyle(function (feature) {
			data1_museumjepangkampungbaru.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_museumjepangkampungbaru.setMap(map);
		var latLng = new google.maps.LatLng(-1.230930, 116.817121); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_museumjepangkampungbaru.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_museumjepangkampungbaru.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_creativecenter").change(function () {
	if ($(this).prop("checked") == true) {
		data1_creativecenter = new google.maps.Data();
		data1_creativecenter.loadGeoJson('/creativecenter');
		data1_creativecenter.setStyle(function (feature) {
			data1_creativecenter.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_creativecenter.setMap(map);
		var latLng = new google.maps.LatLng(-1.276969, 116.833248); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_creativecenter.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_creativecenter.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_dome").change(function () {
	if ($(this).prop("checked") == true) {
		data1_dome = new google.maps.Data();
		data1_dome.loadGeoJson('/dome');
		data1_dome.setStyle(function (feature) {
			data1_dome.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_dome.setMap(map);
		var latLng = new google.maps.LatLng(-1.242764, 116.890093); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_dome.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_dome.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_tpamanggar").change(function () {
	if ($(this).prop("checked") == true) {
		data1_tpamanggar = new google.maps.Data();
		data1_tpamanggar.loadGeoJson('/tpamanggar');
		data1_tpamanggar.setStyle(function (feature) {
			data1_tpamanggar.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#55efc4',
				strokeWeight: 1,
			}
		})
		data1_tpamanggar.setMap(map);
		var latLng = new google.maps.LatLng(-1.213076, 116.938508); //Makes a latlng
		map.panTo(latLng); //Make map global
		map.setZoom(18);
		data1_tpamanggar.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('description') + ''
			)
			$("#loadingtematik").hide();
		});
	} else {
		data1_tpamanggar.setMap(null);
		map.setZoom(14);
	}
})
$("#layer_strukturjalan").change(function () {
	if ($(this).prop("checked") == true) {
		data1_strukturjalan = new google.maps.Data();
		data1_strukturjalan.loadGeoJson('/strukturjalan');
		data1_strukturjalan.setStyle(function (feature) {
			data1_strukturjalan.revertStyle();
			return {
				fillColor: '#00b894',
				strokeColor: '#ecf0f1',
				strokeWeight: 2,
			}

		})

		data1_strukturjalan.setMap(map);

		map.setZoom(12);
		data1_strukturjalan.addListener('click', function (event) {
			$("#isi_tematik").html('');
			$("#btn_modal_tematik").trigger("click");
			$("#isi_tematik").append(
				'' + event.feature.getProperty('KETERANGAN') + ''
			)
			$("#loadingtematik").hide();

		});

	} else {
		data1_strukturjalan.setMap(null);
		map.setZoom(12);
	}
})
// 
function numberWithCommas(x) {
	// return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	// console.log('bbb');
}

var x = new google.maps.LatLng(-1.148889, 116.903056);

$('#selectKelurahan').change(function () {
	var opKecamatan = $("#selectKecamatan").val();

	var opKelurahan = $("#selectKelurahan").val();
	var rtarray = [];

	function sortNumber(a, b) {
		return a - b;
	}
	if (opKecamatan != 'ALL' && opKelurahan != 'ALL') {
		$.getJSON('/teritory/' + opKecamatan + '/' + opKelurahan, function (x, y) {
			if (x.data[0]['values'] != null) {
				$.each(x.data, function (i, v) {
					rtarray.push(v['values']);
				})
				$("#selectRT").html('');
				$("#selectRT").append('<option></option><option> ALL</option>');
				$.each(rtarray.sort(sortNumber), function (i, v) {
					console.log(v);
					$("#selectRT").append('<option value=' + v + '> RT ' + v + '</option>')
				})
			} else {
				$("#selectRT").html('');
				$("#selectRT").append('<option value=""></option><option>ALL</option>');
				console.log('null');
			}
		})
	}


})

$("#switch_bangunan").change(function () {
	if (this.checked) {
		//Do stuff
		initialize('');
		bangunandetail('all');
		console.log('tampil bangunan');
	} else {
		initialize();
		// marker.setVisible(true);
		$('#content-menu').prop('hidden', true);
		console.log('hidden bangunan');
	}
});
// toggle kecamatan
$('#selectKecamatan').change(function () {
	$("#selectKelurahan").html('');
	$("#selectRT").html('');

	var opKecamatan = $('#selectKecamatan').val();
	/* Act on the event */
	$("#selectRT").append('<option></option><option>ALL</option>');

	$("#selectKelurahan").append('<option></option><option>ALL</option>');
	if (opKecamatan == 'balikpapan timur') {
		$("#selectKelurahan").append(
			'<option>Lamaru</option><option>Manggar</option><option>Manggar Baru</option><option>Teritip</option>'
		);
		console.log('timur');

	} else if (opKecamatan == 'balikpapan utara') {
		$("#selectKelurahan").append(
			'<option>Batu Ampar</option><option>Graha Indah</option><option>Gunung Samarinda</option><option>Gunung Samarinda Baru</option><option>Karang Joang</option><option>Muara Rapak</option>'
		);
		console.log('utara');

	} else if (opKecamatan == 'balikpapan tengah') {
		$("#selectKelurahan").append(
			'<option>Gunung Sari Ilir</option><option>Gunung Sari Ulu</option><option>Karang Jati</option><option>Karang Rejo</option><option>Mekar Sari</option><option>Sumber Rejo</option>'
		);
		console.log('tengah');

	} else if (opKecamatan == 'balikpapan selatan') {
		$("#selectKelurahan").append(
			'<option>Damai Bahagia</option><option>Damai Baru</option><option>Gunung Bahagia</option><option>Sepinggan</option><option>Sepinggan Baru</option><option>Sepinggan Raya</option><option>Sungai Nangka</option>'
		);
		console.log('selatan');

	} else if (opKecamatan == 'balikpapan kota') {
		$("#selectKelurahan").append(
			'<option>Damai</option><option>Klandasan Ilir</option><option>Klandasan Ulu</option><option>Prapatan</option><option>Telaga Sari</option>'
		);
		console.log('kota');

	} else if (opKecamatan == 'balikpapan barat') {
		$("#selectKelurahan").append(
			'<option>Baru Ilir</option><option>Baru Tengah</option><option>Baru Ulu</option><option>Kariangau</option><option>Marga sari</option><option>Margo Mulyo</option>'
		);
	}
});

$("#btnShowMAP").click(function () {
	$("#layer_tower").prop("checked", false);
	$("#layer_bekapai").prop("checked", false);
	$("#layer_tigagenerasi").prop("checked", false);
	$("#layer_strukturjalan").prop("checked", false);
	$("#layer_pantaimanggar").prop("checked", false);
	$("#layer_pantailamaru").prop("checked", false);
	$("#layer_pantaikemala").prop("checked", false);
	$("#layer_pantaimelawai").prop("checked", false);
	$("#layer_stadionbatakan").prop("checked", false);
	$("#layer_hutanglindungsungaiwain").prop("checked", false);
	$("#layer_kwplhberuangmadu").prop("checked", false);
	$("#layer_penangkaranbuaya").prop("checked", false);
	$("#layer_mangrovegraha").prop("checked", false);
	$("#layer_sikt").prop("checked", false);
	$("#layer_mangrovemargomulyo").prop("checked", false);
	$("#layer_siks").prop("checked", false);
	$("#layer_kampungatasairbarutengah").prop("checked", false);
	$("#layer_kebunrayabalikpapan").prop("checked", false);
	$("#layer_islamiccentre").prop("checked", false);
	$("#layer_monpera").prop("checked", false);
	$("#layer_museumjepangkampungbaru").prop("checked", false);
	$("#layer_creativecenter").prop("checked", false);
	$("#layer_dome").prop("checked", false);
	$("#layer_tpamanggar").prop("checked", false);

	var opKecamatan = $('#selectKecamatan').val();
	var opRt = $('#selectRT').val();
	var opKelurahan = $('#selectKelurahan').val().toLowerCase();
	var opKelurahan2 = $('#selectKelurahan').val();

	opKelurahan2 = opKelurahan2.toLowerCase().replace(/\b[a-z]/g, function (letter) {
		return letter.toUpperCase();
	});

	var layer_1 = new google.maps.Data();

	layer_1.revertStyle();
	var balikpapanKECall;

	$('#content-menu').prop('hidden', true);
	$('#info-content-show').prop('hidden', false);


	if (opKecamatan == 'ALL' && opKelurahan == '' && opRt == '') {
		var balikpapanKECall = layer_1.loadGeoJson('/balikpapanKECall');
		initialize(balikpapanKECall);
		console.log(layer_1.loadGeoJson('/balikpapanKECall'));
		btnshowkec();
		console.log('1');
	} else if (opKecamatan != 'ALL' && opKelurahan == '' && opRt == '') {
		var geo = layer_1.loadGeoJson('/balikpapanKEC/' + opKecamatan);
		var optKecamatan = opKecamatan;
		initialize(geo);
		btnshowkec(optKecamatan);
		console.log('2');

	} else if (opKecamatan != 'ALL' && opKelurahan == 'all' && opRt == '') {
		var geo = layer_1.loadGeoJson('/balikpapanKELKEC/' + opKecamatan);
		initialize(geo);
		btnshowkel();
		console.log('3');

	} else if (opKecamatan != 'ALL' && opKelurahan != 'all' && opRt == '') {
		// layer_1.loadGeoJson('/balikpapanKEC/'+opKecamatan);
		var geo = layer_1.loadGeoJson('/balikpapanKEL/' + opKelurahan + '/' + opKecamatan);
		var optKelurahan = opKelurahan;

		initialize(geo);
		btnshowkel(optKelurahan);
		console.log('5');

	} else if (opKecamatan != 'ALL' && opKelurahan != 'all' && opRt == 'ALL') {
		var geo = layer_1.loadGeoJson('/balikpapanKELRT/' + opKelurahan2);
		initialize(geo);
		btnshowrt();
		console.log('6');
		console.log('/balikpapanKELRT/' + opKelurahan2);

	} else if (opKecamatan != 'ALL' && opKelurahan != 'all' && opRt != 'ALL') {
		// var geo = layer_1.loadGeoJson('/balikpapanKEL/'+opKelurahan);
		var geo = layer_1.loadGeoJson('/balikpapanRT/' + opKelurahan2 + '/' + opRt);
		var optKecamatan = opKecamatan;
		var optKelurahan = opKelurahan;
		var optRT = opRt;
		initialize(geo);
		btnshowrt(optKecamatan, optKelurahan, optRT);
		console.log('7');
		bangunandetail('satu');

	} else if (opKecamatan == 'ALL' && opKelurahan == 'all' && opRt == '') {
		var geo = layer_1.loadGeoJson('/balikpapanKEL');
		initialize(geo);
		btnshowkel();
		console.log('8');

	} else if (opKecamatan == 'ALL' && opKelurahan == 'all' && opRt == 'ALL') {
		var geo = layer_1.loadGeoJson('/balikpapanRT');
		initialize(geo);
		btnshowrt();
		console.log('9');

	}

	function btnshowrt(optKecamatan, optKelurahan, optRT) {
		$('#info-wilayah').text(optKelurahan);
		$('#info-wilayah').text(optKelurahan + ' RT' + optRT);

		$("#content-wilayah").html('');
		console.log('/bpprt/' + optKelurahan + '/' + optRT);
		$.getJSON('/bpprt/' + optKelurahan + '/' + optRT, function (x, y) {
			if (x.message == 'Failed!') {
				$("#content-wilayah").append(
					'Data Belum Tersedia');
			} else {
				$("#content-wilayah").append(
					'<tr><td><strong>Kecamatan : </strong></td><td>' + optKecamatan.toUpperCase() + ' </td></tr>' +
					'<tr><td><strong>Kelurahan : </strong></td><td>' + optKelurahan.toUpperCase() + ' </td></tr>' +
					'<tr><td><strong>RT : </strong></td><td>' + optRT.toUpperCase() + ' </td></tr>' +
					'<tr><td><strong>Jumlah Kepala Keluarga : </strong></td><td>' + x.data[0]['jml_kepala_keluarga'] + '</td></tr>' +
					'<tr><td><strong>Jumlah Penduduk Laki-Laki : </strong></td><td>' + x.data[0]['populasi_pria'] + '</td></tr>' +
					'<tr><td><strong>Jumlah Penduduk Perempuan : </strong></td><td>' + x.data[0]['populasi_wanita'] + '</td></tr>' +
					'<tr><td><strong>Jumlah Penduduk : </strong></td><td>' + x.data[0]['jumlah_penduduk'] + '</td></tr>' +
					'<tr><td><h4>Lingkungan</h4></td><td>&nbsp;</td></tr>' +
					'<tr><td><strong>Panjang Jalan : </strong></td><td>' + x.data[0]['panjang_jalan_meter'] + '</td></tr>' +
					'<tr><td><strong>Jalan Kondisi Baik : </strong></td><td>' + x.data[0]['panjang_jalan_baik'] + '</td></tr>' +
					'<tr><td><strong>Jalan Kondisi Rusak : </strong></td><td>' + x.data[0]['panjang_jalan_rusak'] + '</td></tr>' +
					'<tr><td><strong>Panjang Drainase : </strong></td><td>' + x.data[0]['panjang_drainase'] + '</td></tr>' +
					'<tr><td><strong>Bangunan memiliki drainase : </strong></td><td>' + x.data[0]['jml_bangunan_dgn_drainase'] + '</td></tr>' +
					'<tr><td><strong>Bangunan tidak memiliki drainase : </strong></td><td>' + x.data[0]['jml_bangunan_non_drainase'] + '</td></tr>'
				);
			}
			$("#loading").hide();
		});

		var infowindow = new google.maps.InfoWindow();
		infowindow.opened = false;

		layer_1.addListener('mouseout', function (event) {
			infowindow.close();
			infowindow.opened = false;
		});

		layer_1.setStyle(function (feature) {
			var SD_NAME = feature.getProperty('Name');
			var sd_kecamatan = feature.getProperty('Kecamatan');
			var sd_kelurahan = feature.getProperty('Kelurahan');
			var coor = feature.getGeometry('coordinates');
			var color = "black";
			var locations = [];

			if (sd_kelurahan == "Sepinggan Baru") {
				color = "";
				strokecolor = "#CCFF00";
			} else if (sd_kelurahan == "Sepinggan") {
				color = "";
				strokecolor = "#CCFFCC";
			} else if (sd_kelurahan == "Gunung Bahagia") {
				color = "";
				strokecolor = "#FFFF99";
			} else if (sd_kelurahan == "Damai Bahagia") {
				color = "";
				strokecolor = "#CCCC00";
			} else if (sd_kelurahan == "Damai Baru") {
				color = "";
				strokecolor = "#CCCCCC";
			} else if (sd_kelurahan == "Sumber Rejo") {
				color = "";
				strokecolor = "#FFCC99";
			} else if (sd_kelurahan == "Mekar Sari") {
				color = "";
				strokecolor = "#CC9900";
			} else if (sd_kelurahan == "Karang Rejo") {
				color = "";
				strokecolor = "#CC99CC";
			} else if (sd_kelurahan == "Karang Jati") {
				color = "";
				strokecolor = "#FF9999";
			} else if (sd_kelurahan == "Gunung Sari Ulu") {
				color = "";
				strokecolor = "#CC6600";
			} else if (sd_kelurahan == "Gunung Sari Ilir") {
				color = "";
				strokecolor = "#CC66CC";
			} else if (sd_kelurahan == "Muara Rapak") {
				color = "";
				strokecolor = "#FF6699";
			} else if (sd_kelurahan == "Karang Joang") {
				color = "";
				strokecolor = "#CC3300";
			} else if (sd_kelurahan == "Gunung Samarinda Baru") {
				color = "";
				strokecolor = "#CC33CC";
			} else if (sd_kelurahan == "Gunung Samarinda") {
				color = "";
				strokecolor = "#FF3399";
			} else if (sd_kelurahan == "Graha Indah") {
				color = "";
				strokecolor = "#CC0000";
			} else if (sd_kelurahan == "Batu Ampar") {
				color = "";
				strokecolor = "#CC00CC";
			} else if (sd_kelurahan == "Margo Mulyo") {
				color = "";
				strokecolor = "#FF0099";
			} else if (sd_kelurahan == "Marga Sari") {
				color = "";
				strokecolor = "#660000";
			} else if (sd_kelurahan == "Kariangau") {
				color = "";
				strokecolor = "#6600CC";
			} else if (sd_kelurahan == "Baru Ulu") {
				color = "";
				strokecolor = "#990099";
			} else if (sd_kelurahan == "Baru Tengah") {
				color = "";
				strokecolor = "#663300";
			} else if (sd_kelurahan == "Baru Ilir") {
				color = "";
				strokecolor = "#6633CC";
			} else if (sd_kelurahan == "Teritip") {
				color = "";
				strokecolor = "#993399";
			} else if (sd_kelurahan == "Manggar Baru") {
				color = "";
				strokecolor = "#666600";
			} else if (sd_kelurahan == "Manggar") {
				color = "";
				strokecolor = "#6666CC";
			} else if (sd_kelurahan == "Lamaru") {
				color = "";
				strokecolor = "#996699";
			} else if (sd_kelurahan == "Sepinggan Raya") {
				color = "";
				strokecolor = "#669900";
			} else if (sd_kelurahan == "Sungai Nangka") {
				color = "";
				strokecolor = "#6699CC";
			} else if (sd_kelurahan == "Damai") {
				color = "";
				strokecolor = "#999999";
			} else if (sd_kelurahan == "Klandasan Ilir") {
				color = "";
				strokecolor = "#66CC00";
			} else if (sd_kelurahan == "Klandasan Ulu") {
				color = "";
				strokecolor = "#66CCCC";
			} else if (sd_kelurahan == "Prapatan") {
				color = "";
				strokecolor = "#99CC99";
			} else if (sd_kelurahan == "Telaga Sari") {
				color = "";
				strokecolor = "#66FF00";
			}

			var bounds = new google.maps.LatLngBounds();
			if (Object.keys(coor.getAt(0).getAt(0)).length == 1) {
				for (var i = 0; i < coor.getAt(0).getAt(0).getArray().length; i++) {
					loc = coor.getAt(0).getAt(0).getAt(i);
					bounds.extend(loc);
					locations.push(loc);
					// console.log(locations);
				}
			} else {

				for (var i = 0; i < coor.getAt(0).getArray().length; i++) {
					loc = coor.getAt(0).getAt(i);
					bounds.extend(loc);
				}
			}

			center = bounds;
			map.fitBounds(bounds);

			return {
				fillColor: '#000000',
				strokeColor: strokecolor,
				//   strokeColor: '#BC1C1C',strokecolor
				strokeWeight: 1,
				// label: mapLabel,
			}

			layer_1.revertStyle();

		});

		layer_1.setMap(map);
		map.setZoom(14);


	};

	function btnshowkel(optKelurahan) {
		$('#info-wilayah').text(optKelurahan);
		$('#info-wilayah').text(optKelurahan);

		$("#content-wilayah").html('');
		$.getJSON('/bppkelurahan/' + optKelurahan, function (x, y) {
			if (x.message == 'Failed!') {
				$("#info-wilayah").text(optKelurahan.toUpperCase());
				$("#content-wilayah").append('Data Belum Tersedia');
			} else {
				$("#info-wilayah").text(optKelurahan.toUpperCase());
				$("#content-wilayah").append(
					'<tr><td><strong>Kecamatan : </strong></td><td>' + x.data[0]['nama_kecamatan'] + '</td></tr>' +
					'<tr><td><strong>Kelurahan : </strong></td><td>' + x.data[0]['nama_kelurahan'] + '</td></tr>' +
					'<tr><td><strong>Jumlah RT : </strong></td><td>' + x.data[0]['jumlah_rt'] + '</td></tr>' +
					'<tr><td><strong>Jumlah Kepala Keluarga : </strong></td><td>' + x.data[0]['jml_kepala_keluarga'] + '</td></tr>' +
					'<tr><td><strong>Jumlah Penduduk Laki-Laki : </strong></td><td>' + x.data[0]['populasi_pria'] + '</td></tr>' +
					'<tr><td><strong>Jumlah Penduduk Perempuan : </strong></td><td>' + x.data[0]['populasi_wanita'] + '</td></tr>' +
					'<tr><td><strong>Jumlah Penduduk : </strong></td><td>' + x.data[0]['jumlah_penduduk'] + '</td></tr>' +
					'<tr><td><h4>Lingkungan</h4></td><td>&nbsp;</td></tr>' +
					'<tr><td><strong>Panjang Jalan : </strong></td><td>' + x.data[0]['panjang_jalan_meter'] + '</td></tr>' +
					'<tr><td><strong>Jalan Kondisi Baik : </strong></td><td>' + x.data[0]['panjang_jalan_baik'] + '</td></tr>' +
					'<tr><td><strong>Jalan Kondisi Rusak : </strong></td><td>' + x.data[0]['panjang_jalan_rusak'] + '</td></tr>' +
					'<tr><td><strong>Panjang Drainase : </strong></td><td>' + x.data[0]['panjang_drainase'] + '</td></tr>' +
					'<tr><td><strong>Bangunan memiliki drainase : </strong></td><td>' + x.data[0]['jml_bangunan_dgn_drainase'] + '</td></tr>' +
					'<tr><td><strong>Bangunan tidak memiliki drainase : </strong></td><td>' + x.data[0]['jml_bangunan_non_drainase'] + '</td></tr>'
				);
			}
			$("#loading").hide();
		});

		layer_1.setStyle(function (feature) {
			var SD_NAME = feature.getProperty('Name');
			var coor = feature.getGeometry('coordinates');
			var color = "black";

			if (SD_NAME == "baru ilir" || SD_NAME == "marga sari" || SD_NAME == "baru tengah" || SD_NAME == "margo mulyo" || SD_NAME == "baru ulu" || SD_NAME == "kariangau") {

				color = "";
				strokecolor = "orange";

			} else if (SD_NAME == "batu ampar" || SD_NAME == "graha indah" || SD_NAME == "gunung samarinda" || SD_NAME == "gunung samarinda baru" || SD_NAME == "karang joang" || SD_NAME == "muara rapak") {
				color = "";
				strokecolor = "yellow";

			} else if (SD_NAME == "teritip" || SD_NAME == "manggar" || SD_NAME == "lamaru" || SD_NAME == "manggar baru") {
				color = "";
				strokecolor = "red";

			} else if (SD_NAME == "damai bahagia" || SD_NAME == "damai baru" || SD_NAME == "sepinggan raya" || SD_NAME == "sungai nangka" || SD_NAME == "sepinggan baru" || SD_NAME == "gunung bahagia" || SD_NAME == "sepinggan") {
				color = "";
				strokecolor = "white";

			} else if (SD_NAME == "gunung sari ilir" || SD_NAME == "karang jati" || SD_NAME == "karang rejo" || SD_NAME == "mekar sari" || SD_NAME == "sumber rejo" || SD_NAME == "gunung sari ulu") {
				color = "";
				strokecolor = "blue";

			} else if (SD_NAME == "damai" || SD_NAME == "klandasan ulu" || SD_NAME == "prapatan" || SD_NAME == "telaga sari" || SD_NAME == "klandasan ilir") {
				color = "";
				strokecolor = "green";

			}

			var bounds = new google.maps.LatLngBounds();

			if (Object.keys(coor.getAt(0).getAt(0)).length == 1) {
				for (var i = 0; i < coor.getAt(0).getAt(0).getArray().length; i++) {
					loc = coor.getAt(0).getAt(0).getAt(i);
					bounds.extend(loc);
				}
			} else {

				for (var i = 0; i < coor.getAt(0).getArray().length; i++) {
					loc = coor.getAt(0).getAt(i);
					bounds.extend(loc);
				}
			}

			center = bounds;
			map.fitBounds(bounds);

			var mapLabel = new MapLabel({
				text: SD_NAME.toUpperCase(),
				position: bounds.getCenter(),
				map: map,
				fontSize: 10,
				align: 'right',
				strokeWeight: 0,
				fontColor: '#ffffff'
			});

			return {
				fillColor: 'black',
				//   strokeColor: 'red',
				strokeColor: strokecolor,
				strokeWeight: 1,
				label: mapLabel,
			}

			layer_1.revertStyle();

		});

		map.setZoom(6);
		layer_1.setMap(map);



	};

	function btnshowkec(optKecamatan) {
		$('#info-box').text(optKecamatan);
		$('#info-wilayah').text(optKecamatan);

		$("#content-wilayah").html('');

		$.getJSON('/bppkecamatan/' + optKecamatan, function (x, y) {
			if (x.message == 'Failed!') {
				$("#content-wilayah").append('Data Belum Tersedia');
			} else {
				$("#content-wilayah").append(
					'<tr><td><strong>Kecamatan : </strong></td><td>' + x.data[0]['nama_kecamatan'] + '</td></tr>' +
					'<tr><td><strong>Jumlah Kelurahan : </strong></td><td>' + x.data[0]['jumlah_kelurahan'] + '</td></tr>' +
					'<tr><td><strong>Jumlah RT : </strong></td><td>' + x.data[0]['jumlah_rt'] + '</td></tr>' +
					'<tr><td><strong>Jumlah Kepala Keluarga : </strong></td><td>' + x.data[0]['jml_kepala_keluarga'] + '</td></tr>' +
					'<tr><td><strong>Jumlah Penduduk Laki-Laki : </strong></td><td>' + x.data[0]['populasi_pria'] + '</td></tr>' +
					'<tr><td><strong>Jumlah Penduduk Perempuan : </strong></td><td>' + x.data[0]['populasi_wanita'] + '</td></tr>' +
					'<tr><td><strong>Jumlah Penduduk : </strong></td><td>' + x.data[0]['jumlah_penduduk'] + '</td></tr>' +
					'<tr><td><h4>Lingkungan</h4></td><td>&nbsp;</td></tr>' +
					'<tr><td><strong>Panjang Jalan : </strong></td><td>' + x.data[0]['panjang_jalan_meter'] + '</td></tr>' +
					'<tr><td><strong>Jalan Kondisi Baik : </strong></td><td>' + x.data[0]['panjang_jalan_baik'] + '</td></tr>' +
					'<tr><td><strong>Jalan Kondisi Rusak : </strong></td><td>' + x.data[0]['panjang_jalan_rusak'] + '</td></tr>' +
					'<tr><td><strong>Panjang Drainase : </strong></td><td>' + x.data[0]['panjang_drainase'] + '</td></tr>' +
					'<tr><td><strong>Bangunan memiliki drainase : </strong></td><td>' + x.data[0]['jml_bangunan_dgn_drainase'] + '</td></tr>' +
					'<tr><td><strong>Bangunan tidak memiliki drainase : </strong></td><td>' + x.data[0]['jml_bangunan_non_drainase'] + '</td></tr>'
				);
			}
		});

		layer_1.setStyle(function (feature) {
			var SD_NAME = feature.getProperty('Name');
			var coor = feature.getGeometry('coordinates');
			var color = "black";

			if (SD_NAME == "balikpapan barat") {

				color = "";
				strokecolor = "orange";
			} else if (SD_NAME == "balikpapan utara") {
				color = "";
				strokecolor = "yellow";
			} else if (SD_NAME == "balikpapan timur") {
				color = "";
				strokecolor = "red";
			} else if (SD_NAME == "balikpapan selatan") {
				color = "";
				strokecolor = "white";
			} else if (SD_NAME == "balikpapan tengah") {
				color = "";
				strokecolor = "blue";
			} else if (SD_NAME == "balikpapan kota") {
				color = "";
				strokecolor = "green";
			}
			var bounds = new google.maps.LatLngBounds();
			if (Object.keys(coor.getAt(0).getAt(0)).length == 1) {
				for (var i = 0; i < coor.getAt(0).getAt(0).getArray().length; i++) {
					loc = coor.getAt(0).getAt(0).getAt(i);
					bounds.extend(loc);
				}
			} else {

				for (var i = 0; i < coor.getAt(0).getArray().length; i++) {
					loc = coor.getAt(0).getAt(i);
					bounds.extend(loc);
				}
			}

			center = bounds;

			var mapLabel = new MapLabel({
				text: SD_NAME.toUpperCase(),
				position: bounds.getCenter(),
				map: map,
				fontSize: 10,
				align: 'center',
				strokeWeight: 0,
				fontColor: '#ffffff'
			});

			return {
				fillColor: color,
				strokeColor: strokecolor,
				strokeWeight: 1,
				label: mapLabel,
			}


			layer_1.revertStyle();

		});
		layer_1.setMap(map);

		// 			

	};
	// bangunana detail
	function bangunandetail(type) {
		console.log('bangunandetail1');

		if (type == 'all') {
			var jenis = '/bppbangunan/';
		} else {
			var lurahbangunan = $("#selectKelurahan").val();
			var rtbangunan = $("#selectRT").val();

			var jenis = '/bppbangunanrt/' + lurahbangunan + '/' + rtbangunan + '';
		}

		$.getJSON('' + jenis + '', function (data) {
			// console.log(data);
			var barat = '/assets/img/mbarat-small.png';
			var kota = '/assets/img/mkota-small.png';
			var tengah = '/assets/img/mtengah-small.png';
			var utara = '/assets/img/mutara-small.png';
			var timur = '/assets/img/mtimur-small.png';
			var selatan = '/assets/img/mselatan-small.png';

			var latitude = [];
			var longitude = [];
			var markers = [];
			var markerCluster;

			$.each(data.item, function (i, v) {
				if (v.nama_kecamatan == 'Balikpapan Tengah') {
					icon = tengah;
				} else if (v.nama_kecamatan == 'Balikpapan Kota') {
					icon = kota;
				} else if (v.nama_kecamatan == 'Balikpapan Utara') {
					icon = utara;
				} else if (v.nama_kecamatan == 'Balikpapan Barat') {
					icon = barat;
				} else if (v.nama_kecamatan == 'Balikpapan Timur') {
					icon = timur;
				} else if (v.nama_kecamatan == 'Balikpapan Selatan') {
					icon = selatan;
				}

				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(v.latitude, v.longitude),
					map: map,
					icon: icon,
					// title: v.siteid,
					animation: google.maps.Animation.DROP
				});

				markers.push(marker);

				google.maps.event.addListener(marker, 'click', function () {

					$('#content-menu').prop('hidden', false);
					$('.menu-idbangunan').text(v.id_bangunan);
					console.log(v.id_bangunan);

					console.log('bangunan2');
					$('#info-content-show').prop('hidden', true);


					$.getJSON('/penghuniShow/' + v.id_bangunan, function (x) {
						$("#selectKK").html('');
						$("#selectKK").append('<option>Pilih No KK</option>');
						$.each(x.data, function (y, z) {
							$("#selectKK").append(
								'<option>' + z.nomor_kartu_keluarga + '</option>'
							)
						});

					});

					// // detail bangunan
					$("#isi-gambar").html('');
					$.getJSON('/bppbangunan/' + v.id_bangunan, function (i) {
						$("#detail1").text(i.data[0]['nama_kecamatan']);
						$("#detail2").text(i.data[0]['nama_kelurahan']);
						$("#detail3").text(i.data[0]['nama_jalan_utama']);
						$("#detail4").text(i.data[0]['nomor_rt']);
						$("#detail5").text(i.data[0]['nama_area_perumahan']);
						$("#detail6").text(i.data[0]['nama_nomor_gang']);
						$("#detail7").text(i.data[0]['nomor_bangunan']);
						$("#detail8").text(i.data[0]['nama_jenis_bangunan']);
						$("#detail9").text(i.data[0]['ket_jenis_bangunan']);
						$("#detail10").text(i.data[0]['jml_kk']);

						$("#isi-gambar").append(
							'<a href="' + i.data[0]['foto_depan'] + '" data-lightbox="gallery-group-1">' +
							'<div class="img" style="background-image: url(' + i.data[0]['foto_depan'] + ')"></div>' +
							'</a>' +
							'<a href="' + i.data[0]['foto_samping'] + '" data-lightbox="gallery-group-1"></a>' +
							'<a href="' + i.data[0]['foto_tampakjalan'] + '" data-lightbox="gallery-group-1"></a>' +
							'<p class="image-caption">' +
							'Gambar Bangunan | click for details' +
							'</p>'
						);

					});

					$.getJSON('/bangunanPenguasaan/' + v.id_bangunan, function (i) {
						$("#penguasaan_item0").text(i.data[0]['nomor_sertifikasi_lahan']);
						$("#penguasaan_item1").text(i.data[0]['status_penguasaan_bangunan']);
						$("#penguasaan_item2").text(i.data[0]['status_penguasaan_lahan']);
						$("#penguasaan_item3").text(i.data[0]['legalitas_bangunan']);
						$("#penguasaan_item4").text(i.data[0]['legalitas_lahan']);
					});

					$.getJSON('/bangunanUtility/' + v.id_bangunan, function (i) {
						$("#utility_item0").text(i.data[0]['jenis_penerangan']);
						$("#utility_item1").text(i.data[0]['jenis_penerangan']);
						$("#utility_item2").text(i.data[0]['sumber_air']);

						if (i.data[0]['drainase'] == 'TRUE') {
							drainase = 'Ada';
						} else {
							drainase = 'Tidak Ada';
						}

						$("#utility_item3").text(drainase);
						$("#utility_item4").text(i.data[0]['jenis_kloset']);
						$("#utility_item5").html('');
						$("#utility_item5").append('Limbah Tinja Buangan : ' + i.data[0]['id_tempat_buang_tinja'] + '<br>Bahan Bakar : ' + i.data[0]['jenis_bahan_bakar_energi'] + '<br>No PLN : ' + i.data[0]['nomor_meter_pln'] + '<br>No PDAM : ' + i.data[0]['nomor_meter_pdam'])
					});

					$.getJSON('/bangunanKeteraturan/' + v.id_bangunan, function (i) {
						$("#keteraturan_item0").text(i.data[0]['akses_ke_jalan']);
						$("#keteraturan_item1").text(i.data[0]['bangunan_hadap_jalan']);
						$("#keteraturan_item2").text(i.data[0]['bangunan_hadap_sungai']);
						$("#keteraturan_item3").text(i.data[0]['diatas_sempadan_sungai']);
						$("#keteraturan_item4").text(i.data[0]['daerah_buangan_limbah']);
					});

					$.getJSON('/bangunanKelayakan/' + v.id_bangunan, function (i) {
						$("#kelayakan_item0").text(i.data[0]['luas_lantai']);
						$("#kelayakan_item1").text(i.data[0]['panjang']);
						$("#kelayakan_item2").text(i.data[0]['lebar']);
						$("#kelayakan_item3").text(i.data[0]['jumlah_lantai']);
						$("#kelayakan_item4").text(i.data[0]['jenis_atap_terluas']);
						$("#kelayakan_item5").text(i.data[0]['luas_lantai']);
						$("#kelayakan_item6").text(i.data[0]['kondisi_atap']);
						$("#kelayakan_item7").text(i.data[0]['jenis_dinding_terluas']);
						$("#kelayakan_item8").text(i.data[0]['jenis_lantai_terluas']);
					});

					$("#sosial_item0").text('');
					$("#sosial_item1").text('');
					$("#sosial_item2").text('');
					$("#sosial_item3").text('');
					$("#sosial_item4").text('');

					$("#ekonomi_item1").text('');
					$("#ekonomi_item2").text('');
					$("#ekonomi_item3").text('');
					$("#ekonomi_item4").text('');
					$("#ekonomi_item5").text('');
					$("#ekonomi_item6").text('');
					$("#accordion-penghuni").html('');
					// bangunan
					// $("#penguasaan_item0").text('');
					// $("#penguasaan_item1").text('');
					// $("#penguasaan_item2").text('');
					// $("#penguasaan_item3").text('');
					// $("#penguasaan_item4").text('');
					// $("#utility_item0").text('');
					// $("#utility_item1").text('');
					// $("#utility_item2").text('');
					// $("#utility_item3").text('');
					// $("#utility_item4").text('');
					// $("#utility_item5").text('');
					// $("#keteraturan_item0").text('');
					// $("#keteraturan_item1").text('');
					// $("#keteraturan_item2").text('');
					// $("#keteraturan_item3").text('');
					// $("#keteraturan_item4").text('');
					// $("#kelayakan_item0").text('');
					// $("#kelayakan_item1").text('');
					// $("#kelayakan_item2").text('');
					// $("#kelayakan_item3").text('');
					// $("#kelayakan_item4").text('');
					// $("#kelayakan_item5").text('');
					// $("#kelayakan_item6").text('');
					// $("#kelayakan_item7").text('');
					// $("#kelayakan_item8").text('');


					$("#selectKK").change(function () {
						//         /* Act on the event */
						$("span").text('');

						$("#ekonomi_item01").text(status);

						nokk = $("#selectKK").val();
						// $.getJSON('/DpenghuniSosial/'+nokk, function(i) {
						// 	$("#sosial_item0").text(i.data[0]['jenis_faskes']);
						// 	$("#sosial_item1").text(i.data[0]['lokasi_faskes']);
						// 	$("#sosial_item2").text('SD : '+i.data[0]['lokasi_sd_sederajat']);
						// 	$("#sosial_item3").text('SMP : '+i.data[0]['lokasi_smp_sederajat']);
						// 	$("#sosial_item4").text('SMA : '+i.data[0]['lokasi_sma_sederajat']);
						// }); // end penghuni sosial

						$.getJSON('/DpenghuniEkonomi/' + nokk, function (i) {
							if (i.data[0]['status_rt_induk'] == 'TRUE') {
								var status = 'IYA';
							} else {
								var status = 'TIDAK';

							}
							$("#ekonomi_item01").text(status);
							$("#ekonomi_item0").text(i.data[0]['jenis_lapangan_usaha']);
							$("#ekonomi_item1").text(i.data[0]['total_penghasilan_keluarga']);
							$("#ekonomi_item2").text(i.data[0]['total_pengeluaran_keluarga']);
							$("#ekonomi_item3").text(i.data[0]['jml_aset_televisi']);
							$("#ekonomi_item4").text(i.data[0]['jml_aset_kulkas']);
							$("#ekonomi_item5").text(i.data[0]['jml_aset_sepeda_motor']);
							$("#ekonomi_item6").text(i.data[0]['jml_aset_mobil']);
						}); //end penghuni ekonomi



						$("#accordion-penghuni").html('');
						$.getJSON('/DpenghuniAnggota/' + nokk, function (i) {
							$.each(i.data, function (index, el) {
								// console.log(el.nik_kependudukan);
								// $.getJSON('/DpenghuniSosial/'+el.nik_kependudukan, function(i) {
								// console.log(i);
								$("#accordion-penghuni").append(
									'<div class="media media-sm">' +
									'<a class="media-left" href="javascript:;">' +
									'<img src="/assets/img/user/user-12.jpg" alt="" class="media-object rounded">' +
									'</a>' +
									'<div class="media-body">' +
									'<h5 class="media-heading text-dark">' + el.nik_kependudukan.substring(0, 10) + '*** # <b id="namaAnggota1">' + el.nama_penghuni + '</b></h5>' +
									'<ul>' +
									'<li>Hubungan : <b> ' + el.hubungan_kepala_keluarga + ' </b></li>' +
									'<li>Tempat Tanggal Lahir : <b>' + el.tempat_lahir + ', ' + el.tanggal_lahir + ' </b></li>' +
									'<li>Jenis Kelamin (P/L) : <b> ' + el.jenis_kelamin + ' </b></li>' +
									'<li>Gol. Darah (P/L) : <b> ' + el.keterangan_gol_darah + ' </b></li>' +
									'<li>Agama : <b> ' + el.nama_agama + ' </b></li>' +
									'<li>Warga Negara : <b> ' + el.kewarganegaraan + ' </b></li>' +
									'<li>No. Passport : <b> ' + el.nomor_passport + ' </b></li>' +
									'<li>Ijazah / Pendidikan Terakhir : <b> ' + el.ijazah_tertinggi_yang_dimiliki + ' </b></li>' +
									'<li>Rencana Melanjutkan Sekolah Tingkat : <b> ' + el.rencana_lanjut_sekolah + ' </b></li>' +
									'<li>Alasan Tidak Melanjutkan Sekolah : <b> ' + el.alasan_tidak_lanjut + ' </b></li>' +
									'<li>Jenis Pekerjaan : <b> ' + el.jenis_pekerjaan + ' </b></li>' +
									'<li>Klasifikasi Usaha : <b> ' + el.klasifikasi_usaha + ' </b></li>' +
									'<li>Detail Pekerjaan : <b> ' + el.detil_pekerjaan + ' </b></li>' +
									'<li>Tanggal Mulai Tidak Bekerja : <b> ' + el.tanggal_menganggur + ' </b></li>' +
									'<li>Range Penghasilan : <b> ' + el.keterangan_penghasilan + ' </b></li>' +
									'<li>Status Keberadaan : <b> ' + el.status_keberadaan_anggota + ' </b></li>' +
									'<li>Status Nikah : <b> ' + el.status_perkawinan + ' </b></li>' +
									'<li>Tanggal Nikah : <b> ' + el.tgl_kawin + ' </b></li>' +
									'<li>Umur Kehamilan : <b> ' + el.umur_kehamilan + ' </b></li>' +
									'<li>Kontrasepsi : <b> ' + el.nama_kontrasepsi + ' </b></li>' +
									'<li>Jenis Cacat : <b> ' + el.penyakit_anggota + ' </b></li>' +
									'<li>Penyakit Anggota : <b> ' + el.penyakit_kronis + ' </b></li>' +
									'<li>Jenis Faskes : <b> ' + el.jenis_faskes_pertama + ' </b></li>' +
									'<li>Lokasi Faskes : <b> ' + el.lokasi_faskes + ' </b></li>' +
									'<li>KKS : <b> ' + el.kks_kps + ' </b></li>' +
									'<li>KIP : <b> ' + el.kip_bsm + ' </b></li>' +
									'<li>KIS : <b> ' + el.kis_bpjs + ' </b></li>' +
									'<li>BPJS Mandiri : <b> ' + el.bpjs_mandiri + ' </b></li>' +
									'<li>BPJS Tenaga Kerja : <b> ' + el.jamsostek_bpjs_tenaga_kerja + ' </b></li>' +
									'<li>Asuransi Lain : <b> ' + el.asuransi_kesehatan_lain + ' </b></li>' +
									'<li>PKH : <b> ' + el.pkh + ' </b></li>' +
									'<li>BPNT : <b> ' + el.raskin + ' </b></li>' +
									'<li>KUR : <b> ' + el.kur + ' </b></li>' +
									'<li>Keterangan Lain : <b> ' + el.keterangan_lain + ' </b></li>' +
									'</ul>' +
									'</div>' +
									'</div>'
								);
								// });
							});
						}); //end penghuni anggota

					}); //end change select KK

				}); //end google.maps.event.addListener

			}); //end each

			var markerCluster = new MarkerClusterer(map, markers, {
				imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
			});
		});
	};
	//end function bangunan

	// end function btnclick			
});

function initialize(geo) {

	var defaultMapStyles = [];
	var flatMapStyles = [{
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "road",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#ffffff"
		}]
	}, {
		"featureType": "road.arterial",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#fee379"
		}]
	}, {
		"featureType": "road.highway",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#fee379"
		}]
	}, {
		"featureType": "landscape",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#f3f4f4"
		}]
	}, {
		"featureType": "water",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#7fc8ed"
		}]
	}, {}, {
		"featureType": "road",
		"elementType": "labels",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "poi.park",
		"elementType": "geometry.fill",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#83cead"
		}]
	}, {
		"elementType": "labels",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "landscape.man_made",
		"elementType": "geometry",
		"stylers": [{
			"weight": 0.9
		}, {
			"visibility": "off"
		}]
	}];
	var turquoiseWaterStyles = [{
		"featureType": "landscape.natural",
		"elementType": "geometry.fill",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#e0efef"
		}]
	}, {
		"featureType": "poi",
		"elementType": "geometry.fill",
		"stylers": [{
			"visibility": "on"
		}, {
			"hue": "#1900ff"
		}, {
			"color": "#c0e8e8"
		}]
	}, {
		"featureType": "landscape.man_made",
		"elementType": "geometry.fill"
	}, {
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [{
			"lightness": 100
		}, {
			"visibility": "simplified"
		}]
	}, {
		"featureType": "road",
		"elementType": "labels",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "water",
		"stylers": [{
			"color": "#7dcdcd"
		}]
	}, {
		"featureType": "transit.line",
		"elementType": "geometry",
		"stylers": [{
			"visibility": "on"
		}, {
			"lightness": 700
		}]
	}];
	var icyBlueStyles = [{
		"stylers": [{
			"hue": "#2c3e50"
		}, {
			"saturation": 250
		}]
	}, {
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [{
			"lightness": 50
		}, {
			"visibility": "simplified"
		}]
	}, {
		"featureType": "road",
		"elementType": "labels",
		"stylers": [{
			"visibility": "off"
		}]
	}];
	var oldDryMudStyles = [{
		"featureType": "landscape",
		"stylers": [{
			"hue": "#FFAD00"
		}, {
			"saturation": 50.2
		}, {
			"lightness": -34.8
		}, {
			"gamma": 1
		}]
	}, {
		"featureType": "road.highway",
		"stylers": [{
			"hue": "#FFAD00"
		}, {
			"saturation": -19.8
		}, {
			"lightness": -1.8
		}, {
			"gamma": 1
		}]
	}, {
		"featureType": "road.arterial",
		"stylers": [{
			"hue": "#FFAD00"
		}, {
			"saturation": 72.4
		}, {
			"lightness": -32.6
		}, {
			"gamma": 1
		}]
	}, {
		"featureType": "road.local",
		"stylers": [{
			"hue": "#FFAD00"
		}, {
			"saturation": 74.4
		}, {
			"lightness": -18
		}, {
			"gamma": 1
		}]
	}, {
		"featureType": "water",
		"stylers": [{
			"hue": "#00FFA6"
		}, {
			"saturation": -63.2
		}, {
			"lightness": 38
		}, {
			"gamma": 1
		}]
	}, {
		"featureType": "poi",
		"stylers": [{
			"hue": "#FFC300"
		}, {
			"saturation": 54.2
		}, {
			"lightness": -14.4
		}, {
			"gamma": 1
		}]
	}];
	var cobaltStyles = [{
		"featureType": "all",
		"elementType": "all",
		"stylers": [{
			"invert_lightness": true
		}, {
			"saturation": 10
		}, {
			"lightness": 10
		}, {
			"gamma": 0.8
		}, {
			"hue": "#293036"
		}]
	}, {
		"featureType": "water",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#293036"
		}]
	}];
	var darkRedStyles = [{
		"featureType": "all",
		"elementType": "all",
		"stylers": [{
			"invert_lightness": true
		}, {
			"saturation": 10
		}, {
			"lightness": 10
		}, {
			"gamma": 0.8
		}, {
			"hue": "#000000"
		}]
	}, {
		"featureType": "water",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#293036"
		}]
	}];

	var data = geo;
	var center;
	var mapProp = {
		center: x,
		zoom: 12,
		// disableDefaultUI: true,
		mapTypeControl: true,
		scaleControl: false,
		streetViewControl: true,
		streetViewControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		},
		fullscreenControl: false,
		zoomControl: false,
		mapTypeId: 'roadmap',
		styles: turquoiseWaterStyles
	};

	map = new google.maps.Map(document.getElementById("google-map-default"), mapProp);

	map.data.addGeoJson(data);

	$('[data-map-theme]').click(function () {
		var targetTheme = $(this).attr('data-map-theme');
		var targetLi = $(this).closest('li');
		var targetText = $(this).text();
		var inverseContentMode = false;
		$('#map-theme-selection li').not(targetLi).removeClass('active');
		$('#map-theme-text').text(targetText);
		$(targetLi).addClass('active');

		switch (targetTheme) {
			case 'flat':
				map.setOptions({
					styles: flatMapStyles
				});
				break;
			case 'turquoise-water':
				map.setOptions({
					styles: turquoiseWaterStyles
				});
				break;
			case 'icy-COLOR_BLUE':
				map.setOptions({
					styles: icyBlueStyles
				});
				break;
			case 'cobalt':
				map.setOptions({
					styles: cobaltStyles
				});
				inverseContentMode = true;
				break;
			case 'old-dry-mud':
				map.setOptions({
					styles: oldDryMudStyles
				});
				break;
			case 'dark-red':
				map.setOptions({
					styles: darkRedStyles
				});
				inverseContentMode = true;
				break;
			default:
				map.setOptions({
					styles: defaultMapStyles
				});
				break;
		}

		if (inverseContentMode === true) {
			$('#content').addClass('content-inverse-mode');
		} else {
			$('#content').removeClass('content-inverse-mode');
		}
	});
};

$('#content-menu-hidden').click(function () {
	$('#content-menu').prop('hidden', true);
	$('#info-content-show').prop('hidden', false);
});
$(document).ready(function () {
	MapGoogle.init();

});