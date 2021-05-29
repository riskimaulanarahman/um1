@extends('layouts.empty', ['paceTop' => true, 'bodyExtraClass' => 'bg-white'])

@section('title', 'Register Page')

@section('content')
	<!-- begin register -->
	<div class="register register-with-news-feed">
		<!-- begin news-feed -->
		<div class="news-feed">
			<div class="news-image" style="background-image: url(/assets/img/login-bg/login-bg-10.jpg)"></div>
			<div class="news-caption">
				<h4 class="caption-title"><b>Lapor Gangguan Lingkungan</b> RT</h4>
				<p>
                    Universitas Mulia
				</p>
			</div>
		</div>
		<!-- end news-feed -->
		<!-- begin right-content -->
		<div class="right-content">
			<!-- begin register-header -->
			<h1 class="register-header">
				Daftar
				<small>Warga silahkan membuat akun untuk login dan menggunakan fitur website ini !</small>
			</h1>
			<!-- end register-header -->
			<!-- begin register-content -->
			<div class="register-content">
				<form method="POST" class="margin-bottom-0" action="{{ route('register') }}">
				{{ csrf_field() }}

					<label class="control-label">Name <span class="text-danger">*</span></label>
					<div class="row row-space-10 {{ $errors->has('name') ? ' has-error' : '' }}">
						<div class="col-md-12 m-b-15">
							<input type="text" id="name" name="name" class="form-control" placeholder="Full Name" value="{{ old('name') }}" required autofocus />
							@if ($errors->has('name'))
								<span class="help-block">
									<strong>{{ $errors->first('name') }}</strong>
								</span>
							@endif
						</div>
					</div>
					<label class="control-label">username <span class="text-danger">*</span></label>
					<div class="row row-space-10 {{ $errors->has('username') ? ' has-error' : '' }}">
						<div class="col-md-12 m-b-15">
							<input type="text" id="username" name="username" class="form-control" placeholder="Username" value="{{ old('username') }}" required />
							@if ($errors->has('username'))
								<span class="help-block">
									<strong>{{ $errors->first('username') }}</strong>
								</span>
							@endif
						</div>
					</div>
					<label class="control-label">no.telepon <span class="text-danger">*</span></label>
					<div class="row row-space-10 {{ $errors->has('notelp') ? ' has-error' : '' }}">
						<div class="col-md-12 m-b-15">
							<input type="number" id="notelp" name="notelp" class="form-control" placeholder="notelp" value="{{ old('notelp') }}" required />

							@if ($errors->has('notelp'))
								<span class="help-block">
									<strong>{{ $errors->first('notelp') }}</strong>
								</span>
							@endif
						</div>
					</div>
					<label class="control-label">kecamatan <span class="text-danger">*</span></label>
					<div class="row row-space-10 {{ $errors->has('kecamatan') ? ' has-error' : '' }}">
						<div class="col-md-12 m-b-15">
							<select class="form-control" name="kecamatan" id="kecamatan">
								<option value="">- Pilih kecamatan-</option>
								@foreach($kecamatan as $id => $nama)
									<option value="{{ $id }}" >{{ $nama }}</option>
								@endforeach

							</select>
							@if ($errors->has('kecamatan'))
								<span class="help-block">
									<strong>{{ $errors->first('kecamatan') }}</strong>
								</span>
							@endif
						</div>
					</div>
					<label class="control-label">kelurahan <span class="text-danger">*</span></label>
					<div class="row row-space-10 {{ $errors->has('kelurahan') ? ' has-error' : '' }}">
						<div class="col-md-12 m-b-15">
							<select class="form-control" name="kelurahan" id="kelurahan">
								<option value="">- Pilih kelurahan-</option>
								@foreach($kelurahan as $id => $nama)
									<option value="{{ $id }}" >{{ $nama }}</option>
								@endforeach

							</select>
							@if ($errors->has('kelurahan'))
								<span class="help-block">
									<strong>{{ $errors->first('kelurahan') }}</strong>
								</span>
							@endif
						</div>
					</div>
					<label class="control-label">rt <span class="text-danger">*</span></label>
					<div class="row row-space-10 {{ $errors->has('rt') ? ' has-error' : '' }}">
						<div class="col-md-12 m-b-15">
							<input type="number" id="rt" name="rt" class="form-control" placeholder="rt" value="{{ old('rt') }}" required />

							@if ($errors->has('rt'))
								<span class="help-block">
									<strong>{{ $errors->first('rt') }}</strong>
								</span>
							@endif
						</div>
					</div>
					<label class="control-label">email <span class="text-danger">*</span></label>
					<div class="row row-space-10 {{ $errors->has('email') ? ' has-error' : '' }}">
						<div class="col-md-12 m-b-15">
							<input type="email" id="email" name="email" class="form-control" placeholder="Email" value="{{ old('email') }}" required />
							@if ($errors->has('email'))
								<span class="help-block">
									<strong>{{ $errors->first('email') }}</strong>
								</span>
							@endif
						</div>
					</div>
					<label class="control-label">password <span class="text-danger">*</span></label>
					<div class="row row-space-10 {{ $errors->has('password') ? ' has-error' : '' }}">
						<div class="col-md-12 m-b-15">
							<input type="password" id="password" name="password" class="form-control" placeholder="Password" value="{{ old('password') }}" required />
							@if ($errors->has('password'))
								<span class="help-block">
									<strong>{{ $errors->first('password') }}</strong>
								</span>
							@endif
						</div>
					</div>
					<label class="control-label">Confirm Password <span class="text-danger">*</span></label>
					<div class="row row-space-10">
						<div class="col-md-12 m-b-15">
							<input type="password" id="password-confirm" name="password_confirmation" class="form-control" placeholder="Re-Password" required />
						</div>
					</div>
					{{-- <div class="checkbox checkbox-css m-b-30">
						<div class="checkbox checkbox-css m-b-30">
							<input type="checkbox" id="agreement_checkbox" value="">
							<label for="agreement_checkbox">
							By clicking Sign Up, you agree to our <a href="javascript:;">Terms</a> and that you have read our <a href="javascript:;">Data Policy</a>, including our <a href="javascript:;">Cookie Use</a>.
							</label>
						</div>
					</div> --}}
					<div class="register-buttons">
						<button type="submit" class="btn btn-primary btn-block btn-lg">Daftar</button>
					</div>
					<div class="m-t-30 m-b-30 p-b-30">
						Sudah Mempunyai Akun ? Klik <a href="{{ route('login') }}">Disini</a> untuk Masuk.
					</div>
					<hr />
					<p class="text-center mb-0">
						&copy; Universitas Mulia All Right Reserved 2019
					</p>
				</form>
			</div>
			<!-- end register-content -->
		</div>
		<!-- end right-content -->
	</div>
	<!-- end register -->
@endsection
