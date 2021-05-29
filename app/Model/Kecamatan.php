<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Kecamatan extends Model
{
    protected $table = "tbl_kecamatan";

    protected $fillable = ['kode_kecamatan','nama_kecamatan'];
}
