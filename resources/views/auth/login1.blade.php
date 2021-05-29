@extends('layouts.empty', ['paceTop' => true, 'bodyExtraClass' => 'bg-white'])

@section('title', 'Login Page')

@push('css')
	<link href="/assets/plugins/bootstrap-social/bootstrap-social.css" rel="stylesheet" />
@endpush

@section('content')
	<!-- begin login -->
	<div class="login login-with-news-feed">
		<!-- begin news-feed -->
		<div class="news-feed">
			<div class="news-image" style="background-image: url(/assets/img/login-bg/bg-login.jpeg);box-shadow: inset 2000px 0 0 0 rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 1);"></div>
			<!-- <div class="news-image" style="background-image: url(/assets/img/login-bg/login-bg-9.jpg)"></div> -->
			<div class="news-caption">
				<!-- <h4 class="caption-title"><b>SIMTA</b> ITK</h4>
				<p>
					Sistem Informasi Pengajuan TA
				</p> -->
			</div>
		</div>
		<!-- end news-feed -->
		<!-- begin right-content -->
		<div class="right-content">
			<!-- begin login-header -->
			<div class="login-header">
				<div class="brand">
					<!-- <span><img style="max-width:50px; margin-top:-50px;" src="{{URL::asset('assets/img/logo/logo_bpn.png')}}" alt=""></span>  -->
					<b>SIMTA | </b>Login
					<small>Sistem Informasi Pengajuan TA</small>
				</div>
				<div class="icon">
					<i class="fa fa-sign-in-alt"></i>
				</div>
			</div>
			<!-- end login-header -->
			<!-- begin login-content -->
			<div class="login-content">
				<form method="POST" class="margin-bottom-0" action="{{ route('login') }}">
				{{ csrf_field() }}

					<div class="form-group m-b-15">
						<!-- <input type="text" class="form-control form-control-lg" placeholder="Email Address" required /> -->
						<input id="login" type="text"
                                    class="form-control form-control-lg {{ $errors->has('username') || $errors->has('email') ? ' is-invalid' : '' }}"
                                    name="login" value="{{ old('username') ?: old('username') }}"  placeholder="Username " required autofocus>
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
						<button type="submit" class="btn btn-danger btn-block btn-lg"> <i class="fa fa-sign-in-alt"></i> Masuk</button>
					</div>
					<!-- dropdown -->
					<div class="btn-group m-t-5 m-b-5">
						<a href="javascript:;" class="btn btn-primary">Cek Jadwal Sidang</a>
						<a href="#" data-toggle="dropdown" class="btn btn-primary dropdown-toggle" aria-expanded="false"><b class="caret"></b></a>
						<div class="dropdown-menu dropdown-menu-right" style="">
							<a href="{{ route('koor.cekjadwal', ['module' => 'proposal'] ) }}" class="dropdown-item" target='_blank'>proposal</a>
							<div class="dropdown-divider"></div>
							<a href="{{ route('koor.cekjadwal', ['module' => 'skripsi'] ) }}" class="dropdown-item" target='_blank'>skripsi</a>
						</div>
					</div>
					<hr />
					<p class="text-center text-grey-darker mb-0">
						&copy; SIMTA All Right Reserved 2020 v.1.0
					</p>
				</form>
			</div>
			<!-- end login-content -->
		</div>
		<!-- end right-container -->
	</div>
	<!-- end login -->
@endsection
