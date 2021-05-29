@extends('layouts.empty', ['paceTop' => true, 'bodyExtraClass' => 'bg-white'])

@section('title', 'Login Page')

@section('content')
	<!-- begin login -->
	<div class="login login-with-news-feed">
		<!-- begin right-content -->
		<div class="right-content">
			<!-- begin login-header -->
			<div class="login-header">
				<span><img style="max-width:50px; " src="{{URL::asset('assets/img/logo/logo_bpn.png')}}" alt=""></span> 
				<div class="brand">
					<b>Sistem Lapor Gangguan Lingkungan</b>
					<!-- <small>made by Lollipop Developer</small> -->
				</div>
				<div class="icon">
					<i class="fa fa-sign-in-alt"></i>
				</div>
			</div>
			<!-- end login-header -->
			<!-- begin login-content -->
			<div class="login-content">
				<form method="POST" class="margin-bottom-0" action="{{ route('login') }}">
				<!-- <form method="POST" class="margin-bottom-0" action="{{ route('login') }}"> -->
				{{ csrf_field() }}

					<div class="form-group m-b-15">
						<!-- <input type="text" class="form-control form-control-lg" placeholder="Email Address" required /> -->
						<input id="login" type="text"
                                    class="form-control form-control-lg {{ $errors->has('username') || $errors->has('email') ? ' is-invalid' : '' }}"
                                    name="login" value="{{ old('username') ?: old('email') }}"  placeholder="Username " required autofocus>
						@if ($errors->has('username') || $errors->has('email'))
						<span class="invalid-feedback">
							<strong>{{ $errors->first('username') ?: $errors->first('email') }}</strong>
						</span>
						@endif
					</div>
					<div class="form-group{{ $errors->has('password') ? ' has-error' : '' }} m-b-15">
						<input id="password" type="password" name="password" class="form-control form-control-lg" placeholder="Password" required />
						@if ($errors->has('password'))
							<span class="help-block">
								<strong>{{ $errors->first('password') }}</strong>
							</span>
						@endif
					</div>
					<!-- <div class="checkbox checkbox-css m-b-30">
						<input type="checkbox" id="remember_me_checkbox" value="" name="remember" {{ old('remember') ? 'checked' : '' }} />
						<label for="remember_me_checkbox">
						Remember Me
						</label>
					</div> -->
					<div class="login-buttons">
						<button type="submit" class="btn btn-primary btn-block btn-lg"> <i class="fa fa-sign-in-alt"></i> Masuk</button>
					</div>
					<!-- <div class="m-t-20 m-b-40 p-b-40 text-inverse">
					 <a href="" target="_blank" class="f-s-20"><i class="fas fa-lg fa-fw m-r-10 fa-cloud-download-alt"></i> Download Document here</a>
					</div> -->
					<hr />
					<p class="text-center text-grey-darker mb-0">
						&copy; Universitas Mulia All Right Reserved 2021 Ver 1.0
					</p>
				</form>
			</div>
			<!-- end login-content -->
		</div>
		<!-- end right-container -->
		<!-- begin news-feed -->
		<div class="news-feed">
			<div class="news-image" style="background-image: url(/assets/img/login-bg/login-bg-15.jpg)"></div>
			<div class="news-caption" style="position:relative !important; background:transparent !important; color:black;">
			<div class="col-xl-12">
			<!-- begin tabs -->
				<ul class="nav nav-tabs nav-tabs-inverse nav-justified nav-justified-mobile" data-sortable-id="index-2">
					<li class="nav-item"><a href="#laporan-terakhir" data-toggle="tab" class="nav-link active"><i class="fa fa-clock fa-lg m-r-5"></i> <span class="d-none d-md-inline">Laporan Terakhir</span></a></li>
					<li class="nav-item"><a href="#laporan-proses" data-toggle="tab" class="nav-link"><i class="fa fa-wrench fa-lg m-r-5"></i> <span class="d-none d-md-inline">Sedang di Proses</span></a></li>
					<li class="nav-item"><a href="#laporan-selesai" data-toggle="tab" class="nav-link"><i class="fa fa-check fa-lg m-r-5"></i> <span class="d-none d-md-inline">Laporan Selesai</span></a></li>
				</ul>
				<div class="tab-content" data-sortable-id="index-3">
					<div class="tab-pane fade active show" id="laporan-terakhir">
						<div class="height-sm" data-scrollbar="true" style="height: 550px !important;">
							<ul class="media-list media-list-with-divider">
								@foreach($laporan as $p)
									<li class="media media-lg">
										<a href="javascript:;" class="pull-left">
											<a href="../upload/{{$p->gambar}}" target="_blank"><img class="media-object rounded m-5" src="{{ asset('upload/'.$p->gambar) }}" alt="" />
										</a>
										<div class="media-body">
											@php 
											if($p->aksi == 'menunggu') {
												$warna = "btn-warning";
											} else if($p->aksi == 'selesai') {
												$warna = "btn-success";
											} else {
												$warna = "btn-info";
											}

											@endphp

											<h5 class="media-heading">{{strtoupper($p->judul)}} <button class="btn btn-xs {{$warna}}">{{strtoupper($p->aksi)}}</button> | by.{{$p->name}}</h5>
											{{$p->laporan}} <br>
											<em>Riwayat aksi :</em>
											<ul style="font-size:12px;">
												@foreach($p->proses as $s)
												<li>Tanggal : <em>{{$s->created_at}}</em> | <strong>{{$s->keterangan}}</strong> </li>
												@endforeach
											</ul>
										</div>
									</li>
								@endforeach
							</ul>
						</div>
					</div>
					<div class="tab-pane fade" id="laporan-proses">
						<div class="height-sm" data-scrollbar="true" style="height: 550px !important;">
							<ul class="media-list media-list-with-divider">
								@foreach($laporanproses as $p)
									<li class="media media-lg">
										<a href="javascript:;" class="pull-left">
											<a href="../upload/{{$p->gambar}}" target="_blank"><img class="media-object rounded m-5" src="{{ asset('upload/'.$p->gambar) }}" alt="" />
										</a>
										<div class="media-body">
											@php 
											if($p->aksi == 'menunggu') {
												$warna = "btn-warning";
											} else if($p->aksi == 'selesai') {
												$warna = "btn-success";
											} else {
												$warna = "btn-info";
											}

											@endphp

											<h5 class="media-heading">{{strtoupper($p->judul)}} <button class="btn btn-xs {{$warna}}">{{strtoupper($p->aksi)}}</button> | by.{{$p->name}}</h5>
											{{$p->laporan}} <br>
											<em>Riwayat aksi :</em>
											<ul style="font-size:12px;">
												@foreach($p->proses as $s)
												<li>Tanggal : <em>{{$s->created_at}}</em> | <strong>{{$s->keterangan}}</strong> </li>
												@endforeach
											</ul>
										</div>
									</li>
								@endforeach
							</ul>
						</div>
					</div>
					<div class="tab-pane fade" id="laporan-selesai">
						<div class="height-sm" data-scrollbar="true" style="height: 550px !important;">
							<ul class="media-list media-list-with-divider">
								@foreach($laporanselesai as $p)
									<li class="media media-lg">
										<a href="javascript:;" class="pull-left">
											<a href="../upload/{{$p->gambar}}" target="_blank"><img class="media-object rounded m-5" src="{{ asset('upload/'.$p->gambar) }}" alt="" />
										</a>
										<div class="media-body">
											@php 
											if($p->aksi == 'menunggu') {
												$warna = "btn-warning";
											} else if($p->aksi == 'selesai') {
												$warna = "btn-success";
											} else {
												$warna = "btn-info";
											}

											@endphp

											<h5 class="media-heading">{{strtoupper($p->judul)}} <button class="btn btn-xs {{$warna}}">{{strtoupper($p->aksi)}}</button> | by.{{$p->name}}</h5>
											{{$p->laporan}} <br>
											<em>Riwayat aksi :</em>
											<ul style="font-size:12px;">
												@foreach($p->proses as $s)
												<li>Tanggal : <em>{{$s->created_at}}</em> | <strong>{{$s->keterangan}}</strong> </li>
												@endforeach
											</ul>
										</div>
									</li>
								@endforeach
							</ul>
						</div>
					</div>
				</div>
			<!-- end tabs -->
			</div>	
				{{-- <h4 class="caption-title"><b>Database Center Bappeda</b> Litbang</h4> --}}
				{{-- <p>
					made by Lollipop Developer
				</p> --}}
			</div>
		</div>
		<!-- end news-feed -->
		
	</div>
	<!-- end login -->
@endsection
