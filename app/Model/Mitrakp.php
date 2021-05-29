<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Mitrakp extends Model
{
    protected $table = "tbl_mitrakp";

    protected $guarded = ['id_mitrakp'];

    protected $primaryKey = 'id_mitrakp';
}
