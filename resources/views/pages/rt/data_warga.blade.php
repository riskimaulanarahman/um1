@extends('layouts.default')

@section('title', 'Data Warga')

@push('css')
	<link href="/assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" />
	<link href="/assets/plugins/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css" rel="stylesheet" />
@endpush

@section('content')

	<!-- begin row -->
	<div class="row">
		<!-- begin col-10 -->
		<div class="col-xl-12">
			<!-- begin panel -->
			<div class="panel panel-primary">
				<!-- begin panel-heading -->
				<div class="panel-heading">
					<h4 class="panel-title">Data Warga</h4>
					<div class="panel-heading-btn">
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-redo"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
						<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
					</div>
				</div>
				<!-- end panel-heading -->
				<!-- begin alert -->
				@if (session('status'))
					<div class="alert alert-info">
						{{ session('status') }}
					</div>
				@endif
				<!-- end alert -->
				<!-- begin panel-body -->
				<div class="panel-body">
					<table id="data-table-responsive" class="table table-striped table-bordered table-td-valign-middle">
						<thead>
							<tr>
								<th width="1%">#</th>
								<th class="text-nowrap">nik</th>
								<th class="text-nowrap">name</th>
								<th class="text-nowrap">email</th>
								<th class="text-nowrap">Aksi</th>
							</tr>
						</thead>
						<tbody>
                            <?php $no=1; ?>
							@foreach($warga as $p)
                            <tr>
                                <td class="text-center">{{ $no++ }}</td>
                                <td>{{ $p->nik }}</td>
                                <td>{{ $p->name }}</td>
                                <td>{{ $p->email }}</td>
                                <td>
                                    {{-- <button class="btn btn-danger" onClick="resetpass({{$p->id_users}});"><i class="fa fa-key"></i> Reset Password</button> --}}
									<a href="{{ route('rt.resetpass', ['id' => $p->id_users]) }}" onclick="return confirm('Apakah Anda Yakin Reset Password akun ini ?');" class="btn btn-danger">Reset password</a>
                                </td>
                            </tr>
                            @endforeach
						</tbody>
					</table>
				</div>
				<!-- end panel-body -->
			</div>
			<!-- end panel -->
		</div>
		<!-- end col-10 -->
	</div>
	<!-- end row -->
@endsection

@push('scripts')
<script>
	// function resetpass(id) {
	// 	// alert(id);
	// 	$.getJSON('/api/reset-pass/'+id,function(data){
	// 		console.log(data);
	// 	});
	// }
</script>
	<script src="/assets/plugins/datatables.net/js/jquery.dataTables.min.js"></script>
	<script src="/assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
	<script src="/assets/plugins/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
	<script src="/assets/plugins/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>
	<script src="/assets/js/demo/table-manage-responsive.demo.js"></script>
@endpush