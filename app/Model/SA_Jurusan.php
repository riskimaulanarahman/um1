<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SA_Jurusan extends Model
{
    protected $table = "tbl_jurusan";

    protected $guarded = ['id_jurusan'];

    protected $primaryKey = 'id_jurusan';

}
