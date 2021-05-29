
var kelurahanid = $('#kelurahan_id').val();

console.log(kelurahanid);

// var txt = "";
// var person = ["Banana", "Orange", "Apple", "Mango"];
// var points = [40, 100, 1, 5, 25, 10];

// console.log(person.sort());
// console.log(points.sort(function(a, b){return a - b}));
// points.forEach(myFunction);
// $('#isi-detailrt').html(txt);

// function myFunction(value,index,array) {
//     txt = txt + value + "<br>";
// }

$.getJSON('/kelurahan/summaryall/'+kelurahanid,function(json){
    
    $.each(json.data,function(i,v){

        // person.push(v.nomor_rt);
        $('#isi-detailrt').append('<div class="col-xl-3 col-md-6">'+
                '<div class="panel panel-inverse " >'+
                    '<div class="widget widget-stats bg-gradient-teal m-b-10">'+
                        '<div class="stats-icon stats-icon-lg"><i class="fa fa-globe fa-fw"></i></div>'+
                        '<div class="stats-content">'+
                            '<div class="stats-title">RT '+v.nomor_rt+'</div>'+
                            '<div class="stats-number" id="txt_status'+v.nomor_rt+'">0 / 0 / 0</div>'+
                            '<div class="stats-desc">Total Bangunan / KK / Anggota</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="panel-body">'+
                    ' <div class="height-sm" data-scrollbar="true">'+
                            '<div class="">'+
                                '<table class="table table-sm m-b-0 text-inverse ">'+
                                    '<thead>'+
                                        '<tr><th class="text-center">Approve</th><th class="text-center">Rejected</th><th class="text-center">In Progress</th><th class="text-center">Requested</th></tr>'+
                                    '</thead>'+
                                    '<tbody id="detailRow'+v.nomor_rt+'"></tbody>'+
                            ' </table>'+
                            '</div>'+
                    ' </div>'+
                ' </div>'+
                '</div>'+
            '</div>');
        // $.getJSON('/kelurahan/bangunanStatus/'+v.id_kelurahan+'/'+v.id_rt,function(data){
        $('#txt_status'+v.nomor_rt).text(v.jumlah_bangunan + ' / ' + v.jumlah_penghuni + ' / ' + v.jumlah_anggota);
            

            // $.each(data.data,function(x,y){
            //     $('#txt_status'+v.nomor_rt).text(y.jml_bangunan + ' / ' + y.jml_kk);
            $.getJSON('/kelurahan/statusVerifikasi/'+v.id_kelurahan+'/'+v.id_rt,function(arr){
                $.each(arr.data,function(ind,val){
                    $('#detailRow'+v.nomor_rt).append('<td class="text-center">'+val.approved+'</td><td class="text-center">'+val.rejected+'</td><td class="text-center">'+val.progress+'</td><td class="text-center">'+val.requested+'</td>')
                })
            });

        // });

        // });
        
    })


});
