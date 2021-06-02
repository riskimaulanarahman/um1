<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Model\SA_MasterUser;
// use App\Model\Kecamatan;
// use App\Model\Kelurahan;
use App\Model\RT;
use DB;
use Exception;


class SA_MasterUserController extends Controller
{
    public function index()
    {
        $user = SA_MasterUser::with('rt')->get();

        // return $user;
        return view('pages/superadmin/user',['user' => $user]);
    }

    public function tambah()
    {
        $nort = RT::pluck('alamat','nomor_rt');
        // $kecamatan = Kecamatan::pluck('nama_kecamatan','kode_kecamatan');
        // $kelurahan = Kelurahan::pluck('nama_kelurahan','kode_kelurahan');

        return view('pages/superadmin/tambah_user',[
            'nort' => $nort,
            // 'kecamatan' => $kecamatan,
            // 'kelurahan' => $kelurahan,
        ]);
    }

    public function store(Request $request)
    {

            $request->validate([
                'name' => 'required',
                'nik' => 'required | unique:users',
                'email' => 'required | unique:users',
                'password' => 'required',
                'role' => 'required',
                'nomor_rt' => 'required',
            ]);

            try{
                $isRT = ($request->role == 'rt') ? 1:0;

                $cekrt = SA_MasterUser::where('nomor_rt',$request->nomor_rt)->where('role','rt')->count();

                // return $isrt;

                if($cekrt < 1) {

                    $users = SA_MasterUser::create([
                        'name' => $request->name,
                        'nik' => $request->nik,
                        'email' => $request->email,
                        'password' => bcrypt($request->password),
                        'pass_txt' => $request->password,
                        'role' => $request->role,
                        'notelp' => $request->notelp,
                        // 'kode_kecamatan' => $request->kode_kecamatan,
                        // 'kode_kelurahan' => $request->kode_kelurahan,
                        'nomor_rt' => $request->nomor_rt,
                        'isRT' => $isRT,
                    ]);

                    $data = 'berhasil menambahkan';
                } else {
                    $data = 'Akun RT sudah ada';
                }

                
            } catch (\Exception $e){
                $data = array("status"=>"error","message"=>$e->getMessage());

                return $data;
            }

        return redirect()->route('admin.sa-user-index')->with('status',$data);
    }

    public function edit($id)
    {
        $user = SA_MasterUser::findOrFail($id);
        return view('pages/superadmin/edit_user',['user' => $user]);
    }

    public function update(Request $request,$id)
    {
        $request->validate([
            'name' => 'required',
            'nik' => 'required',
            'email' => 'required',
            'role' => 'required',
        ]);

        $isRT = ($request->role == 'rt') ? 1:0;

        $user = SA_MasterUser::findOrFail($id);
        $user->update([
            'name' => $request->name,
            'nik' => $request->nik,
            'email' => $request->email,
            'role' => $request->role,
            // 'isActive' => $request->isActive,
            'isRT' => $isRT,
        ]);

        if(!empty($request->password)) {
            $user->password = bcrypt($request->password);
            $user->pass_txt = $request->password;
            $user->save();
        }

        return redirect()->route('admin.sa-user-index')->with('status','berhasil ubah data');
    }

    public function deleted($id)
    {

        $user = SA_MasterUser::findOrFail($id);
        $user->delete();

        return redirect()->route('admin.sa-user-index');
    }
    
}
