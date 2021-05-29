<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class BimbinganDosen extends Model
{
    protected $table = "tbl_bimbingan_dosen";

    protected $guarded = ['id_bimbingan_dosen'];

    protected $primaryKey = 'id_bimbingan_dosen';

    public function mahasiswa()
    {
        return $this->belongsTo('App\Model\SA_Mahasiswa','id_mhs');
    }
    public function dosen()
    {
        return $this->belongsTo('App\Model\SA_Dosen','id_dosen');
    }
}
