<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Kelurahan extends Model
{
    protected $table = "tbl_kelurahan";

    protected $fillable = ['kode_kecamatan','kode_kelurahan','nama_kelurahan'];
}
