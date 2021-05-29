<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Formkp extends Model
{
    protected $table = "tbl_formkp";

    protected $guarded = ['id_formkp'];

    protected $primaryKey = 'id_formkp';

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function mahasiswa()
    {
        return $this->belongsTo('App\Model\SA_Mahasiswa','id_mhs');
    }

    public function users()
    {
        return $this->belongsTo('App\Model\SA_MasterUser','id_users');
    }

    public function berkas()
    {
        return $this->belongsTo('App\Model\Berkas','id_berkas');
    }

    public function dosens()
    {
        return $this->belongsTo('App\Model\SA_Dosen','dosen_pembimbing','id_dosen');
    }
}
