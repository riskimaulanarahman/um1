<?php

namespace App\Http\Controllers\API;


use App\Model\Laporan;
use App\Model\Proses;
use App\Model\SA_MasterUser as User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\GenerateMailController;
use Illuminate\Support\Carbon;

use Auth;

class LaporanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexadmin()
    {

        $laporan = Laporan::select('tbl_laporan.*','users.name','users.nomor_rt')
        ->join('users','users.id_users','tbl_laporan.id_users')
        ->get();

        $today = Laporan::whereDate('created_at',Carbon::today())->count();
        $week = Laporan::where('created_at', '>', Carbon::now()->startOfWeek())
            ->where('created_at', '<', Carbon::now()->endOfWeek())
            ->count();
        $month = Laporan::whereMonth('created_at',Carbon::now()->month)->count();
        $notread = Laporan::where('status','menunggu')->count();

        // return $laporan;

        return view('pages/superadmin/home_admin',[
            'laporan' => $laporan,
            'today' => $today,
            'week' => $week,
            'month' => $month,
            'notread' => $notread,
        ]);
    }

    public function index()
    {
        $user = Auth::user();

        $namart = User::where('nomor_rt',$user->nomor_rt)->where('isRT',1)->first();

        $laporan = Laporan::select('tbl_laporan.*','users.name')
        ->join('users','users.id_users','tbl_laporan.id_users')
        // ->where('users.kode_kelurahan',$user->kode_kelurahan)
        ->where('tbl_laporan.id_users',$user->id_users)
        ->get();

        // return $laporan;

        return view('pages/warga/home_warga',[
            'laporan' => $laporan,
            "namart" => $namart
        ]);
    }

    public function cekdetail($id)
    {
        $laporan = Laporan::find($id);

        $proses = Proses::select('keterangan','tbl_proses.created_at')
        ->join('tbl_laporan','tbl_laporan.id','tbl_proses.id_laporan')
        ->where('tbl_proses.id_laporan',$laporan->id)
        ->orderBy('tbl_proses.created_at')
        ->get();

        $data = $proses;

        return json_encode($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $module = "warga lapor";
        $user = Auth::user();
        $namart = User::where('nomor_rt',$user->nomor_rt)->where('isRT',1)->first();
        // where('kode_kelurahan',$user->kode_kelurahan)->

        $file = $request->file('gambar');
        $nama_file = $module."_".time()."_".$file->getClientOriginalName();
        $tujuan_upload = 'upload';
        $file->move($tujuan_upload,$nama_file);

        // dd($nama_file);

        $id_users = $user->id_users;
        $email = $namart->email;
        $nama = $namart->name;
        $text = "warga atas nama ".$user->name." telah mengirim laporan kepada anda, silahkan cek di sistem untuk melihat detailnya.";

        $data = [
            "id_users" => $user->id_users,
            "gambar" => $nama_file,
            "judul" => $request->judul,
            "laporan" => $request->laporan,
            // "aksi" => "menunggu",
            "status" => "menunggu"
        ];

        $laporan = Laporan::create($data);

        $mail = new GenerateMailController;
        $mail->generateMail($module,$id_users,$email,$nama,$text);

        return redirect()->route('warga.dashboard-warga.index')->with('status', "tambah laporan berhasil");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $laporan = Laporan::find($id);

        return view('pages/warga/edit_laporan',[
            'laporan' => $laporan,
            ]);
    }

    public function updatelaporan(Request $request,$id)
    {
        $laporan = Laporan::findOrFail($id);
        // $laporan->aksi = $request->aksi;
        // $laporan->save();
        $laporan->update($request->all());


        return redirect()->route('warga.dashboard-warga.index')->with('status', "berhasil edit data");

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    public function editpassword(Request $request, $id)
    {
        $user = Auth::user();

        $pass = $request->password;
        $warga = User::findorfail($id);
        
        $warga->password = bcrypt($pass);
        $warga->pass_txt = $pass;
        $warga->save();

        $module = "edit password";
        $id_users = $user->id_users;
        $email = $warga->email;
        $nama = $warga->name;
        $text = "password baru anda adalah ".$pass."";

        $mail = new GenerateMailController;
        $mail->generateMail($module,$id_users,$email,$nama,$text);

        return redirect()->route('warga.dashboard-warga.index')->with('status','berhasil edit password');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // $laporan = Laporan::findOrFail($id);
        // $laporan->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $laporan = Laporan::findOrFail($id);
        $laporan->delete();
        return response()->json([
         'message' => 'laporan deleted successfully'
        ]);
    }
}
