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

Route::group( ['prefix' => 'warga','as' => 'warga.','middleware' => ['auth','cors','roleWarga']], function() {

    Route::resource('/dashboard-warga','API\LaporanController');
    Route::post('/dashboard-warga/laporan-update/{id}','API\LaporanController@updatelaporan')->name('laporan.update');
    Route::post('/dashboard-warga/edit-password/{id}','API\LaporanController@editpassword')->name('editpassword');


});

