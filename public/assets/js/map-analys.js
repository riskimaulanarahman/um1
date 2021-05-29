/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 4
Version: 4.4.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/admin/
*/
var handleSelect2 = function() {
	$(".default-select2").select2();
	$(".multiple-select2").select2({ placeholder: "Select a state" });
};



var handleGoogleMapSetting = function() {
	"use strict";
	var map;
	
	var defaultMapStyles = [];
	var flatMapStyles = [{"stylers":[{"visibility":"off"}]},{"featureType":"road","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road.arterial","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"road.highway","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"landscape","stylers":[{"visibility":"on"},{"color":"#f3f4f4"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#7fc8ed"}]},{},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#83cead"}]},{"elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"weight":0.9},{"visibility":"off"}]}]; 
	var turquoiseWaterStyles = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill"},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#7dcdcd"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]}];
	var icyBlueStyles = [{"stylers":[{"hue":"#2c3e50"},{"saturation":250}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":50},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]}];
	var oldDryMudStyles = [{"featureType":"landscape","stylers":[{"hue":"#FFAD00"},{"saturation":50.2},{"lightness":-34.8},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFAD00"},{"saturation":-19.8},{"lightness":-1.8},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FFAD00"},{"saturation":72.4},{"lightness":-32.6},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FFAD00"},{"saturation":74.4},{"lightness":-18},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#00FFA6"},{"saturation":-63.2},{"lightness":38},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#FFC300"},{"saturation":54.2},{"lightness":-14.4},{"gamma":1}]}];
	var cobaltStyles  = [{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":10},{"lightness":10},{"gamma":0.8},{"hue":"#293036"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#293036"}]}];
	var darkRedStyles   = [{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":10},{"lightness":10},{"gamma":0.8},{"hue":"#000000"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#293036"}]}];

	var mapProp = {
		zoom: 12,
		center: new google.maps.LatLng(-1.148889,116.903056),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		// disableDefaultUI: true,
		styles: turquoiseWaterStyles
	};
	map = new google.maps.Map(document.getElementById('google-map-default'), mapProp);
	
	$(window).resize(function() {
		google.maps.event.trigger(map, "resize");
	});

	
	
	
	$('[data-map-theme]').click(function() {
		var targetTheme = $(this).attr('data-map-theme');
		var targetLi = $(this).closest('li');
		var targetText = $(this).text();
		var inverseContentMode = false;
		$('#map-theme-selection li').not(targetLi).removeClass('active');
		$('#map-theme-text').text(targetText);
		$(targetLi).addClass('active');
		
		switch(targetTheme) {
			case 'flat':
				map.setOptions({styles: flatMapStyles});
			break;
			case 'turquoise-water':
				map.setOptions({styles: turquoiseWaterStyles});
			break;
			case 'icy-COLOR_BLUE':
				map.setOptions({styles: icyBlueStyles});
			break;
			case 'cobalt':
				map.setOptions({styles: cobaltStyles});
				inverseContentMode = true;
			break;
			case 'old-dry-mud':
				map.setOptions({styles: oldDryMudStyles});
			break;
			case 'dark-red':
				map.setOptions({styles: darkRedStyles});
				inverseContentMode = true;
				break;
			default:
				map.setOptions({styles: defaultMapStyles});
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
 
function numberWithCommas(x) {
	// return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	// console.log('bbb');
}

function optBangunan() {

	var arrayOpt = [
	'nama_jenis_bangunan',
	'legalitas_lahan',
	'jenis_penerangan',
	'jenis_kloset',
	'tempat_buang_tinja',
	'jenis_atap_terluas',
	'jenis_lantai_terluas'
	];

	$.each(arrayOpt,function(ind,val){

		if(val == val) {
			$.getJSON('/optBangunan/'+val,function(json){
				$.each(json,function(i,v){

					$.each(v,function(x,y){
						$('#'+val).append("<option value='"+y+"'>"+y+"</option>");
						// console.log(y);
					})

				})
			})
		}

		
		// console.log(val);
	})
}

function optAnggota(){

	var arrayOpt = [
	'hubungan_kepala_keluarga',
	'keterangan_gol_darah',
	'nama_agama',
	'ijazah_tertinggi_yang_dimiliki',
	'jenis_pekerjaan',
	'status_keberadaan_anggota',
	'status_perkawinan',
	'nama_kontrasepsi',
	'penyakit_anggota',
	'jenis_faskes_pertama'
	];

	$.each(arrayOpt,function(ind,val){

		// console.log(ind+'&'+val);

		if(val == val){
			$.getJSON('/optAnggota/'+val,function(json){

				$.each(json,function(i,v){

					$.each(v,function(x,y){
						$('#'+val).append("<option value='"+y+"'>"+y+"</option>");
						// console.log(y);
						// $('#satu').append(y);
					})
				})
			})
		}
	})
}

function optRumahTangga(){

	var arrayOpt = [
		'jenis_lapangan_usaha',
		'total_penghasilan_keluarga',
		'total_pengeluaran_keluarga',
		'keterangan_penghasilan'
	];



	$.each(arrayOpt,function(ind,val){

		// console.log(ind+'&'+val);

		if(val == val){
			$.getJSON('/optRumahTangga/'+val,function(json){

				$.each(json,function(i,v){

					$.each(v,function(x,y){
						$('#'+val).append("<option value='"+y+"'>"+y+"</option>");
						// console.log(y);
						// $('#satu').append(y);
					})
				})
			})
		}
	})

}

var x = new google.maps.LatLng(-1.148889,116.903056);

$('#selectKelurahan').change(function() {
	// if($(this).val() == '') {
	// 	$("#selectRT").prop('disabled',true);
	// 	$("#selectRT").val() == null;
	// } else {
	// 	$("#selectRT").prop('disabled',false);
	// } 
	var opKecamatan = $("#selectKecamatan").val();
  
	var opKelurahan = $("#selectKelurahan").val();

	var rtarray = [];
	function sortNumber(a, b) {
	return a - b;
  }
  if(opKecamatan!='ALL' && opKelurahan !='ALL'){
  	console.log('/teritory/'+opKecamatan+'/'+opKelurahan);
	$.getJSON('/teritory/'+opKecamatan+'/'+opKelurahan, function(x,y) {
		if(x.data[0]['values'] != null){
			 $.each(x.data, function(i, v) {
		  rtarray.push(v['values']);
		})
		$("#selectRT").html('');
		$("#selectRT").append('<option></option><option> ALL</option>');
			$.each(rtarray.sort(sortNumber),function(i,v){
			  // console.log(v);
			  $("#selectRT").append('<option value='+v+'> RT '+v+'</option>')
			})
		}else{
		  $("#selectRT").html('');
		  $("#selectRT").append('<option value=""></option><option>ALL</option>');
		  console.log('null');
		}
	 })
  }	 
})

$("#switch_bangunan").change(function() {
    if(this.checked) {
        //Do stuff
        initialize('');
        bangunandetail('all');
        console.log('tampil bangunan');
    } else {
		initialize();
		// marker.setVisible(true);
		$('#content-menu').prop('hidden',true);
        console.log('hidden bangunan');
    }
});
  // toggle kecamatan
$('#selectKecamatan').change(function() {
	$("#selectKelurahan").html('');
    $("#selectRT").html('');
	// if($(this).val() == '') {
	// 	$("#selectKelurahan").prop('disabled',true);
	// 	$("#selectRT").prop('disabled',true);
	// 	$("#selectKelurahan").val() == '';
	// 	$("#selectRT").val() == '';
	// } else {
	// 	$("#selectKelurahan").prop('disabled',false);
	// } 

    console.log('kecamatan');
    
  var opKecamatan = $('#selectKecamatan').val();
	/* Act on the event */
	$("#selectRT").append('<option></option><option>ALL</option>');
  
	$("#selectKelurahan").append('<option></option><option>ALL</option>');
	if(opKecamatan=='balikpapan timur'){
	  $("#selectKelurahan").append(
		'<option>Lamaru</option><option>Manggar</option><option>Manggar Baru</option><option>Teritip</option>'
	  );
	console.log('timur');
  
	}else if(opKecamatan=='balikpapan utara'){
	  $("#selectKelurahan").append(
		'<option>Batu Ampar</option><option>Graha Indah</option><option>Gunung Samarinda</option><option>Gunung Samarinda Baru</option><option>Karang Joang</option><option>Muara Rapak</option>'
	  );
	console.log('utara');
  
	}else if(opKecamatan=='balikpapan tengah'){
	  $("#selectKelurahan").append(
		'<option>Gunung Sari Ilir</option><option>Gunung Sari Ulu</option><option>Karang Jati</option><option>Karang Rejo</option><option>Mekar Sari</option><option>Sumber Rejo</option>'
	  );
	console.log('tengah');
  
	}else if(opKecamatan=='balikpapan selatan'){
	  $("#selectKelurahan").append(
		'<option>Damai Bahagia</option><option>Damai Baru</option><option>Gunung Bahagia</option><option>Sepinggan</option><option>Sepinggan Baru</option><option>Sepinggan Raya</option><option>Sungai Nangka</option>'
	  );
	console.log('selatan');
  
	}else if(opKecamatan=='balikpapan kota'){
	  $("#selectKelurahan").append(
		'<option>Damai</option><option>Klandasan Ilir</option><option>Klandasan Ulu</option><option>Prapatan</option><option>Telaga Sari</option>'
	  );
	console.log('kota');
  
	}else if(opKecamatan=='balikpapan barat'){
	  $("#selectKelurahan").append(
		'<option>Baru Ilir</option><option>Baru Tengah</option><option>Baru Ulu</option><option>Kariangau</option><option>Marga sari</option><option>Margo Mulyo</option>'
	  );
	}
});

// $('#groupcheck').change(function(){

// 			var valfil = [];

// 			if ($('#check_bangunan').is(':checked')) {
// 				var fila = 'bangunan_check';
// 				valfil.push(fila);
// 			} else if ($('#check_rumahtangga').is(':checked')) {
// 				var filb = 'rumahtangga_check';
// 				valfil.push(filb);

// 			} 

// 			if ($('#check_anggota').is(':checked')) {
// 				var filc = 'anggota_check';
// 				valfil.push(filc);

// 			} else {
// 				var val0 = 'none';

// 			}

// 				console.log(valfil);

// 		});
// var items=[];
// $("#groupcheck").click(function(e) {
//        $(":checkbox").each(function() {
//             if(this.checked) {
//                 // this.checked = true;
//                 items.push(this.id);
//                 // console.log(this);
//             }

//             // console.log(items);
//         });

// });
// filterA();
// 		var api = 'nama_kecamatan=balikpapan utara&nama_kelurahan=Gunung Samarinda&nomor_rt=015&nama_jenis_bangunan=Perumahan&legalitas_lahan=&luas_tanah=&jenis_penerangan=&drainase=&jenis_kloset=&tempat_buang_tinja=&luas_lantai=&jenis_atap_terluas=&jenis_lantai_terluas=';

// 		// var potong = api.replace('&',' ');
// 		var array = api.split('&');


// 		console.log(array);
// 		$.each(array,function(i,v){
// 			console.log(v);
// 		});



// function filterA() {
// 		$('#div_filterA').prop('hidden',false);


// 		// alert("calling");
//         //          $('#tbl_filterA').dataTable({
//         //     "bDestroy": true
//         // }).fnDestroy();

// 		var api = 'showBangunan?nama_kecamatan=balikpapan utara&nama_kelurahan=Gunung Samarinda&nomor_rt=015&nama_jenis_bangunan=Perumahan&legalitas_lahan=&luas_tanah=&jenis_penerangan=&drainase=&jenis_kloset=&tempat_buang_tinja=&luas_lantai=&jenis_atap_terluas=&jenis_lantai_terluas=';



// 		var table = $('#tbl_filterA').DataTable({
// 				dom: "BPlfrti",
// 				ajax: api,
// 				"columns": [
// 				    { "data": "nama_kecamatan" },
// 				    { "data": "nama_kelurahan" },
// 				    { "data": "nomor_rt" },
// 				    { "data": "id_bangunan" },
// 				    { "data": "nama_jenis_bangunan" },
// 				    { "data": "nama_jalan_utama" },
// 				    { "data": "nomor_sertifikasi_lahan" },
// 				    { "data": "legalitas_lahan" },
// 				    { "data": "luas_tanah" },
// 				    { "data": "legalitas_bangunan" },
// 				    { "data": "jenis_penerangan" },
// 				    { "data": "sumber_air" },
// 				    { "data": "drainase" },
// 				    { "data": "jenis_kloset" },
// 				    { "data": "tempat_buang_tinja" },
// 				    { "data": "jenis_bahan_bakar_energi" },
// 				    { "data": "akses_ke_jalan" },
// 				    { "data": "bangunan_hadap_jalan" },
// 				    { "data": "bangunan_hadap_sungai" },
// 				    { "data": "diatas_sempadan_sungai" },
// 				    { "data": "daerah_buangan_limbah" },
// 				    { "data": "bangunan_diatas_parit" },
// 				    { "data": "luas_lantai" },
// 				    { "data": "jumlah_lantai" },
// 				    { "data": "jenis_atap_terluas" },
// 				    { "data": "jenis_dinding_terluas" },
// 				    { "data": "jenis_lantai_terluas" },
// 				    { "data": "pengelolaan_sampah" },
// 				  ],

// 				deferRender:    true,
// 				// 'language': {
// 			 //      'emptyTable': '<a href="/path/' + 1 + '">Add new user</a>'
// 			 //   	},
// 				"processing": true,
// 				"serverSide": false,

// 			 	'language': {
// 		            'loadingRecords': '&nbsp;',
// 		            'processing': '<div class="spinner"></div>'
// 		        },
// 				scrollY: 200,
// 				"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
				
// 				destroy: true,
// 				paging: true,
// 				scrollX: true,
// 				// scrollCollapse: true,
// 				// scroller:       true,
// 				responsive: false,
// 				// buttons: [
// 		  //           'copy', 'csv', 'excel', 'pdf', 'print'
// 		  //       ]
// 		  		columnDefs: [
// 		            {
// 		                targets: [0,1,2,3],
// 		                className: 'noVis'
// 		            },
// 		            { "visible": false, "targets": [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] }
// 		        ],
// 		  		buttons: [
// 		            // {
// 		            //     extend: 'pdfHtml5',
// 		            //     title: 'pdf analisis',
// 		            //     text: 'PDF',
// 		            //     orientation: 'landscape',
// 		            //     pageSize: 'LEGAL'
// 		            // },
// 		            // {
// 		            //     extend: 'print',
// 		            //     exportOptions: {
// 		            //         columns: ':visible'
// 		            //     }
// 		            // },
// 		            {
// 			            extend: 'excelHtml5',
// 			            title: 'excel analisis',
// 			            text: 'EXCEL',
// 			            autoFilter: true,
// 			            exportOptions: {
// 		                    columns: ':visible'
// 		                }
// 			        },
// 			        {
// 			        	text: 'Pilih Attribute',
// 		                extend: 'colvis',
// 		                columns: ':not(.noVis)',
// 		                postfixButtons: ['colvisRestore'],
// 		            }
// 		        ]
// 		});

  

// 		$('.reload_filter').click(function(){
			// $("#tbl_filterA_processing").css("display","none");
// 			table.ajax.reload();
// 		})

// 		table.on('xhr.dt', function ( e, settings, json, xhr ) {
//         // Do some staff here...
// 	        // $('#status').html( json.status );
// 	        // console.log(json);
// 	        console.log(xhr.status);
// 	        if(xhr.status == 0) {
// 	        	// table.destroy();
// 	        	$("#tbl_filterA").html("");
// 	        	$("#tbl_filterA").append('<tbody><tr><th colspan="3">No data found in the server</th></tr>'+
// 	                    	'<button class="btn btn-danger reload_filter">Reload <i class="fa fa-redo"></i></button></tbody>');
// 	        }
// 	    } )
// }


$("#btnShowMAP").click(function(event){
    event.preventDefault();
    var type = $("#groupcheck input:checkbox:checked").map(function(){
      return $(this).attr('id');
    }).get();

	var layer_1 = new google.maps.Data();

	layer_1.revertStyle();
	var balikpapanKECall;

	// start wilayah
		var opt_kecamatan = $("#selectKecamatan").val();
		var opt_kelurahan = $("#selectKelurahan").val();
		var opt_rt = $("#selectRT").val();

		var opKecamatan = $('#selectKecamatan').val();
		var opRt = $('#selectRT').val();
		var opKelurahan = $('#selectKelurahan').val().toLowerCase();
		var opKelurahan2 = $('#selectKelurahan').val();

		opKelurahan2 = opKelurahan2.toLowerCase().replace(/\b[a-z]/g, function(letter) {
			return letter.toUpperCase();
		});
	// end wilayah

	// start bangunan
		if( $("#id_bangunan").val() !== '' ) { 
			var id_bangunan = '&id_bangunan=' + $("#id_bangunan").val();
		} else {
			var id_bangunan = '';
		}

		if( $("#jumlah_kamar").val() !== '' ) { 
			var jumlah_kamar = '&jumlah_kamar=' + $("#jumlah_kamar").val();
		} else {
			var jumlah_kamar = '';
		}

		if( $("#NOP").val() !== '' ) { 
			var NOP = '&NOP=' + $("#NOP").val();
		} else {
			var NOP = '';
		}

		if( $("#nama_jenis_bangunan :selected").val() !== '' ) { 
			var nama_jenis_bangunan = '&nama_jenis_bangunan=' + $("#nama_jenis_bangunan :selected").val();
		} else {
			var nama_jenis_bangunan = '';
		}
		if( $("#legalitas_lahan :selected").val() !== '' ) { 
			var legalitas_lahan = '&legalitas_lahan=' + $("#legalitas_lahan :selected").val();
		} else {
			var legalitas_lahan = '';
		}
		if( $("#luas_tanah").val() !== '' ) { 
			var luas_tanah = '&luas_tanah=' + $("#luas_tanah").val();
		} else {
			var luas_tanah = '';
		}
		if( $("#jenis_penerangan :selected").val() !== '' ) { 
			var jenis_penerangan = '&jenis_penerangan=' + $("#jenis_penerangan :selected").val();
		} else {
			var jenis_penerangan = '';
		}
		if( $("#drainase :selected").val() !== '' ) { 
			var drainase = '&drainase=' + $("#drainase :selected").val();
		} else {
			var drainase = '';
		}
		if( $("#jenis_kloset :selected").val() !== '' ) { 
			var jenis_kloset = '&jenis_kloset=' + $("#jenis_kloset :selected").val();
		} else {
			var jenis_kloset = '';
		}
		if( $("#tempat_buang_tinja :selected").val() !== '' ) { 
			var tempat_buang_tinja = '&tempat_buang_tinja=' + $("#tempat_buang_tinja :selected").val();
		} else {
			var tempat_buang_tinja = '';
		}
		if( $("#luas_lantai").val() !== '' ) { 
			var luas_lantai = '&luas_lantai=' + $("#luas_lantai").val();
		} else {
			var luas_lantai = '';
		}
		if( $("#jenis_atap_terluas :selected").val() !== '' ) { 
			var jenis_atap_terluas = '&jenis_atap_terluas=' + $("#jenis_atap_terluas :selected").val();
		} else {
			var jenis_atap_terluas = '';
		}
		if( $("#jenis_lantai_terluas :selected").val() !== '' ) { 
			var jenis_lantai_terluas = '&jenis_lantai_terluas=' + $("#jenis_lantai_terluas :selected").val();
		} else {
			var jenis_lantai_terluas = '';
		}
	// end bangunan

	// start rumahtangga
		if( $("#jenis_lapangan_usaha :selected").val() !== '' ) { 
			var jenis_lapangan_usaha = '&jenis_lapangan_usaha=' + $("#jenis_lapangan_usaha :selected").val();
		} else {
			var jenis_lapangan_usaha = '';
		}

		if( $("#total_penghasilan_keluarga :selected").val() !== '' ) { 
			var total_penghasilan_keluarga = '&total_penghasilan_keluarga=' + $("#total_penghasilan_keluarga :selected").val();
		} else {
			var total_penghasilan_keluarga = '';
		}

		if( $("#total_pengeluaran_keluarga :selected").val() !== '' ) { 
			var total_pengeluaran_keluarga = '&total_pengeluaran_keluarga=' + $("#total_pengeluaran_keluarga :selected").val();
		} else {
			var total_pengeluaran_keluarga = '';
		}

		if( $("#jml_aset_tabung_gas_5kg_lebih :selected").val() !== '' ) { 
			var jml_aset_tabung_gas_5kg_lebih = '&jml_aset_tabung_gas_5kg_lebih=' + $("#jml_aset_tabung_gas_5kg_lebih :selected").val();
		} else {
			var jml_aset_tabung_gas_5kg_lebih = '';
		}

		if( $("#jml_aset_kulkas :selected").val() !== '' ) { 
			var jml_aset_kulkas = '&jml_aset_kulkas=' + $("#jml_aset_kulkas :selected").val();
		} else {
			var jml_aset_kulkas = '';
		}

		if( $("#jml_aset_ac :selected").val() !== '' ) { 
			var jml_aset_ac = '&jml_aset_ac=' + $("#jml_aset_ac :selected").val();
		} else {
			var jml_aset_ac = '';
		}

		if( $("#jml_aset_pemanas_air :selected").val() !== '' ) { 
			var jml_aset_pemanas_air = '&jml_aset_pemanas_air=' + $("#jml_aset_pemanas_air :selected").val();
		} else {
			var jml_aset_pemanas_air = '';
		}

		if( $("#jml_aset_telepon_rumah :selected").val() !== '' ) { 
			var jml_aset_telepon_rumah = '&jml_aset_telepon_rumah=' + $("#jml_aset_telepon_rumah :selected").val();
		} else {
			var jml_aset_telepon_rumah = '';
		}

		if( $("#jml_aset_televisi :selected").val() !== '' ) { 
			var jml_aset_televisi = '&jml_aset_televisi=' + $("#jml_aset_televisi :selected").val();
		} else {
			var jml_aset_televisi = '';
		}

		if( $("#jml_aset_lahan_atau_bangunan :selected").val() !== '' ) { 
			var jml_aset_lahan_atau_bangunan = '&jml_aset_lahan_atau_bangunan=' + $("#jml_aset_lahan_atau_bangunan :selected").val();
		} else {
			var jml_aset_lahan_atau_bangunan = '';
		}

		if( $("#jml_aset_laptop_komputer :selected").val() !== '' ) { 
			var jml_aset_laptop_komputer = '&jml_aset_laptop_komputer=' + $("#jml_aset_laptop_komputer :selected").val();
		} else {
			var jml_aset_laptop_komputer = '';
		}

		if( $("#jml_aset_sepeda :selected").val() !== '' ) { 
			var jml_aset_sepeda = '&jml_aset_sepeda=' + $("#jml_aset_sepeda :selected").val();
		} else {
			var jml_aset_sepeda = '';
		}

		if( $("#jml_aset_perahu :selected").val() !== '' ) { 
			var jml_aset_perahu = '&jml_aset_perahu=' + $("#jml_aset_perahu :selected").val();
		} else {
			var jml_aset_perahu = '';
		}

		if( $("#jml_aset_motor_tempel :selected").val() !== '' ) { 
			var jml_aset_motor_tempel = '&jml_aset_motor_tempel=' + $("#jml_aset_motor_tempel :selected").val();
		} else {
			var jml_aset_motor_tempel = '';
		}
	// end rumah tangga

	// start anggota

		if( $("#nik_kependudukan").val() !== '' ) { 
			var nik_kependudukan = '&nik_kependudukan=' + $("#nik_kependudukan").val();
		} else {
			var nik_kependudukan = '';
		}

		if( $("#nama_penghuni").val() !== '' ) { 
			var nama_penghuni = '&nama_penghuni=' + $("#nama_penghuni").val();
		} else {
			var nama_penghuni = '';
		}

		if( $("#hubungan_kepala_keluarga :selected").val() !== '' ) { 
			var hubungan_kepala_keluarga = '&hubungan_kepala_keluarga=' + $("#hubungan_kepala_keluarga :selected").val();
			console.log(hubungan_kepala_keluarga);
		} else {
			var hubungan_kepala_keluarga = '';
		}

		if( $("#umur").val() !== '' ) { 
			var umur = '&umur=' + $("#umur").val();
		} else {
			var umur = '';
		}

		if( $("#jenis_kelamin :selected").val() !== '' ) { 
			var jenis_kelamin = '&jenis_kelamin=' + $("#jenis_kelamin :selected").val();
		} else {
			var jenis_kelamin = '';
		}

		if( $("#keterangan_gol_darah :selected").val() !== '' ) { 
			var keterangan_gol_darah = '&keterangan_gol_darah=' + $("#keterangan_gol_darah :selected").val();
		} else {
			var keterangan_gol_darah = '';
		}

		if( $("#nama_agama :selected").val() !== '' ) { 
			var nama_agama = '&nama_agama=' + $("#nama_agama :selected").val();
		} else {
			var nama_agama = '';
		}

		if( $("#kewarganegaraan :selected").val() !== '' ) { 
			var kewarganegaraan = '&kewarganegaraan=' + $("#kewarganegaraan :selected").val();
		} else {
			var kewarganegaraan = '';
		}

		if( $("#ijazah_tertinggi_yang_dimiliki :selected").val() !== '' ) { 
			var ijazah_tertinggi_yang_dimiliki = '&ijazah_tertinggi_yang_dimiliki=' + $("#ijazah_tertinggi_yang_dimiliki :selected").val();
		} else {
			var ijazah_tertinggi_yang_dimiliki = '';
		}

		if( $("#jenis_pekerjaan :selected").val() !== '' ) { 
			var jenis_pekerjaan = '&jenis_pekerjaan=' + $("#jenis_pekerjaan :selected").val();
		} else {
			var jenis_pekerjaan = '';
		}

		if( $("#keterangan_penghasilan").val() !== '' ) { 
			var keterangan_penghasilan = '&keterangan_penghasilan=' + $("#keterangan_penghasilan").val();
		} else {
			var keterangan_penghasilan = '';
		}

		if( $("#lama_menganggur").val() !== '' ) { 
			var lama_menganggur = '&lama_menganggur=' + $("#lama_menganggur").val();
		} else {
			var lama_menganggur = '';
		}

		

		if( $("#status_keberadaan_anggota :selected").val() !== '' ) { 
			var status_keberadaan_anggota = '&status_keberadaan_anggota=' + $("#status_keberadaan_anggota :selected").val();
		} else {
			var status_keberadaan_anggota = '';
		}

		if( $("#status_perkawinan :selected").val() !== '' ) { 
			var status_perkawinan = '&status_perkawinan=' + $("#status_perkawinan :selected").val();
		} else {
			var status_perkawinan = '';
		}

		if( $("#umur_kehamilan").val() !== '' ) { 
			var umur_kehamilan = '&umur_kehamilan=' + $("#umur_kehamilan").val();
		} else {
			var umur_kehamilan = '';
		}

		if( $("#nama_kontrasepsi :selected").val() !== '' ) { 
			var nama_kontrasepsi = '&nama_kontrasepsi=' + $("#nama_kontrasepsi :selected").val();
		} else {
			var nama_kontrasepsi = '';
		}

		if( $("#penyakit_anggota :selected").val() !== '' ) { 
			var penyakit_anggota = '&penyakit_anggota=' + $("#penyakit_anggota :selected").val();
		} else {
			var penyakit_anggota = '';
		}

		if( $("#jenis_faskes_pertama :selected").val() !== '' ) { 
			var jenis_faskes_pertama = '&jenis_faskes_pertama=' + $("#jenis_faskes_pertama :selected").val();
		} else {
			var jenis_faskes_pertama = '';
		}

		if( $("#nomor_KKS :selected").val() !== '' ) { 
			var nomor_KKS = '&nomor_KKS=' + $("#nomor_KKS :selected").val();
		} else {
			var nomor_KKS = '';
		}

		if( $("#nomor_KIP :selected").val() !== '' ) { 
			var nomor_KIP = '&nomor_KIP=' + $("#nomor_KIP :selected").val();
		} else {
			var nomor_KIP = '';
		}

		if( $("#nomor_KIS :selected").val() !== '' ) { 
			var nomor_KIS = '&nomor_KIS=' + $("#nomor_KIS :selected").val();
		} else {
			var nomor_KIS = '';
		}

		if( $("#nomor_BPJS_mandiri :selected").val() !== '' ) { 
			var nomor_BPJS_mandiri = '&nomor_BPJS_mandiri=' + $("#nomor_BPJS_mandiri :selected").val();
		} else {
			var nomor_BPJS_mandiri = '';
		}

		if( $("#nomor_BPJS_tenagakerja :selected").val() !== '' ) { 
			var nomor_BPJS_tenagakerja = '&nomor_BPJS_tenagakerja=' + $("#nomor_BPJS_tenagakerja :selected").val();
		} else {
			var nomor_BPJS_tenagakerja = '';
		}

		if( $("#nomor_asuransi :selected").val() !== '' ) { 
			var nomor_asuransi = '&nomor_asuransi=' + $("#nomor_asuransi :selected").val();
		} else {
			var nomor_asuransi = '';
		}

		if( $("#nomor_PKH :selected").val() !== '' ) { 
			var nomor_PKH = '&nomor_PKH=' + $("#nomor_PKH :selected").val();
		} else {
			var nomor_PKH = '';
		}

		if( $("#nomor_BPNT :selected").val() !== '' ) { 
			var nomor_BPNT = '&nomor_BPNT=' + $("#nomor_BPNT :selected").val();
		} else {
			var nomor_BPNT = '';
		}

		if( $("#nomor_KUR :selected").val() !== '' ) { 
			var nomor_KUR = '&nomor_KUR=' + $("#nomor_KUR :selected").val();
		} else {
			var nomor_KUR = '';
		}
	// end anggota

	if( $("#selectKelurahan :selected").val() !== '' || $("#selectKelurahan :selected").val() !== 'ALL' || $("#selectKelurahan :selected").val() !== null ) { 
		var wil_kelurahan = '&nama_kelurahan=' + $("#selectKelurahan :selected").val();
	} else {
		var wil_kelurahan = '';
	}

	if( $("#selectRT :selected").val() !== '' || $("#selectRT :selected").val() !== 'ALL' || $("#selectRT :selected").val() !== null ) { 
		var wil_rt = '&nomor_rt=' + $("#selectRT :selected").val();
	} else {
		var wil_rt = '';
	}

	var optwil = wil_kelurahan+wil_rt;

	var wilayah = '&nama_kecamatan='+opt_kecamatan+optwil;
	var wilayahB = 'nama_kecamatan=balikpapan utara&nama_kelurahan=gunung samarinda';

	var filter_ab = id_bangunan+
					nama_jenis_bangunan+
					legalitas_lahan+
					luas_tanah+
					jumlah_kamar+
					jenis_penerangan+
					drainase+
					jenis_kloset+
					tempat_buang_tinja+
					luas_lantai+
					NOP+
					jenis_atap_terluas+
					jenis_lantai_terluas+
					//Rumah Tangga
					jenis_lapangan_usaha+
					total_penghasilan_keluarga+
					total_pengeluaran_keluarga+
					jml_aset_tabung_gas_5kg_lebih+
					jml_aset_kulkas+
					jml_aset_ac+
					jml_aset_pemanas_air+
					jml_aset_telepon_rumah+
					jml_aset_televisi+
					jml_aset_lahan_atau_bangunan+
					jml_aset_laptop_komputer+
					jml_aset_sepeda+
					jml_aset_perahu+
					jml_aset_motor_tempel;

	var filter_ac = id_bangunan+
					nama_jenis_bangunan+
					legalitas_lahan+
					luas_tanah+
					jumlah_kamar+
					jenis_penerangan+
					drainase+
					jenis_kloset+
					tempat_buang_tinja+
					luas_lantai+
					NOP+
					jenis_atap_terluas+
					jenis_lantai_terluas+
					//Anggota
					nik_kependudukan+ 
					nama_penghuni+ 
					hubungan_kepala_keluarga+ 
					umur+ 
					jenis_kelamin+ 
					keterangan_gol_darah+ 
					nama_agama+ 
					kewarganegaraan+ 
					ijazah_tertinggi_yang_dimiliki+ 
					jenis_pekerjaan+ 
					keterangan_penghasilan+ 
					lama_menganggur+ 
					status_keberadaan_anggota+ 
					status_perkawinan+ 
					umur_kehamilan+ 
					nama_kontrasepsi+ 
					penyakit_anggota+ 
					jenis_faskes_pertama+
					nomor_KKS+ 
					nomor_KIP+ 
					nomor_KIS+ 
					nomor_BPJS_mandiri+ 
					nomor_BPJS_tenagakerja+ 
					nomor_asuransi+ 
					nomor_PKH+ 
					nomor_BPNT+ 
					nomor_KUR;

	var filter_bc = jenis_lapangan_usaha+
					total_penghasilan_keluarga+
					total_pengeluaran_keluarga+
					jml_aset_tabung_gas_5kg_lebih+
					jml_aset_kulkas+
					jml_aset_ac+
					jml_aset_pemanas_air+
					jml_aset_telepon_rumah+
					jml_aset_televisi+
					jml_aset_lahan_atau_bangunan+
					jml_aset_laptop_komputer+
					jml_aset_sepeda+
					jml_aset_perahu+
					jml_aset_motor_tempel+
					//Anggota
					nik_kependudukan+ 
					nama_penghuni+ 
					hubungan_kepala_keluarga+ 
					umur+ 
					jenis_kelamin+ 
					keterangan_gol_darah+ 
					nama_agama+ 
					kewarganegaraan+ 
					ijazah_tertinggi_yang_dimiliki+ 
					jenis_pekerjaan+ 
					keterangan_penghasilan+ 
					lama_menganggur+ 
					status_keberadaan_anggota+ 
					status_perkawinan+ 
					umur_kehamilan+ 
					nama_kontrasepsi+ 
					penyakit_anggota+ 
					jenis_faskes_pertama+
					nomor_KKS+ 
					nomor_KIP+ 
					nomor_KIS+ 
					nomor_BPJS_mandiri+ 
					nomor_BPJS_tenagakerja+ 
					nomor_asuransi+ 
					nomor_PKH+ 
					nomor_BPNT+ 
					nomor_KUR;

	var filter_abc = id_bangunan+
					nama_jenis_bangunan+
					legalitas_lahan+
					luas_tanah+
					jumlah_kamar+
					jenis_penerangan+
					drainase+
					jenis_kloset+
					tempat_buang_tinja+
					luas_lantai+
					NOP+
					jenis_atap_terluas+
					jenis_lantai_terluas+
					//Rumah Tangga
					jenis_lapangan_usaha+
					total_penghasilan_keluarga+
					total_pengeluaran_keluarga+
					jml_aset_tabung_gas_5kg_lebih+
					jml_aset_kulkas+
					jml_aset_ac+
					jml_aset_pemanas_air+
					jml_aset_telepon_rumah+
					jml_aset_televisi+
					jml_aset_lahan_atau_bangunan+
					jml_aset_laptop_komputer+
					jml_aset_sepeda+
					jml_aset_perahu+
					jml_aset_motor_tempel+
					//Anggota
					nik_kependudukan+ 
					nama_penghuni+ 
					hubungan_kepala_keluarga+ 
					umur+ 
					jenis_kelamin+ 
					keterangan_gol_darah+ 
					nama_agama+ 
					kewarganegaraan+ 
					ijazah_tertinggi_yang_dimiliki+ 
					jenis_pekerjaan+ 
					keterangan_penghasilan+ 
					lama_menganggur+ 
					status_keberadaan_anggota+ 
					status_perkawinan+ 
					umur_kehamilan+ 
					nama_kontrasepsi+ 
					penyakit_anggota+ 
					jenis_faskes_pertama+
					nomor_KKS+ 
					nomor_KIP+ 
					nomor_KIS+ 
					nomor_BPJS_mandiri+ 
					nomor_BPJS_tenagakerja+ 
					nomor_asuransi+ 
					nomor_PKH+ 
					nomor_BPNT+ 
					nomor_KUR;


	var filter_a = 	id_bangunan+
					nama_jenis_bangunan+
					legalitas_lahan+
					luas_tanah+
					jumlah_kamar+
					jenis_penerangan+
					drainase+
					jenis_kloset+
					tempat_buang_tinja+
					luas_lantai+
					NOP+
					jenis_atap_terluas+
					jenis_lantai_terluas;

	var filter_b = 	jenis_lapangan_usaha+
					total_penghasilan_keluarga+
					total_pengeluaran_keluarga+
					jml_aset_tabung_gas_5kg_lebih+
					jml_aset_kulkas+
					jml_aset_ac+
					jml_aset_pemanas_air+
					jml_aset_telepon_rumah+
					jml_aset_televisi+
					jml_aset_lahan_atau_bangunan+
					jml_aset_laptop_komputer+
					jml_aset_sepeda+
					jml_aset_perahu+
					jml_aset_motor_tempel;

	var filter_c = 	nik_kependudukan+ 
					nama_penghuni+ 
					hubungan_kepala_keluarga+ 
					umur+ 
					jenis_kelamin+ 
					keterangan_gol_darah+ 
					nama_agama+ 
					kewarganegaraan+ 
					ijazah_tertinggi_yang_dimiliki+ 
					jenis_pekerjaan+ 
					keterangan_penghasilan+ 
					lama_menganggur+ 
					status_keberadaan_anggota+ 
					status_perkawinan+ 
					umur_kehamilan+ 
					nama_kontrasepsi+ 
					penyakit_anggota+ 
					jenis_faskes_pertama+
					nomor_KKS+ 
					nomor_KIP+ 
					nomor_KIS+ 
					nomor_BPJS_mandiri+ 
					nomor_BPJS_tenagakerja+ 
					nomor_asuransi+ 
					nomor_PKH+ 
					nomor_BPNT+ 
					nomor_KUR;

	// console.log(filter_c);

	// var c_kecamatan = $("selectKecamatan").val();


    if( type[0] == "check_bangunan" && type[1] == "check_rumahtangga" && type[2] == "check_anggota") {
			var where = 'filter=abc';
			var options = where+wilayah+filter_abc;
			// var options = wilayahB+filter_a;

			var api ='showKombinasi?'+options;

			if(opt_kecamatan == '') {
				swal({
						title: 'Silahkan Pilih Wilayah',
						// text: 'Option : '+output,
						icon: 'warning',
						buttons: {
							cancel: {
								text: 'Cancel',
								value: null,
								visible: true,
								className: 'btn btn-default',
								closeModal: true,
							}
						}
					});
			} else {
				$.getJSON(api,function(json){
					var output = options.split('&');

					$('#output_filter').html('');
					$.each(output,function(i,v){
						$('#output_filter').append('<li>'+v+'</li>');
					});

					if(json.status !== 'empty') {
						swal({
							title: 'Data Ditemukan',
							text: 'Proses mengambil data...',
							icon: 'success',
							buttons: {
								cancel: {
									text: 'Okey',
									value: null,
									visible: true,
									className: 'btn btn-success',
									closeModal: true,
								}
							}
						});
						loadGeoJSON();
						filterABC(api);
						showMarker(api);
					} else {
						// alert('Data Tidak Ditemukan');
						swal({
							title: 'Data Tidak Ditemukan',
							// text: 'Option : '+output,
							icon: 'error',
							buttons: {
								cancel: {
									text: 'Close',
									value: null,
									visible: true,
									className: 'btn btn-danger',
									closeModal: true,
								}
							}
						});
					}
				});
			}
		} else if(type[0] == "check_bangunan" && type[1] == "check_rumahtangga"){
			var where = 'filter=ab';
			var options = where+wilayah+filter_ab;
			// var options = wilayahB+filter_a;

			var api ='showKombinasi?'+options;

			if(opt_kecamatan == '') {
				swal({
						title: 'Silahkan Pilih Wilayah',
						// text: 'Option : '+output,
						icon: 'warning',
						buttons: {
							cancel: {
								text: 'Cancel',
								value: null,
								visible: true,
								className: 'btn btn-default',
								closeModal: true,
							}
						}
					});
			} else {
				$.getJSON(api,function(json){
					var output = options.split('&');

					$('#output_filter').html('');
					$.each(output,function(i,v){
						$('#output_filter').append('<li>'+v+'</li>');
					});

					if(json.status !== 'empty') {
						swal({
							title: 'Data Ditemukan',
							text: 'Proses mengambil data...',
							icon: 'success',
							buttons: {
								cancel: {
									text: 'Okey',
									value: null,
									visible: true,
									className: 'btn btn-success',
									closeModal: true,
								}
							}
						});
						loadGeoJSON();
						filterAB(api);
						showMarker(api);
					} else {
						// alert('Data Tidak Ditemukan');
						swal({
							title: 'Data Tidak Ditemukan',
							// text: 'Option : '+output,
							icon: 'error',
							buttons: {
								cancel: {
									text: 'Close',
									value: null,
									visible: true,
									className: 'btn btn-danger',
									closeModal: true,
								}
							}
						});
					}
				});
			}
		} else if(type[0] == "check_bangunan" && type[1] == "check_anggota"){
			var where = 'filter=ac';
			var options = where+wilayah+filter_ac;
			// var options = wilayahB+filter_a;

			var api ='showKombinasi?'+options;

			if(opt_kecamatan == '') {
				swal({
						title: 'Silahkan Pilih Wilayah',
						// text: 'Option : '+output,
						icon: 'warning',
						buttons: {
							cancel: {
								text: 'Cancel',
								value: null,
								visible: true,
								className: 'btn btn-default',
								closeModal: true,
							}
						}
					});
			} else {
				$.getJSON(api,function(json){
					var output = options.split('&');

					$('#output_filter').html('');
					$.each(output,function(i,v){
						$('#output_filter').append('<li>'+v+'</li>');
					});

					if(json.status !== 'empty') {
						swal({
							title: 'Data Ditemukan',
							text: 'Proses mengambil data...',
							icon: 'success',
							buttons: {
								cancel: {
									text: 'Okey',
									value: null,
									visible: true,
									className: 'btn btn-success',
									closeModal: true,
								}
							}
						});
						loadGeoJSON();
						filterAC(api);
						showMarker(api);
					} else {
						// alert('Data Tidak Ditemukan');
						swal({
							title: 'Data Tidak Ditemukan',
							// text: 'Option : '+output,
							icon: 'error',
							buttons: {
								cancel: {
									text: 'Close',
									value: null,
									visible: true,
									className: 'btn btn-danger',
									closeModal: true,
								}
							}
						});
					}
				});
			}
		} else if(type[0] != "check_bangunan" && type[1] == "check_anggota"){
			var where = 'filter=bc';
			var options = where+wilayah+filter_bc;
			// var options = wilayahB+filter_a;

			var api ='showKombinasi?'+options;

			if(opt_kecamatan == '') {
				swal({
						title: 'Silahkan Pilih Wilayah',
						// text: 'Option : '+output,
						icon: 'warning',
						buttons: {
							cancel: {
								text: 'Cancel',
								value: null,
								visible: true,
								className: 'btn btn-default',
								closeModal: true,
							}
						}
					});
			} else {
				$.getJSON(api,function(json){
					var output = options.split('&');

					$('#output_filter').html('');
					$.each(output,function(i,v){
						$('#output_filter').append('<li>'+v+'</li>');
					});

					if(json.status !== 'empty') {
						swal({
							title: 'Data Ditemukan',
							text: 'Proses mengambil data...',
							icon: 'success',
							buttons: {
								cancel: {
									text: 'Okey',
									value: null,
									visible: true,
									className: 'btn btn-success',
									closeModal: true,
								}
							}
						});
						loadGeoJSON();
						filterBC(api);
						showMarker(api);
					} else {
						// alert('Data Tidak Ditemukan');
						swal({
							title: 'Data Tidak Ditemukan',
							// text: 'Option : '+output,
							icon: 'error',
							buttons: {
								cancel: {
									text: 'Close',
									value: null,
									visible: true,
									className: 'btn btn-danger',
									closeModal: true,
								}
							}
						});
					}
				});
			}
		} else if(type[0] == "check_bangunan"){
			var where = 'filter=a';
			var options = where+wilayah+filter_a;
			// var options = wilayahB+filter_a;

			var api ='showKombinasi?'+options;

			if(opt_kecamatan == '') {
				swal({
						title: 'Silahkan Pilih Wilayah',
						// text: 'Option : '+output,
						icon: 'warning',
						buttons: {
							cancel: {
								text: 'Cancel',
								value: null,
								visible: true,
								className: 'btn btn-default',
								closeModal: true,
							}
						}
					});
			} else {
				$.getJSON(api,function(json){
					var output = options.split('&');

					$('#output_filter').html('');
					$.each(output,function(i,v){
						$('#output_filter').append('<li>'+v+'</li>');
					});

					if(json.status !== 'empty') {
						swal({
							title: 'Data Ditemukan',
							text: 'Proses mengambil data...',
							icon: 'success',
							buttons: {
								cancel: {
									text: 'Okey',
									value: null,
									visible: true,
									className: 'btn btn-success',
									closeModal: true,
								}
							}
						});
						loadGeoJSON();
						filterA(api);
						showMarker(api);
					} else {
						// alert('Data Tidak Ditemukan');
						swal({
							title: 'Data Tidak Ditemukan',
							// text: 'Option : '+output,
							icon: 'error',
							buttons: {
								cancel: {
									text: 'Close',
									value: null,
									visible: true,
									className: 'btn btn-danger',
									closeModal: true,
								}
							}
						});
					}
				});
			}
			

		} else if(type[0] == "check_rumahtangga"){
			var where = 'filter=b';

			var options = where+wilayah+filter_b;
			// var options = wilayahB+filter_b;

			var api ='showKombinasi?'+options;

			if(opt_kecamatan == '') {
				swal({
						title: 'Silahkan Pilih Wilayah',
						// text: 'Option : '+output,
						icon: 'warning',
						buttons: {
							cancel: {
								text: 'Cancel',
								value: null,
								visible: true,
								className: 'btn btn-default',
								closeModal: true,
							}
						}
					});
			} else {
				$.getJSON(api,function(json){
					var output = options.split('&');

					$('#output_filter').html('');
					$.each(output,function(i,v){
						$('#output_filter').append('<li>'+v+'</li>');
					});

					if(json.status !== 'empty') {
						swal({
							title: 'Data Ditemukan',
							text: 'Proses mengambil data...',
							icon: 'success',
							buttons: {
								cancel: {
									text: 'Okey',
									value: null,
									visible: true,
									className: 'btn btn-success',
									closeModal: true,
								}
							}
						});
						loadGeoJSON();
						filterB(api);
						showMarker(api);
					} else {
						// alert('Data Tidak Ditemukan');
						swal({
							title: 'Data Tidak Ditemukan',
							// text: 'Option : '+output,
							icon: 'error',
							buttons: {
								cancel: {
									text: 'Cancel',
									value: null,
									visible: true,
									className: 'btn btn-default',
									closeModal: true,
								}
							}
						});
					}
				});
			}

		} else if(type[0] == "check_anggota"){
			var where = 'filter=c';

			var options = where+wilayah+filter_c;
			// var options = wilayahB+filter_b;

			

			var api ='showKombinasi?'+options;

			if(opt_kecamatan == '') {
				swal({
						title: 'Silahkan Pilih Wilayah',
						// text: 'Option : '+output,
						icon: 'warning',
						buttons: {
							cancel: {
								text: 'Cancel',
								value: null,
								visible: true,
								className: 'btn btn-default',
								closeModal: true,
							}
						}
					});
			} else {
				$.getJSON(api,function(json){
					var output = options.split('&');

					$('#output_filter').html('');
					$.each(output,function(i,v){
						$('#output_filter').append('<li>'+v+'</li>');
					});

					if(json.status !== 'empty') {
						swal({
							title: 'Data Ditemukan',
							text: 'Proses mengambil data...',
							icon: 'success',
							buttons: {
								cancel: {
									text: 'Okey',
									value: null,
									visible: true,
									className: 'btn btn-success',
									closeModal: true,
								}
							}
						});
						loadGeoJSON();
						filterC(api);
						showMarker(api);
					} else {
						// alert('Data Tidak Ditemukan');
						swal({
							title: 'Data Tidak Ditemukan',
							// text: 'Option : '+output,
							icon: 'error',
							buttons: {
								cancel: {
									text: 'Cancel',
									value: null,
									visible: true,
									className: 'btn btn-default',
									closeModal: true,
								}
							}
						});
					}
				});
			}

			

		} else {
			var where = 'filter : none';
			var options = 'null';
			var api = 'null';

			$('#div_filterA').prop('hidden',true);
			$('#div_filterB').prop('hidden',true);
			$('#div_filterC').prop('hidden',true);

			// showMarker(api);
			swal({
				title: 'Warning !',
				text: 'Silahkan Memilih Filter...',
				icon: 'warning',
				buttons: {
					cancel: {
						text: 'Okey',
						value: null,
						visible: true,
						className: 'btn btn-warning',
						closeModal: true,
					}
				}
			});


		}

		
		// console.log(where);
		console.log({type : where, query :api});
		// console.log('http://sidatabangda.balikpapan.go.id'+api);

	// condition
	function loadGeoJSON() {
		if(opKecamatan == 'ALL' && opKelurahan==''&& opRt=='') {
			var balikpapanKECall = layer_1.loadGeoJson('/balikpapanKECall'); 
		   		initialize(balikpapanKECall);
				console.log(layer_1.loadGeoJson('/balikpapanKECall'));
				btnshowkec();
				console.log('1');

		} else if(opKecamatan != 'ALL' && opKelurahan=='' && opRt==''){
				var geo = layer_1.loadGeoJson('/balikpapanKEC/'+opKecamatan);
				var optKecamatan = opKecamatan;
				    initialize(geo);
					btnshowkec(optKecamatan);
					console.log('2');
		}else if(opKecamatan != 'ALL' && opKelurahan=='all' && opRt==''){
			var geo = layer_1.loadGeoJson('/balikpapanKELKEC/'+opKecamatan);
			var optKecamatan = opKecamatan;
			initialize(geo);
				btnshowkec(optKecamatan);
				console.log('3');

		}else if(opKecamatan != 'ALL' && opKelurahan!='all' && opRt==''){
				var geo = layer_1.loadGeoJson('/balikpapanKEL/'+opKelurahan+'/'+opKecamatan);
				var optKelurahan = opKelurahan;

			    initialize(geo);
				btnshowkel(optKelurahan);
				console.log('5');

		}else if(opKecamatan != 'ALL' && opKelurahan!='all' && opRt=='ALL'){
		   var geo = layer_1.loadGeoJson('/balikpapanKELRT/'+opKelurahan2);
		   var optKelurahan = opKelurahan;
			initialize(geo);
				btnshowkel(optKelurahan);
				console.log('6');


		}else if(opKecamatan != 'ALL' && opKelurahan!='all' && opRt!='ALL'){
			var geo = layer_1.loadGeoJson('/balikpapanRT/'+opKelurahan2+'/'+opRt);
			var optKecamatan = opKecamatan;
			var optKelurahan = opKelurahan;
			var optRT = opRt;		
			initialize(geo);
				btnshowrt(optKecamatan,optKelurahan,optRT);
				console.log('7');


		}else if(opKecamatan == 'ALL' && opKelurahan=='all' && opRt==''){
		  var geo = layer_1.loadGeoJson('/balikpapanKEL');
			initialize(geo);
				btnshowkel();
				console.log('8');

		}else if(opKecamatan == 'ALL' && opKelurahan=='all' && opRt=='ALL'){
		  var geo = layer_1.loadGeoJson('/balikpapanRT');
			initialize(geo);
				btnshowrt();
				console.log('9');

		}
	}
	//end
	// filterA();

	function filterAB(api) {
		$('#div_filterAB').prop('hidden',false);
		$('#div_filterAC').prop('hidden',true);
		$('#div_filterBC').prop('hidden',true);
		$('#div_filterABC').prop('hidden',true);
		$('#div_filterA').prop('hidden',true);
		$('#div_filterB').prop('hidden',true);
		$('#div_filterC').prop('hidden',true);

		var table = $('#tbl_filterAB').DataTable({
				dom: "BPlfrti",
				ajax: api,
				"columns": [
				    { "data": "nama_kecamatan" },
				    { "data": "nama_kelurahan" },
				    { "data": "nomor_rt" },
				    { 	"data": "id_bangunan",
				    	"render": function(data, type, row, meta){
							return data+'_';
						} 
					},
				    { "data": "nama_jenis_bangunan" },
				    { "data": "nama_jalan_utama" },
				    { "data": "nomor_sertifikasi_lahan" },
				    { "data": "legalitas_lahan" },
				    { "data": "luas_tanah" },
				    { "data": "legalitas_bangunan" },
				    { "data": "jenis_penerangan" },
				    { "data": "sumber_air" },
				    { "data": "drainase" },
				    { "data": "jenis_kloset" },
				    { "data": "tempat_buang_tinja" },
				    { "data": "jenis_bahan_bakar_energi" },
				    { "data": "akses_ke_jalan" },
				    { "data": "bangunan_hadap_jalan" },
				    { "data": "bangunan_hadap_sungai" },
				    { "data": "diatas_sempadan_sungai" },
				    { "data": "daerah_buangan_limbah" },
				    { "data": "bangunan_diatas_parit" },
				    { "data": "luas_lantai" },
				    { "data": "jumlah_kamar" },
				    { "data": "jumlah_lantai" },
				    { "data": "jenis_atap_terluas" },
				    { "data": "jenis_dinding_terluas" },
				    { "data": "jenis_lantai_terluas" },
				    { "data": "NOP" },
					{ "data": "pengelolaan_sampah" },
					//rumah tangga
					{ 	"data": "nomor_kartu_keluarga",
				    	"render": function(data, type, row, meta){
							return data+'_';
						} 
					},
				    // { "data": "no_telp" },
				    { "data": "jenis_lapangan_usaha" },
				    { "data": "total_penghasilan_keluarga" },
				    { "data": "total_pengeluaran_keluarga" },
				    { "data": "jml_aset_tabung_gas_5kg_lebih" },
				    { "data": "jml_aset_kulkas" },
				    { "data": "jml_aset_ac" },
				    { "data": "jml_aset_pemanas_air" },
				    { "data": "jml_aset_telepon_rumah" },
				    { "data": "jml_aset_televisi" },
				    { "data": "jml_aset_lahan_atau_bangunan" },
				    { "data": "jml_aset_laptop_komputer" },
				    { "data": "jml_aset_sepeda" },
				    { "data": "jml_aset_perahu" },
				    { "data": "jml_aset_motor_tempel" },
				    { "data": "keterangan" }
				  ],

				deferRender:    true,
				"processing": true,
				"serverSide": false,

			 	'language': {
		            'loadingRecords': '&nbsp;',
		            'processing': '<div class="spinner"></div>'
		        },
				scrollY: 200,
				"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
				
				destroy: true,
				paging: true,
				scrollX: true,
				responsive: false,

		  		columnDefs: [
		            {
		                targets: [0,1,2,3,30],
		                className: 'noVis'
		            },
		            { "visible": false, "targets": [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45] }
		        ],
		  		buttons: [
		            {
			            extend: 'excelHtml5',
			            title: 'excel analisis',
			            text: 'EXCEL',
			            autoFilter: true,
			            exportOptions: {
		                    columns: ':visible'
		                }
			        },
			        {
			        	text: 'Pilih Attribute',
		                extend: 'colvis',
		                columns: ':not(.noVis)',
		                postfixButtons: ['colvisRestore'],
		            }
		        ]
		});


		$('.reload_filter').click(function(){
			// $("#tbl_filterA_processing").css("display","none");
			table.ajax.reload();
		})

	}

	function filterAC(api) {
		$('#div_filterAB').prop('hidden',true);
		$('#div_filterAC').prop('hidden',false);
		$('#div_filterBC').prop('hidden',true);
		$('#div_filterABC').prop('hidden',true);
		$('#div_filterA').prop('hidden',true);
		$('#div_filterB').prop('hidden',true);
		$('#div_filterC').prop('hidden',true);

		var table = $('#tbl_filterAC').DataTable({
				dom: "BPlfrti",
				ajax: api,
				"columns": [
				    { "data": "nama_kecamatan" },
				    { "data": "nama_kelurahan" },
				    { "data": "nomor_rt" },
				    { 	"data": "id_bangunan",
				    	"render": function(data, type, row, meta){
							return data+'_';
						} 
					},
				    { "data": "nama_jenis_bangunan" },
				    { "data": "nama_jalan_utama" },
				    { "data": "nomor_sertifikasi_lahan" },
				    { "data": "legalitas_lahan" },
				    { "data": "luas_tanah" },
				    { "data": "legalitas_bangunan" },
				    { "data": "jenis_penerangan" },
				    { "data": "sumber_air" },
				    { "data": "drainase" },
				    { "data": "jenis_kloset" },
				    { "data": "tempat_buang_tinja" },
				    { "data": "jenis_bahan_bakar_energi" },
				    { "data": "akses_ke_jalan" },
				    { "data": "bangunan_hadap_jalan" },
				    { "data": "bangunan_hadap_sungai" },
				    { "data": "diatas_sempadan_sungai" },
				    { "data": "daerah_buangan_limbah" },
				    { "data": "bangunan_diatas_parit" },
				    { "data": "luas_lantai" },
				    { "data": "jumlah_kamar" },
				    { "data": "jumlah_lantai" },
				    { "data": "jenis_atap_terluas" },
				    { "data": "jenis_dinding_terluas" },
				    { "data": "jenis_lantai_terluas" },
				    { "data": "NOP" },
					{ "data": "pengelolaan_sampah" },
					// anggota
					{ 	"data": "nomor_kartu_keluarga",
				    	"render": function(data, type, row, meta){
							return data+'_';
						} 
					},
				    { 	"data": "nik_kependudukan",
				    	"render": function(data, type, row, meta){
							return data.substr(0,5)+'xxxxxxxxxx_';
						} 
					},
				    { "data": "nama_penghuni" },
				    { "data": "hubungan_kepala_keluarga" },
				    { "data": "tempat_lahir" },
				    { "data": "umur" },
				    { "data": "jenis_kelamin" },
				    { "data": "keterangan_gol_darah" },
				    { "data": "nama_agama" },
				    { "data": "kewarganegaraan" },
				    { "data": "ijazah_tertinggi_yang_dimiliki" },
				    { "data": "jenis_pekerjaan" },
				    { "data": "keterangan_penghasilan" },
				    { "data": "lama_menganggur" },
				    { "data": "status_keberadaan_anggota" },
				    { "data": "status_perkawinan" },
				    { "data": "tgl_kawin" },
				    { "data": "umur_kehamilan" },
				    { "data": "nama_kontrasepsi" },
				    { "data": "penyakit_anggota" },
				    { "data": "jenis_faskes_pertama" },
				    { "data": "nomor_KKS" },
				    { "data": "nomor_KIP" },
				    { "data": "nomor_KIS" },
				    { "data": "nomor_BPJS_mandiri" }, 
				    { "data": "nomor_BPJS_tenagakerja" }, 
				    { "data": "nomor_asuransi" }, 
				    { "data": "nomor_PKH" }, 
				    { "data": "nomor_BPNT" }, 
				    { "data": "nomor_KUR" }, 
				    { "data": "penyakit_kronis" }, 
				    { "data": "keterangan_lain" }
				  ],

				deferRender:    true,
				"processing": true,
				"serverSide": false,

			 	'language': {
		            'loadingRecords': '&nbsp;',
		            'processing': '<div class="spinner"></div>'
		        },
				scrollY: 200,
				"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
				
				destroy: true,
				paging: true,
				scrollX: true,
				responsive: false,

		  		columnDefs: [
		            {
		                targets: [0,1,2,3,30,33],
		                className: 'noVis'
		            },
		            { "visible": false, "targets": [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61] }
		        ],
		  		buttons: [
		            {
			            extend: 'excelHtml5',
			            title: 'excel analisis',
			            text: 'EXCEL',
			            autoFilter: true,
			            exportOptions: {
		                    columns: ':visible'
		                }
			        },
			        {
			        	text: 'Pilih Attribute',
		                extend: 'colvis',
		                columns: ':not(.noVis)',
		                postfixButtons: ['colvisRestore'],
		            }
		        ]
		});


		$('.reload_filter').click(function(){
			// $("#tbl_filterA_processing").css("display","none");
			table.ajax.reload();
		})

	}

	function filterBC(api) {
		$('#div_filterAB').prop('hidden',true);
		$('#div_filterAC').prop('hidden',true);
		$('#div_filterBC').prop('hidden',false);
		$('#div_filterABC').prop('hidden',true);
		$('#div_filterA').prop('hidden',true);
		$('#div_filterB').prop('hidden',true);
		$('#div_filterC').prop('hidden',true);

		var table = $('#tbl_filterBC').DataTable({
				dom: "BPlfrti",
				ajax: api,
				"columns": [
				    { "data": "nama_kecamatan" },
				    { "data": "nama_kelurahan" },
				    { "data": "nomor_rt" },
				    { 	"data": "id_bangunan",
				    	"render": function(data, type, row, meta){
							return data+'_';
						} 
					},
					//rumah tangga
					{ 	"data": "nomor_kartu_keluarga",
				    	"render": function(data, type, row, meta){
							return data+'_';
						} 
					},
				    // { "data": "no_telp" },
				    { "data": "jenis_lapangan_usaha" },
				    { "data": "total_penghasilan_keluarga" },
				    { "data": "total_pengeluaran_keluarga" },
				    { "data": "jml_aset_tabung_gas_5kg_lebih" },
				    { "data": "jml_aset_kulkas" },
				    { "data": "jml_aset_ac" },
				    { "data": "jml_aset_pemanas_air" },
				    { "data": "jml_aset_telepon_rumah" },
				    { "data": "jml_aset_televisi" },
				    { "data": "jml_aset_lahan_atau_bangunan" },
				    { "data": "jml_aset_laptop_komputer" },
				    { "data": "jml_aset_sepeda" },
				    { "data": "jml_aset_perahu" },
				    { "data": "jml_aset_motor_tempel" },
					{ "data": "keterangan" },
					// anggota
				    { 	"data": "nik_kependudukan",
				    	"render": function(data, type, row, meta){
							return data.substr(0,5)+'xxxxxxxxxx_';
						} 
					},
				    { "data": "nama_penghuni" },
				    { "data": "hubungan_kepala_keluarga" },
				    { "data": "tempat_lahir" },
				    { "data": "umur" },
				    { "data": "jenis_kelamin" },
				    { "data": "keterangan_gol_darah" },
				    { "data": "nama_agama" },
				    { "data": "kewarganegaraan" },
				    { "data": "ijazah_tertinggi_yang_dimiliki" },
				    { "data": "jenis_pekerjaan" },
				    { "data": "keterangan_penghasilan" },
				    { "data": "lama_menganggur" },
				    { "data": "status_keberadaan_anggota" },
				    { "data": "status_perkawinan" },
				    { "data": "tgl_kawin" },
				    { "data": "umur_kehamilan" },
				    { "data": "nama_kontrasepsi" },
				    { "data": "penyakit_anggota" },
				    { "data": "jenis_faskes_pertama" },
				    { "data": "nomor_KKS" },
				    { "data": "nomor_KIP" },
				    { "data": "nomor_KIS" },
				    { "data": "nomor_BPJS_mandiri" }, 
				    { "data": "nomor_BPJS_tenagakerja" }, 
				    { "data": "nomor_asuransi" }, 
				    { "data": "nomor_PKH" }, 
				    { "data": "nomor_BPNT" }, 
				    { "data": "nomor_KUR" }, 
				    { "data": "penyakit_kronis" }, 
				    { "data": "keterangan_lain" }
				  ],

				deferRender:    true,
				"processing": true,
				"serverSide": false,

			 	'language': {
		            'loadingRecords': '&nbsp;',
		            'processing': '<div class="spinner"></div>'
		        },
				scrollY: 200,
				"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
				
				destroy: true,
				paging: true,
				scrollX: true,
				responsive: false,

		  		columnDefs: [
		            {
		                targets: [0,1,2,3,4,22],
		                className: 'noVis'
		            },
		            { "visible": false, "targets": [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50] }
		        ],
		  		buttons: [
		            {
			            extend: 'excelHtml5',
			            title: 'excel analisis',
			            text: 'EXCEL',
			            autoFilter: true,
			            exportOptions: {
		                    columns: ':visible'
		                }
			        },
			        {
			        	text: 'Pilih Attribute',
		                extend: 'colvis',
		                columns: ':not(.noVis)',
		                postfixButtons: ['colvisRestore'],
		            }
		        ]
		});


		$('.reload_filter').click(function(){
			// $("#tbl_filterA_processing").css("display","none");
			table.ajax.reload();
		})

	}

	function filterABC(api) {
		$('#div_filterAB').prop('hidden',true);
		$('#div_filterAC').prop('hidden',true);
		$('#div_filterBC').prop('hidden',true);
		$('#div_filterABC').prop('hidden',false);
		$('#div_filterA').prop('hidden',true);
		$('#div_filterB').prop('hidden',true);
		$('#div_filterC').prop('hidden',true);

		var table = $('#tbl_filterABC').DataTable({
				dom: "BPlfrti",
				ajax: api,
				"columns": [
				    { "data": "nama_kecamatan" },
				    { "data": "nama_kelurahan" },
				    { "data": "nomor_rt" },
				    { 	"data": "id_bangunan",
				    	"render": function(data, type, row, meta){
							return data+'_';
						} 
					},
				    { "data": "nama_jenis_bangunan" },
				    { "data": "nama_jalan_utama" },
				    { "data": "nomor_sertifikasi_lahan" },
				    { "data": "legalitas_lahan" },
				    { "data": "luas_tanah" },
				    { "data": "legalitas_bangunan" },
				    { "data": "jenis_penerangan" },
				    { "data": "sumber_air" },
				    { "data": "drainase" },
				    { "data": "jenis_kloset" },
				    { "data": "tempat_buang_tinja" },
				    { "data": "jenis_bahan_bakar_energi" },
				    { "data": "akses_ke_jalan" },
				    { "data": "bangunan_hadap_jalan" },
				    { "data": "bangunan_hadap_sungai" },
				    { "data": "diatas_sempadan_sungai" },
				    { "data": "daerah_buangan_limbah" },
				    { "data": "bangunan_diatas_parit" },
				    { "data": "luas_lantai" },
				    { "data": "jumlah_kamar" },
				    { "data": "jumlah_lantai" },
				    { "data": "jenis_atap_terluas" },
				    { "data": "jenis_dinding_terluas" },
				    { "data": "jenis_lantai_terluas" },
				    { "data": "NOP" },
					{ "data": "pengelolaan_sampah" },
					//rumah tangga
					{ 	"data": "nomor_kartu_keluarga",
				    	"render": function(data, type, row, meta){
							return data+'_';
						} 
					},
				    // { "data": "no_telp" },
				    { "data": "jenis_lapangan_usaha" },
				    { "data": "total_penghasilan_keluarga" },
				    { "data": "total_pengeluaran_keluarga" },
				    { "data": "jml_aset_tabung_gas_5kg_lebih" },
				    { "data": "jml_aset_kulkas" },
				    { "data": "jml_aset_ac" },
				    { "data": "jml_aset_pemanas_air" },
				    { "data": "jml_aset_telepon_rumah" },
				    { "data": "jml_aset_televisi" },
				    { "data": "jml_aset_lahan_atau_bangunan" },
				    { "data": "jml_aset_laptop_komputer" },
				    { "data": "jml_aset_sepeda" },
				    { "data": "jml_aset_perahu" },
				    { "data": "jml_aset_motor_tempel" },
					{ "data": "keterangan" },
					//anggota
					{ 	"data": "nik_kependudukan",
				    	"render": function(data, type, row, meta){
							return data.substr(0,5)+'xxxxxxxxxx_';
						} 
					},
				    { "data": "nama_penghuni" },
				    { "data": "hubungan_kepala_keluarga" },
				    { "data": "tempat_lahir" },
				    { "data": "umur" },
				    { "data": "jenis_kelamin" },
				    { "data": "keterangan_gol_darah" },
				    { "data": "nama_agama" },
				    { "data": "kewarganegaraan" },
				    { "data": "ijazah_tertinggi_yang_dimiliki" },
				    { "data": "jenis_pekerjaan" },
				    { "data": "keterangan_penghasilan" },
				    { "data": "lama_menganggur" },
				    { "data": "status_keberadaan_anggota" },
				    { "data": "status_perkawinan" },
				    { "data": "tgl_kawin" },
				    { "data": "umur_kehamilan" },
				    { "data": "nama_kontrasepsi" },
				    { "data": "penyakit_anggota" },
				    { "data": "jenis_faskes_pertama" },
				    { "data": "nomor_KKS" },
				    { "data": "nomor_KIP" },
				    { "data": "nomor_KIS" },
				    { "data": "nomor_BPJS_mandiri" }, 
				    { "data": "nomor_BPJS_tenagakerja" }, 
				    { "data": "nomor_asuransi" }, 
				    { "data": "nomor_PKH" }, 
				    { "data": "nomor_BPNT" }, 
				    { "data": "nomor_KUR" }, 
				    { "data": "penyakit_kronis" }, 
				    { "data": "keterangan_lain" }

				  ],

				deferRender:    true,
				"processing": true,
				"serverSide": false,

			 	'language': {
		            'loadingRecords': '&nbsp;',
		            'processing': '<div class="spinner"></div>'
		        },
				scrollY: 200,
				"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
				
				destroy: true,
				paging: true,
				scrollX: true,
				responsive: false,

		  		columnDefs: [
		            {
		                targets: [0,1,2,3,30,48],
		                className: 'noVis'
		            },
		            { "visible": false, "targets": [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76] }
		        ],
		  		buttons: [
		            {
			            extend: 'excelHtml5',
			            title: 'excel analisis',
			            text: 'EXCEL',
			            autoFilter: true,
			            exportOptions: {
		                    columns: ':visible'
		                }
			        },
			        {
			        	text: 'Pilih Attribute',
		                extend: 'colvis',
		                columns: ':not(.noVis)',
		                postfixButtons: ['colvisRestore'],
		            }
		        ]
		});


		$('.reload_filter').click(function(){
			// $("#tbl_filterA_processing").css("display","none");
			table.ajax.reload();
		})

	}

	function filterA(api) {
		$('#div_filterAB').prop('hidden',true);
		$('#div_filterAC').prop('hidden',true);
		$('#div_filterBC').prop('hidden',true);
		$('#div_filterABC').prop('hidden',true);
		$('#div_filterA').prop('hidden',false);
		$('#div_filterB').prop('hidden',true);
		$('#div_filterC').prop('hidden',true);

		var table = $('#tbl_filterA').DataTable({
				dom: "BPlfrti",
				ajax: api,
				"columns": [
				    { "data": "nama_kecamatan" },
				    { "data": "nama_kelurahan" },
				    { "data": "nomor_rt" },
				    { 	"data": "id_bangunan",
				    	"render": function(data, type, row, meta){
							return data+'_';
						} 
					},
				    { "data": "nama_jenis_bangunan" },
				    { "data": "nama_jalan_utama" },
				    { "data": "nomor_sertifikasi_lahan" },
				    { "data": "legalitas_lahan" },
				    { "data": "luas_tanah" },
				    { "data": "legalitas_bangunan" },
				    { "data": "jenis_penerangan" },
				    { "data": "sumber_air" },
				    { "data": "drainase" },
				    { "data": "jenis_kloset" },
				    { "data": "tempat_buang_tinja" },
				    { "data": "jenis_bahan_bakar_energi" },
				    { "data": "akses_ke_jalan" },
				    { "data": "bangunan_hadap_jalan" },
				    { "data": "bangunan_hadap_sungai" },
				    { "data": "diatas_sempadan_sungai" },
				    { "data": "daerah_buangan_limbah" },
				    { "data": "bangunan_diatas_parit" },
				    { "data": "luas_lantai" },
				    { "data": "jumlah_kamar" },
				    { "data": "jumlah_lantai" },
				    { "data": "jenis_atap_terluas" },
				    { "data": "jenis_dinding_terluas" },
				    { "data": "jenis_lantai_terluas" },
				    { "data": "NOP" },
				    { "data": "pengelolaan_sampah" }
				  ],

				deferRender:    true,
				"processing": true,
				"serverSide": false,

			 	'language': {
		            'loadingRecords': '&nbsp;',
		            'processing': '<div class="spinner"></div>'
		        },
				scrollY: 200,
				"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
				
				destroy: true,
				paging: true,
				scrollX: true,
				responsive: false,

		  		columnDefs: [
		            {
		                targets: [0,1,2,3],
		                className: 'noVis'
		            },
		            { "visible": false, "targets": [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29] }
		        ],
		  		buttons: [
		            {
			            extend: 'excelHtml5',
			            title: 'excel analisis',
			            text: 'EXCEL',
			            autoFilter: true,
			            exportOptions: {
		                    columns: ':visible'
		                }
			        },
			        {
			        	text: 'Pilih Attribute',
		                extend: 'colvis',
		                columns: ':not(.noVis)',
		                postfixButtons: ['colvisRestore'],
		            }
		        ]
		});


		$('.reload_filter').click(function(){
			// $("#tbl_filterA_processing").css("display","none");
			table.ajax.reload();
		})

		// table.on('xhr.dt', function ( e, settings, json, xhr ) {

	 //        console.log(json);
	 //        console.log(xhr.status);
	 //        if(xhr.status == 0) {
	 //        	$("#tbl_filterA").html("");
	 //        	$("#tbl_filterA").append('<tbody><tr><th colspan="3">No data found in the server</th></tr>'+
	 //                    	'<button class="btn btn-danger reload_filter">Reload <i class="fa fa-redo"></i></button></tbody>');
	 //        }
	 //    } )

	}

	function filterB(api) {
		$('#div_filterAB').prop('hidden',true);
		$('#div_filterAC').prop('hidden',true);
		$('#div_filterBC').prop('hidden',true);
		$('#div_filterABC').prop('hidden',true);
		$('#div_filterB').prop('hidden',false);
		$('#div_filterA').prop('hidden',true);
		$('#div_filterC').prop('hidden',true);

		var table = $('#tbl_filterB').DataTable({
				dom: "BPlfrti",
				ajax: api,
				"columns": [
				    { "data": "nama_kecamatan" },
				    { "data": "nama_kelurahan" },
				    { "data": "nomor_rt" },
				    { 	"data": "id_bangunan",
				    	"render": function(data, type, row, meta){
							return data+'_';
						} 
					},
				    { 	"data": "nomor_kartu_keluarga",
				    	"render": function(data, type, row, meta){
							return data+'_';
						} 
					},
				    { "data": "jenis_lapangan_usaha" },
				    { "data": "total_penghasilan_keluarga" },
				    { "data": "total_pengeluaran_keluarga" },
				    { "data": "jml_aset_tabung_gas_5kg_lebih" },
				    { "data": "jml_aset_kulkas" },
				    { "data": "jml_aset_ac" },
				    { "data": "jml_aset_pemanas_air" },
				    { "data": "jml_aset_telepon_rumah" },
				    { "data": "jml_aset_televisi" },
				    { "data": "jml_aset_lahan_atau_bangunan" },
				    { "data": "jml_aset_laptop_komputer" },
				    { "data": "jml_aset_sepeda" },
				    { "data": "jml_aset_perahu" },
				    { "data": "jml_aset_motor_tempel" },
				    { "data": "keterangan" }
				  ],

				deferRender:    true,
				"processing": true,
				"serverSide": false,

			 	'language': {
		            'loadingRecords': '&nbsp;',
		            'processing': '<div class="spinner"></div>'
		        },
				scrollY: 200,
				"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
				
				destroy: true,
				paging: true,
				scrollX: true,
				responsive: false,

		  		columnDefs: [
		            {
		                targets: [0,1,2,3,4],
		                className: 'noVis'
		            },
		            { "visible": false, "targets": [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19] }
		        ],
		  		buttons: [
		            {
			            extend: 'excelHtml5',
			            title: 'excel analisis',
			            text: 'EXCEL',
			            autoFilter: true,
			            exportOptions: {
		                    columns: ':visible'
		                }
			        },
			        {
			        	text: 'Pilih Attribute',
		                extend: 'colvis',
		                columns: ':not(.noVis)',
		                postfixButtons: ['colvisRestore'],
		            }
		        ]
		});


		$('.reload_filter').click(function(){
			// $("#tbl_filterA_processing").css("display","none");
			table.ajax.reload();
		})

		table.on('xhr.dt', function ( e, settings, json, xhr ) {
        // Do some staff here...
	        // $('#status').html( json.status );
	        // console.log(json);
	        console.log(xhr.status);
	        if(xhr.status == 0) {
	        	// table.destroy();
	        	$("#tbl_filterA").html("");
	        	$("#tbl_filterA").append('<tbody><tr><th colspan="3">No data found in the server</th></tr>'+
	                    	'<button class="btn btn-danger reload_filter">Reload <i class="fa fa-redo"></i></button></tbody>');
	        }
	    } )
	}

	function filterC(api) {
		$('#div_filterAB').prop('hidden',true);
		$('#div_filterAC').prop('hidden',true);
		$('#div_filterBC').prop('hidden',true);
		$('#div_filterABC').prop('hidden',true);
		$('#div_filterC').prop('hidden',false);
		$('#div_filterB').prop('hidden',true);
		$('#div_filterA').prop('hidden',true);

		var table = $('#tbl_filterC').DataTable({
				dom: "BPlfrti",
				ajax: api,
				"columns": [
				    { "data": "nama_kecamatan" },
				    { "data": "nama_kelurahan" },
				    { "data": "nomor_rt" },
				    { 	"data": "id_bangunan",
				    	"render": function(data, type, row, meta){
							return data+'_';
						} 
					},
					{ 	"data": "nomor_kartu_keluarga",
				    	"render": function(data, type, row, meta){
							return data+'_';
						} 
					},
					{ 	"data": "nik_kependudukan",
				    	"render": function(data, type, row, meta){
							return data.substr(0,5)+'xxxxxxxxxx_';
						} 
					},
				    { "data": "nama_penghuni" },
				    { "data": "hubungan_kepala_keluarga" },
				    { "data": "tempat_lahir" },
				    { "data": "umur" },
				    { "data": "jenis_kelamin" },
				    { "data": "keterangan_gol_darah" },
				    { "data": "nama_agama" },
				    { "data": "kewarganegaraan" },
				    { "data": "ijazah_tertinggi_yang_dimiliki" },
				    { "data": "jenis_pekerjaan" },
				    { "data": "keterangan_penghasilan" },
				    { "data": "lama_menganggur" },
				    { "data": "status_keberadaan_anggota" },
				    { "data": "status_perkawinan" },
				    { "data": "tgl_kawin" },
				    { "data": "umur_kehamilan" },
				    { "data": "nama_kontrasepsi" },
				    { "data": "penyakit_anggota" },
				    { "data": "jenis_faskes_pertama" },
				    { "data": "nomor_KKS" },
				    { "data": "nomor_KIP" },
				    { "data": "nomor_KIS" },
				    { "data": "nomor_BPJS_mandiri" }, 
				    { "data": "nomor_BPJS_tenagakerja" }, 
				    { "data": "nomor_asuransi" }, 
				    { "data": "nomor_PKH" }, 
				    { "data": "nomor_BPNT" }, 
				    { "data": "nomor_KUR" }, 
				    { "data": "penyakit_kronis" }, 
				    { "data": "keterangan_lain" }
				  ],

				deferRender:    true,
				"processing": true,
				"serverSide": false,

			 	'language': {
		            'loadingRecords': '&nbsp;',
		            'processing': '<div class="spinner"></div>'
		        },
				scrollY: 200,
				"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
				
				destroy: true,
				paging: true,
				scrollX: true,
				responsive: false,

		  		columnDefs: [
		            {
		                targets: [0,1,2,3,4,5],
		                className: 'noVis'
		            },
		            { "visible": false, "targets": [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35] }
		        ],
		  		buttons: [
		            {
			            extend: 'excelHtml5',
			            title: 'excel analisis',
			            text: 'EXCEL',
			            autoFilter: true,
			            exportOptions: {
		                    columns: ':visible'
		                }
			        },
			        {
			        	text: 'Pilih Attribute',
		                extend: 'colvis',
		                columns: ':not(.noVis)',
		                postfixButtons: ['colvisRestore'],
		            }
		        ]
		});


		$('.reload_filter').click(function(){
			// $("#tbl_filterA_processing").css("display","none");
			table.ajax.reload();
		})

		table.on('xhr.dt', function ( e, settings, json, xhr ) {
        // Do some staff here...
	        // $('#status').html( json.status );
	        // console.log(json);
	        console.log(xhr.status);
	        if(xhr.status == 0) {
	        	// table.destroy();
	        	$("#tbl_filterA").html("");
	        	$("#tbl_filterA").append('<tbody><tr><th colspan="3">No data found in the server</th></tr>'+
	                    	'<button class="btn btn-danger reload_filter">Reload <i class="fa fa-redo"></i></button></tbody>');
	        }
	    } )
	}

	// $('.dt-button-collection .buttons-columnVisibility').each(function(){
	// 	var $li = $(this),
	// 		$cb = $('<input>', {
	// 				type:'checkbox',
	// 				style:'margin:0 .25em 0 0; vertical-align:middle'}
	// 			  ).prop('checked', $(this).hasClass('active') );
	// 	$li.find('a').prepend( $cb );
	//   });
	   
	//   $('.dt-button-collection').on('click', 'input:checkbox,li', function(){
	// 	var $li = $(this).closest('li'),
	// 		$cb = $li.find('input:checkbox');
	// 	$cb.prop('checked', $li.hasClass('active') );
	//   });

	function showMarker(api) {
		$.getJSON(api, function(json) {
			
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

				console.log(json);
		
				$.each(json.data, function(i, v) {
					if(v.nama_kecamatan=='Balikpapan Tengah'){
						icon = tengah;
					}else if(v.nama_kecamatan=='Balikpapan Kota'){
						icon = kota;
					}else if(v.nama_kecamatan=='Balikpapan Utara'){
						icon = utara;
					}else if(v.nama_kecamatan=='Balikpapan Barat'){
						icon = barat;
					}else if(v.nama_kecamatan=='Balikpapan Timur'){
						icon = timur;
					}else if(v.nama_kecamatan=='Balikpapan Selatan'){
						icon = selatan;
					}


					var marker = new google.maps.Marker({
						position: new google.maps.LatLng(v.latitude,v.longitude),
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
                            // $("span").text('');
    
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
		
					// var markerCluster = new MarkerClusterer(map, markers,
					// 	{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
		});
	}


	function btnshowrt(optKecamatan,optKelurahan,optRT){
		// $('#info-wilayah').text(optKelurahan);
		// $('#info-wilayah').text(optKelurahan+' RT'+optRT);
	
		// $( "#content-wilayah" ).html('');
		// console.log('/bpprt/'+optKelurahan+'/'+optRT);
		// $.getJSON('/bpprt/'+optKelurahan+'/'+optRT, function(x,y) {
		// 	if(x.message=='Failed!'){
		// 		$( "#content-wilayah" ).append(
		// 			'Data Belum Tersedia');
		// 	}else{
		// 		$( "#content-wilayah" ).append( 
		// 			'<tr><td><strong>Kecamatan : </strong></td><td>'+optKecamatan.toUpperCase()+' </td></tr>'+
		// 			'<tr><td><strong>Kelurahan : </strong></td><td>'+optKelurahan.toUpperCase()+' </td></tr>'+
		// 			'<tr><td><strong>RT : </strong></td><td>'+optRT.toUpperCase()+' </td></tr>'+
		// 			'<tr><td><strong>Jumlah Kepala Keluarga : </strong></td><td>'+x.data[0]['jml_kepala_keluarga']+'</td></tr>'+
		// 			'<tr><td><strong>Jumlah Penduduk Laki-Laki : </strong></td><td>'+x.data[0]['populasi_pria']+'</td></tr>'+
		// 			'<tr><td><strong>Jumlah Penduduk Perempuan : </strong></td><td>'+x.data[0]['populasi_wanita']+'</td></tr>'+
		// 			'<tr><td><strong>Jumlah Penduduk : </strong></td><td>'+x.data[0]['jumlah_penduduk']+'</td></tr>'+
		// 			'<tr><td><h4>Lingkungan</h4></td><td>&nbsp;</td></tr>'+
		// 			'<tr><td><strong>Panjang Jalan : </strong></td><td>'+x.data[0]['panjang_jalan_meter']+'</td></tr>'+
		// 			'<tr><td><strong>Jalan Kondisi Baik : </strong></td><td>'+x.data[0]['panjang_jalan_baik']+'</td></tr>'+
		// 			'<tr><td><strong>Jalan Kondisi Rusak : </strong></td><td>'+x.data[0]['panjang_jalan_rusak']+'</td></tr>'+
		// 			'<tr><td><strong>Panjang Drainase : </strong></td><td>'+x.data[0]['panjang_drainase']+'</td></tr>'+
		// 			'<tr><td><strong>Bangunan memiliki drainase : </strong></td><td>'+x.data[0]['jml_bangunan_dgn_drainase']+'</td></tr>'+
		// 			'<tr><td><strong>Bangunan tidak memiliki drainase : </strong></td><td>'+x.data[0]['jml_bangunan_non_drainase']+'</td></tr>'
		// 			);
		// 	}
		// 	  $("#loading").hide();
		// });

	  var infowindow = new google.maps.InfoWindow();
			infowindow.opened = false;

			layer_1.addListener('mouseout', function(event) {
			  infowindow.close();
			  infowindow.opened = false;
			});

			layer_1.setStyle(function(feature) {
				var SD_NAME = feature.getProperty('Name');
				var sd_kecamatan = feature.getProperty('Kecamatan');
				var sd_kelurahan = feature.getProperty('Kelurahan');
			 	var coor = feature.getGeometry('coordinates');
			 	var color = "black";
				 var locations =[];
				 
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
				  if (Object.keys(coor.getAt(0).getAt(0)).length == 1)  {
					  for (var i = 0; i < coor.getAt(0).getAt(0).getArray().length; i++) {
						  loc = coor.getAt(0).getAt(0).getAt(i);
						  bounds.extend(loc);
						  locations.push(loc);
						  // console.log(locations);
					  }
				  }
				  else {

						  for (var i = 0; i < coor.getAt(0).getArray().length; i++) {
							  loc = coor.getAt(0).getAt(i);
							  bounds.extend(loc);
						  }
				  }
				
				center = bounds;
	  			map.fitBounds(bounds);
	
				return {
					fillColor: '#000000',
				  	// strokeColor: strokecolor,
				  strokeColor: '#BC1C1C',
				  strokeWeight: 1,
				  // label: mapLabel,
				}
				
			 layer_1.revertStyle();

			});

				layer_1.setMap(map);
				map.setZoom(14);
	};
	function btnshowkel(optKelurahan){
		// $('#info-wilayah').text(optKelurahan);
		// $('#info-wilayah').text(optKelurahan);
	
		// $( "#content-wilayah" ).html('');
		// $.getJSON('/bppkelurahan/'+optKelurahan, function(x,y) {
		// 	if(x.message=='Failed!'){
		// 		$("#info-wilayah").text(optKelurahan.toUpperCase());
		// 		$( "#content-wilayah" ).append('Data Belum Tersedia');
		// 	}else{
		// 		$("#info-wilayah").text(optKelurahan.toUpperCase());
		// 		$( "#content-wilayah" ).append( 
		// 			'<tr><td><strong>Kecamatan : </strong></td><td>'+x.data[0]['nama_kecamatan']+'</td></tr>'+
		// 			'<tr><td><strong>Kelurahan : </strong></td><td>'+x.data[0]['nama_kelurahan']+'</td></tr>'+
		// 			'<tr><td><strong>Jumlah RT : </strong></td><td>'+x.data[0]['jumlah_rt']+'</td></tr>'+
		// 			'<tr><td><strong>Jumlah Kepala Keluarga : </strong></td><td>'+x.data[0]['jml_kepala_keluarga']+'</td></tr>'+
		// 			'<tr><td><strong>Jumlah Penduduk Laki-Laki : </strong></td><td>'+x.data[0]['populasi_pria']+'</td></tr>'+
		// 			'<tr><td><strong>Jumlah Penduduk Perempuan : </strong></td><td>'+x.data[0]['populasi_wanita']+'</td></tr>'+
		// 			'<tr><td><strong>Jumlah Penduduk : </strong></td><td>'+x.data[0]['jumlah_penduduk']+'</td></tr>'+
		// 			'<tr><td><h4>Lingkungan</h4></td><td>&nbsp;</td></tr>'+
		// 			'<tr><td><strong>Panjang Jalan : </strong></td><td>'+x.data[0]['panjang_jalan_meter']+'</td></tr>'+
		// 			'<tr><td><strong>Jalan Kondisi Baik : </strong></td><td>'+x.data[0]['panjang_jalan_baik']+'</td></tr>'+
		// 			'<tr><td><strong>Jalan Kondisi Rusak : </strong></td><td>'+x.data[0]['panjang_jalan_rusak']+'</td></tr>'+
		// 			'<tr><td><strong>Panjang Drainase : </strong></td><td>'+x.data[0]['panjang_drainase']+'</td></tr>'+
		// 			'<tr><td><strong>Bangunan memiliki drainase : </strong></td><td>'+x.data[0]['jml_bangunan_dgn_drainase']+'</td></tr>'+
		// 			'<tr><td><strong>Bangunan tidak memiliki drainase : </strong></td><td>'+x.data[0]['jml_bangunan_non_drainase']+'</td></tr>'
		// 			);
		// 	}
		// 		$("#loading").hide();
		// });

		layer_1.setStyle(function(feature) {
			 var SD_NAME = feature.getProperty('Name');
			 var coor = feature.getGeometry('coordinates');
			 var color = "black";

				if (SD_NAME == "baru ilir" ||SD_NAME == "marga sari" ||SD_NAME == "baru tengah" ||SD_NAME == "margo mulyo" ||SD_NAME == "baru ulu" ||SD_NAME == "kariangau" ) {

					color = "";
					strokecolor = "orange";

				} else if(SD_NAME == "batu ampar" ||SD_NAME == "graha indah"||SD_NAME == "gunung samarinda"||SD_NAME == "gunung samarinda baru"||SD_NAME == "karang joang"||SD_NAME == "muara rapak") {
					color = "";
					strokecolor = "yellow";

				} else if(SD_NAME == "teritip" ||SD_NAME == "manggar" ||SD_NAME == "lamaru" ||SD_NAME == "manggar baru" ) {
					color = "";
					strokecolor = "red";

				} else if(SD_NAME == "damai bahagia" ||SD_NAME == "damai baru" ||SD_NAME == "sepinggan raya" ||SD_NAME == "sungai nangka" ||SD_NAME == "sepinggan baru" ||SD_NAME == "gunung bahagia" ||SD_NAME == "sepinggan") {
					color = "";
					strokecolor = "white";

				} else if(SD_NAME == "gunung sari ilir" ||SD_NAME == "karang jati" ||SD_NAME == "karang rejo" ||SD_NAME == "mekar sari" ||SD_NAME == "sumber rejo" ||SD_NAME == "gunung sari ulu" ) {
					color = "";
					strokecolor = "blue";

				} else if(SD_NAME == "damai" ||SD_NAME == "klandasan ulu" ||SD_NAME == "prapatan" ||SD_NAME == "telaga sari" ||SD_NAME == "klandasan ilir" ) {
					color = "";
					strokecolor = "green";

				}

				var bounds = new google.maps.LatLngBounds();

				  if (Object.keys(coor.getAt(0).getAt(0)).length == 1)  {
					  for (var i = 0; i < coor.getAt(0).getAt(0).getArray().length; i++) {
						  loc = coor.getAt(0).getAt(0).getAt(i);
						  bounds.extend(loc);
					  }
				  }
				  else {

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
					fontColor:'#ffffff'
				});

				return {
				  fillColor: 'black',
				//   strokeColor: 'red',
				  // strokeColor: strokecolor,
				  strokeColor: '#BC1C1C',
				  strokeWeight: 1,
				  label: mapLabel,
				}
				 
					layer_1.revertStyle();

		});

				map.setZoom(6);
				layer_1.setMap(map);
	};
	function btnshowkec(optKecamatan){
		// $('#info-box').text(optKecamatan);
		// $('#info-wilayah').text(optKecamatan);
	
		// $( "#content-wilayah" ).html('');

		// $.getJSON('/bppkecamatan/'+optKecamatan, function(x,y) {
		// if(x.message=='Failed!'){
		// 	$( "#content-wilayah" ).append('Data Belum Tersedia');
		// }else{
		// 	$( "#content-wilayah" ).append( 
		// 		'<tr><td><strong>Kecamatan : </strong></td><td>'+x.data[0]['nama_kecamatan']+'</td></tr>'+
		// 		'<tr><td><strong>Jumlah Kelurahan : </strong></td><td>'+x.data[0]['jumlah_kelurahan']+'</td></tr>'+
		// 		'<tr><td><strong>Jumlah RT : </strong></td><td>'+x.data[0]['jumlah_rt']+'</td></tr>'+
		// 		'<tr><td><strong>Jumlah Kepala Keluarga : </strong></td><td>'+x.data[0]['jml_kepala_keluarga']+'</td></tr>'+
		// 		'<tr><td><strong>Jumlah Penduduk Laki-Laki : </strong></td><td>'+x.data[0]['populasi_pria']+'</td></tr>'+
		// 		'<tr><td><strong>Jumlah Penduduk Perempuan : </strong></td><td>'+x.data[0]['populasi_wanita']+'</td></tr>'+
		// 		'<tr><td><strong>Jumlah Penduduk : </strong></td><td>'+x.data[0]['jumlah_penduduk']+'</td></tr>'+
		// 		'<tr><td><h4>Lingkungan</h4></td><td>&nbsp;</td></tr>'+
		// 		'<tr><td><strong>Panjang Jalan : </strong></td><td>'+x.data[0]['panjang_jalan_meter']+'</td></tr>'+
		// 		'<tr><td><strong>Jalan Kondisi Baik : </strong></td><td>'+x.data[0]['panjang_jalan_baik']+'</td></tr>'+
		// 		'<tr><td><strong>Jalan Kondisi Rusak : </strong></td><td>'+x.data[0]['panjang_jalan_rusak']+'</td></tr>'+
		// 		'<tr><td><strong>Panjang Drainase : </strong></td><td>'+x.data[0]['panjang_drainase']+'</td></tr>'+
		// 		'<tr><td><strong>Bangunan memiliki drainase : </strong></td><td>'+x.data[0]['jml_bangunan_dgn_drainase']+'</td></tr>'+
		// 		'<tr><td><strong>Bangunan tidak memiliki drainase : </strong></td><td>'+x.data[0]['jml_bangunan_non_drainase']+'</td></tr>'
		// 		);
		// 	}
		// });

		layer_1.setStyle(function(feature) {
			 var SD_NAME = feature.getProperty('Name');
			 var coor = feature.getGeometry('coordinates');
			 var color = "black";

				if (SD_NAME == "balikpapan barat") {

					color = "";
					strokecolor = "orange";
				} else if(SD_NAME == "balikpapan utara") {
					color = "";
					strokecolor = "yellow";
				} else if(SD_NAME == "balikpapan timur") {
					color = "";
					strokecolor = "red";
				} else if(SD_NAME == "balikpapan selatan") {
					color = "";
					strokecolor = "white";
				} else if(SD_NAME == "balikpapan tengah") {
					color = "";
					strokecolor = "blue";
				} else if(SD_NAME == "balikpapan kota") {
					color = "";
					strokecolor = "green";
				}
				 var bounds = new google.maps.LatLngBounds();
				  if (Object.keys(coor.getAt(0).getAt(0)).length == 1)  {
					  for (var i = 0; i < coor.getAt(0).getAt(0).getArray().length; i++) {
						  loc = coor.getAt(0).getAt(0).getAt(i);
						  bounds.extend(loc);
					  }
				  }
				  else {

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
					fontColor:'#ffffff'
				});

				return {
				  fillColor: color,
				  // strokeColor: strokecolor,
				  strokeColor: '#BC1C1C',
				  strokeWeight: 1,
				  label: mapLabel,
				}
				

				 layer_1.revertStyle();				 

		});
				layer_1.setMap(map);
	};
	
	
});

function initialize(geo) {

	var defaultMapStyles = [];
	var flatMapStyles = [{"stylers":[{"visibility":"off"}]},{"featureType":"road","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road.arterial","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"road.highway","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"landscape","stylers":[{"visibility":"on"},{"color":"#f3f4f4"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#7fc8ed"}]},{},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#83cead"}]},{"elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"weight":0.9},{"visibility":"off"}]}]; 
	var turquoiseWaterStyles = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill"},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#7dcdcd"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]}];
	var icyBlueStyles = [{"stylers":[{"hue":"#2c3e50"},{"saturation":250}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":50},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]}];
	var oldDryMudStyles = [{"featureType":"landscape","stylers":[{"hue":"#FFAD00"},{"saturation":50.2},{"lightness":-34.8},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFAD00"},{"saturation":-19.8},{"lightness":-1.8},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FFAD00"},{"saturation":72.4},{"lightness":-32.6},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FFAD00"},{"saturation":74.4},{"lightness":-18},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#00FFA6"},{"saturation":-63.2},{"lightness":38},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#FFC300"},{"saturation":54.2},{"lightness":-14.4},{"gamma":1}]}];
	var cobaltStyles  = [{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":10},{"lightness":10},{"gamma":0.8},{"hue":"#293036"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#293036"}]}];
	var darkRedStyles   = [{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":10},{"lightness":10},{"gamma":0.8},{"hue":"#000000"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#293036"}]}];

    var data = geo;
    var center ;
    var mapProp = {
        center: x,
		zoom: 12,
		// disableDefaultUI: true,
		mapTypeControl: true,
		// mapTypeControlOptions: {
		// 	style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
  //             position: google.maps.ControlPosition.LEFT_CENTER
		// },
		scaleControl: false,
		streetViewControl: true,
		streetViewControlOptions: {
			position: google.maps.ControlPosition.TOP_CENTER
		},
		fullscreenControl: false,
		zoomControl: false,
		mapTypeId: 'roadmap',
		styles: turquoiseWaterStyles
    };
	
	map = new google.maps.Map(document.getElementById("google-map-default"), mapProp);

    map.data.addGeoJson(data);
    
	$('[data-map-theme]').click(function() {
		var targetTheme = $(this).attr('data-map-theme');
		var targetLi = $(this).closest('li');
		var targetText = $(this).text();
		var inverseContentMode = false;
		$('#map-theme-selection li').not(targetLi).removeClass('active');
		$('#map-theme-text').text(targetText);
		$(targetLi).addClass('active');
		
		switch(targetTheme) {
			case 'flat':
				map.setOptions({styles: flatMapStyles});
			break;
			case 'turquoise-water':
				map.setOptions({styles: turquoiseWaterStyles});
			break;
			case 'icy-COLOR_BLUE':
				map.setOptions({styles: icyBlueStyles});
			break;
			case 'cobalt':
				map.setOptions({styles: cobaltStyles});
				inverseContentMode = true;
			break;
			case 'old-dry-mud':
				map.setOptions({styles: oldDryMudStyles});
			break;
			case 'dark-red':
				map.setOptions({styles: darkRedStyles});
				inverseContentMode = true;
				break;
			default:
				map.setOptions({styles: defaultMapStyles});
				break;
		}

		if (inverseContentMode === true) {
			$('#content').addClass('content-inverse-mode');
		} else {
			$('#content').removeClass('content-inverse-mode');
		}
	});
};

$('#content-menu-hidden').click(function(){
	$('#content-menu').prop('hidden',true);
	$('#info-content-show').prop('hidden',false);
});
$(document).ready(function() {
	MapGoogle.init();
	handleSelect2();
	optBangunan();
	optAnggota();
	optRumahTangga();
	
});