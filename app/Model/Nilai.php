<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Nilai extends Model
{
    protected $table = "tbl_nilai";

    protected $guarded = ['id_nilai'];

    protected $primaryKey = 'id_nilai';

    // public function berkas()
    // {
    //     return $this->belongsTo('App\Model\Berkas','id_berkas');
    // }

    public function mahasiswa()
    {
        return $this->belongsTo('App\Model\SA_Mahasiswa','id_mhs');
    }

}
