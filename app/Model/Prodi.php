<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Prodi extends Model
{
    protected $table = "tbl_prodi";

    protected $guarded = ['id_prodi'];

    protected $primaryKey = 'id_prodi';

    public function jurusan()
    {
        return $this->belongsTo('App\Model\SA_Jurusan','id_jurusan');
    }
}
