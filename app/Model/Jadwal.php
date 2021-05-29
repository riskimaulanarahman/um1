<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Jadwal extends Model
{
    protected $table = "tbl_jadwal";

    protected $guarded = ['id_jadwal'];

    protected $primaryKey = 'id_jadwal';

    // public function berkas()
    // {
    //     return $this->belongsTo('App\Model\Berkas','id_berkas');
    // }

    public function mahasiswa()
    {
        return $this->belongsTo('App\Model\SA_Mahasiswa','id_mhs');
    }

    public function ruang()
    {
        return $this->belongsTo('App\Model\Ruang','id_ruang');
    }

}
