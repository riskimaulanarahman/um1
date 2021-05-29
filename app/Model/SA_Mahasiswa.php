<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SA_Mahasiswa extends Model
{
    protected $table = "tbl_mahasiswa";

    protected $guarded = ['id_mhs'];

    protected $primaryKey = 'id_mhs';

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

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
