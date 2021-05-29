<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Approval extends Model
{
    protected $table = "tbl_approval";

    protected $guarded = ['id_approval'];

    protected $primaryKey = 'id_approval';

    // public function approval()
    // {
    //     return $this->hasMany('App\Model\Approval','id_approval');
    // }

    public function formkp()
    {
        return $this->belongsTo('App\Model\Formkp','id_formkp');
    }

    public function mahasiswa()
    {
        return $this->belongsTo('App\Model\SA_Mahasiswa','id_mhs');
    }

    public function dosen()
    {
        return $this->belongsTo('App\Model\SA_Dosen','id_dosen');
    }

    public function users()
    {
        return $this->belongsTo('App\Model\SA_MasterUser','id_users');
    }
}
