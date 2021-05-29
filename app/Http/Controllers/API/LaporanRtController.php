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

class LaporanRtController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();

        $laporan = Laporan::select('tbl_laporan.*','users.name')
        ->join('users','users.id_users','tbl_laporan.id_users')
        ->where('users.kode_kelurahan',$user->kode_kelurahan)
        ->where('users.nomor_rt',$user->nomor_rt)
        ->get();

        $today = Laporan::whereDate('created_at',Carbon::today())->count();
        $week = Laporan::where('created_at', '>', Carbon::now()->startOfWeek())
            ->where('created_at', '<', Carbon::now()->endOfWeek())
            ->count();
        $month = Laporan::whereMonth('created_at',Carbon::now()->month)->count();
        $notread = Laporan::where('status','menunggu')->count();

        // return $laporan;

        return view('pages/rt/home_rt',[
            'laporan' => $laporan,
            'today' => $today,
            'week' => $week,
            'month' => $month,
            'notread' => $notread,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $laporan = Laporan::find($id);

        $proses = Proses::join('tbl_laporan','tbl_laporan.id','tbl_proses.id_laporan')
        ->where('tbl_proses.id_laporan',$laporan->id)
        ->orderBy('tbl_proses.created_at')
        ->get();

        return view('pages/rt/edit_aksi',[
            'aksi' => $laporan,
            'proses' => $proses
            ]);
    }

    public function update(Request $request,$id)
    {
        //
    }

    public function updateaksi(Request $request,$id)
    {
        $laporan = Laporan::findOrFail($id);
        $laporan->aksi = $request->aksi;
        $laporan->save();

        $proses = Proses::create([
            "id_laporan" => $laporan->id,
            "keterangan" => $request->keterangan
        ]);

        return redirect()->route('rt.dashboard-rt.index')->with('status', "berhasil edit data");

    }

    public function respon(Request $request, $id)
    {
        $user = Auth::user();
        $respon = Laporan::findOrFail($id);

        $warga = User::where('id_users',$respon->id_users)->first();

        $module = "respon rt";
        $id_users = $user->id_users;
        $nama = $warga->name;

        $email = $warga->email;
        $text = "ketua RT telah merespon laporan anda";

        $respon->update([
            "status" => "direspon"
        ]);

        $mail = new GenerateMailController;
        $mail->generateMail($module,$id_users,$email,$nama,$text);

        return redirect()->route('rt.dashboard-rt.index')->with('status', "berhasil memberikan respon");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
