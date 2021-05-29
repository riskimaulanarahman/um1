<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SA_Tendik extends Model
{
    protected $table = "tbl_tendik";

    protected $guarded = ['id_tendik'];

    protected $primaryKey = 'id_tendik';

    public function users()
    {
        return $this->belongsTo('App\Model\SA_MasterUser','id_users');
    }

    public function jurusan()
    {
        return $this->belongsTo('App\Model\Jurusan','id_jurusan');
    }
}
