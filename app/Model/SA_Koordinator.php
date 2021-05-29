<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SA_Koordinator extends Model
{
    protected $table = "tbl_koordinator";

    protected $guarded = ['id_koor'];

    protected $primaryKey = 'id_koor';

    public function users()
    {
        return $this->belongsTo('App\Model\SA_MasterUser','id_users');
    }

    public function jurusan()
    {
        return $this->belongsTo('App\Model\Jurusan','id_jurusan');
    }

    public function prodi()
    {
        return $this->belongsTo('App\Model\Prodi','id_prodi');
    }
}
