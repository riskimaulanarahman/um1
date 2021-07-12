@extends('layouts.default')

@section('title', 'Home Warga')

@push('css')
<!-- <link href="/assets/plugins/jvectormap-next/jquery-jvectormap.css" rel="stylesheet" />
<link href="/assets/plugins/bootstrap-calendar/css/bootstrap_calendar.css" rel="stylesheet" />
<link href="/assets/plugins/gritter/css/jquery.gritter.css" rel="stylesheet" />
<link href="/assets/plugins/nvd3/build/nv.d3.css" rel="stylesheet" /> -->
<link href="/assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" />
<link href="/assets/plugins/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css" rel="stylesheet" />
<style>
	@media (min-width: 992px) {
		.col-md-2 {
			max-width: 14.2%;
		}

	}
</style>
@endpush

@section('content')

<div class="row">
	<div class="col-xl-12">
		<!-- begin panel -->
		<div class="panel panel-inverse">
			<!-- begin panel-heading -->
			<div class="panel-heading">
				<h4 class="panel-title">Lapor Gangguan Lingkungan</h4>
				<div class="panel-heading-btn">
					<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
					<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
					<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
					<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
				</div>
			</div>
			<!-- end panel-heading -->

			<!-- begin panel-body -->
			<div class="panel-body">
				@if (session('status'))
                    <div class="alert alert-success fade show">
                        <button type="button" class="close" data-dismiss="alert">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        {{ session('status') }}
                    </div>
                @endif
				@if(!$namart)
					<div class="alert alert-danger fade show">
						Data Ketua RT belum ada
					</div>
				@else
					<div class="alert alert-info fade show">
						Nama Ketua RT : {{$namart->name}} <br>
						No Telp : {{$namart->notelp}}

					</div>
					<button type="button" class="btn btn-info m-b-10" data-toggle="modal" data-target="#modal-tambah-laporan">Buat Laporan</button>
					<table id="data-table-responsive" class="table table-striped table-bordered table-td-valign-middle">
						<thead>
							<tr>
								<th width="1%">no</th>
								<th width="1%">detail</th>
								<th class="text-nowrap">gambar</th>
								<th class="text-nowrap">judul</th>
								<th class="text-nowrap">laporan</th>
								<th class="text-nowrap">tanggal</th>
								<th class="text-nowrap">status</th>
								<th class="text-nowrap" width="5%">aksi</th>
							</tr>
						</thead>
						<tbody>
							<?php $no = 1; ?>
							@foreach($laporan as $p)
                            <tr>
                                <td class="text-center">{{ $no++ }}</td>
                                <td class="text-center"><button class="btn btn-info" onClick="details({{$p->id}});"><i class="fa fa-eye"></i></button></td>
                                <td><a href="../upload/{{$p->gambar}}" target="_blank" rel="noopener noreferrer"><img src="{{ asset('upload/'.$p->gambar) }}" alt="" height="50" width="50"> </a></td>
                                <td>{{ $p->judul }}</td>
                                <td>{{ $p->laporan }}</td>
                                <td>{{ $p->created_at }}</td>
                                <td>@if($p->status == 'menunggu') <span class="btn btn-warning">Menunggu</span> @else <span class="btn btn-success">Di Respon</span> @endif
									@php
									if($p->aksi == "selesai") {
										$warna = "btn-success";
									} else if($p->aksi == "ditolak") {
										$warna = "btn-danger";
									} else if($p->aksi == "menunggu") {
										$warna = "btn-warning";
									} else if($p->aksi == "proses") {
										$warna = "btn-info";
									} else {
										$warna = "btn-inverse";
									}
									@endphp
									@if($p->status !== "menunggu")
										@if($p->aksi !== null)
											<button class="btn {{$warna}}">{{ strtoupper($p->aksi) }}</button> 
										@else
											<button class="btn {{$warna}}">Tidak Ada Aksi</button> 
										@endif
									@endif
								</td>
								<td>
									@if($p->status == 'menunggu')
									<a href="{{ route('warga.dashboard-warga.show', ['id' => $p->id	]) }}" class="btn btn-warning">Ubah</a>
									@endif
									<a href="{{ route('warga.laporan.hapus', ['id' => $p->id	]) }}" class="btn btn-danger">Hapus</a>

								</td>
								
                            </tr>
                            @endforeach
						</tbody>
					</table>
				@endif
				
			</div>
			<!-- end panel-body -->
		</div>
		<!-- end panel -->
	</div>
	<!-- end col-10 -->
</div>

<!-- #modal-dialog -->
<div class="modal modal-message fade" id="modal-tambah-laporan">
	<div class="modal-dialog">
		<form method="post" action="{{ route('warga.dashboard-warga.store') }}"  enctype="multipart/form-data">
			{{ csrf_field() }}
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Buat Laporan</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				</div>
				<div class="modal-body">
					<label class="control-label">judul <span class="text-danger">*</span></label>
					<div class="row row-space-10 {{ $errors->has('judul') ? ' has-error' : '' }}">
						<div class="col-md-12 m-b-15">
							<input type="text" id="judul" name="judul" class="form-control" required>
							@if ($errors->has('judul'))
								<span class="help-block">
									<strong>{{ $errors->first('judul') }}</strong>
								</span>
							@endif
						</div>
					</div>

					<label class="control-label">isi laporan <span class="text-danger">*</span></label>
					<div class="row row-space-10 {{ $errors->has('laporan') ? ' has-error' : '' }}">
						<div class="col-md-12 m-b-15">
							<textarea rows="4" id="laporan" name="laporan" class="form-control" required></textarea>
							@if ($errors->has('laporan'))
								<span class="help-block">
									<strong>{{ $errors->first('laporan') }}</strong>
								</span>
							@endif
						</div>
					</div>

					<label class="control-label">gambar <span class="text-danger">*</span></label>
					<div class="row row-space-10 {{ $errors->has('gambar') ? ' has-error' : '' }}">
						<div class="col-md-12 m-b-15">
							<input type="file" name="gambar" id="gambar" required>
							@if ($errors->has('gambar'))
								<span class="help-block">
									<strong>{{ $errors->first('gambar') }}</strong>
								</span>
							@endif
						</div>
					</div>

				</div>
				<div class="modal-footer">
					<a href="javascript:;" class="btn btn-white" data-dismiss="modal">Close</a>
					<button type="submit" class="btn btn-warning">Submit</button>
				</div>
			</div>
		</form>
	</div>
</div>

<!-- #modal-dialog -->
<div class="modal fade" id="modal-cek-detail">
	<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Detail Laporan</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				</div>
				<div class="modal-body">
					<ul id="detaildata">

					</ul>
				</div>
				<div class="modal-footer">
					<a href="javascript:;" class="btn btn-white" data-dismiss="modal">Close</a>
				</div>
			</div>
	</div>
</div>

@endsection



@push('scripts')

<script>

	// function deletelaporan(id) {
	// 	$.ajax({
	// 		url: '/warga/dashboard-warga/'+id,
	// 		method: 'DELETE',  // user.destroy
	// 		success: function(result) {
	// 			// Do something with the result
	// 			window.reload();
	// 		}
	// 	});
	// }
	function details(id) {
		// alert(id);
		$('#modal-cek-detail').modal('show');
		$.getJSON('/api/cek-detail/'+id,function(data){
			// console.log(data);
			$('#detaildata').html('');
			$.each(data,function(x,y){
				$('#detaildata').append('<li> Tgl.<em>'+y.created_at+'</em> | <strong>'+y.keterangan+'</strong></li>');
			})
		})
	}
</script>

<script src="/assets/plugins/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="/assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="/assets/plugins/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
<script src="/assets/plugins/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>

@endpush