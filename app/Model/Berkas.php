<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Berkas extends Model
{
    protected $table = "tbl_berkas";

    protected $guarded = ['id_berkas'];

    protected $primaryKey = 'id_berkas';

    protected $hidden = [
        // 'created_at',
        // 'updated_at'
    ];

    public function formkp()
    {
        return $this->belongsTo('App\Model\Formkp','id_formkp');
    }

    public function mahasiswa()
    {
        return $this->belongsTo('App\Model\SA_Mahasiswa','id_mhs');
    }

    public function users()
    {
        return $this->belongsTo('App\Model\SA_MasterUser','id_users');
    }
    
}
