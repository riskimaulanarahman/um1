<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Ruang extends Model
{
    protected $table = "tbl_ruang";

    protected $guarded = ['id_ruang'];

    protected $primaryKey = 'id_ruang';
}
