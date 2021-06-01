<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();



Route::group( ['prefix' => 'admin','as' => 'admin.','middleware' => ['auth','roleAdmin']], function() {

    // Route::get('/dashboard-admin', function () {
    //     return view('pages/superadmin/home_admin');
    // })->name('dashboard-admin');
    Route::get('/dashboard-admin', 'API\LaporanController@indexadmin')->name('dashboard-admin');

    // Route::get('/master-kecamatan', function () {
    //   return view('pages/superadmin/master-kecamatan');
    // })->name('master-kecamatan');

    // Route::get('/master-kelurahan', function () {
    //   return view('pages/superadmin/master-kelurahan');
    // })->name('master-kelurahan');

    Route::get('/master-rt', function () {
      return view('pages/superadmin/master-rt');
    })->name('master-rt');


    //Start Route Master User
    Route::get('/master-user', 'SA_MasterUserController@index')->name('sa-user-index');
    Route::get('/master-user/tambah', 'SA_MasterUserController@tambah')->name('sa-user-tambah');
    Route::post('/master-user/store', 'SA_MasterUserController@store')->name('sa-user-store');
    Route::get('/master-user/edit/{id}', 'SA_MasterUserController@edit')->name('sa-user-edit');
    Route::post('/master-user/update/{id}', 'SA_MasterUserController@update')->name('sa-user-update');
    Route::get('/master-user/deleted/{id}', 'SA_MasterUserController@deleted')->name('sa-user-deleted');
    //End
    
});

