<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Model\SA_MasterUser;
use App\Model\Kecamatan;
use App\Model\Kelurahan;
use DB;
use Exception;


class SA_MasterUserController extends Controller
{
    public function index()
    {
        $user = SA_MasterUser::with(['kecamatan','kelurahan'])->get();

        // return $user;
        return view('pages/superadmin/user',['user' => $user]);
    }

    public function tambah()
    {
        $kecamatan = Kecamatan::pluck('nama_kecamatan','kode_kecamatan');
        $kelurahan = Kelurahan::pluck('nama_kelurahan','kode_kelurahan');

        return view('pages/superadmin/tambah_user',[
            'kecamatan' => $kecamatan,
            'kelurahan' => $kelurahan,
        ]);
    }

    public function store(Request $request)
    {

            $request->validate([
                'name' => 'required',
                'username' => 'required | unique:users',
                'email' => 'required | unique:users',
                'password' => 'required',
                'role' => 'required',
                'kode_kecamatan' => 'required',
                'kode_kelurahan' => 'required',
                'nomor_rt' => 'required',
            ]);

            try{
                $users = SA_MasterUser::create([
                    'name' => $request->name,
                    'username' => $request->username,
                    'email' => $request->email,
                    'password' => bcrypt($request->password),
                    'pass_txt' => $request->password,
                    'role' => $request->role,
                    'notelp' => $request->notelp,
                    'kode_kecamatan' => $request->kode_kecamatan,
                    'kode_kelurahan' => $request->kode_kelurahan,
                    'nomor_rt' => $request->nomor_rt,
                    'isRT' => $request->isRT,
                ]);

                $data = 'berhasil menambahkan';
                
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
            'username' => 'required',
            'email' => 'required',
            'role' => 'required',
        ]);

        $user = SA_MasterUser::findOrFail($id);
        $user->update([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'role' => $request->role,
            'isActive' => $request->isActive,
            'isRT' => $request->isRT,
        ]);

        if(!empty($request->password)) {
            $user->password = bcrypt($request->password);
            $user->pass_txt = $request->password;
            $user->save();
        }

        return redirect()->route('admin.sa-user-index');
    }

    public function deleted($id)
    {

        $user = SA_MasterUser::findOrFail($id);
        $user->delete();

        return redirect()->route('admin.sa-user-index');
    }
    
}
