<?php

namespace App\Http\Controllers;

use App\Doctor;
use App\Patient;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function show(Patient $patient)
    {
        //
    }
    public function get()
    {
        //
        $user = User::where('id', Auth::id())->first();
        if ($user->role == 0) {
            $patient = Patient::where('user_id', auth()->id())->with('User')->first();
            return response()->json($patient);
        }
        if($user->role == 1){
            $doctor = Doctor::where('user_id', auth()->id())->with('User')->first();
            return response()->json($doctor);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function edit(Patient $patient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Patient $patient)
    {
        //
        $patient = Patient::findOrFail($request->id);
        $patient->birth = $request->birth;
        $patient->height = $request->height;
        $patient->weight = $request->weight;
        $patient->disease = $request->disease;
        $patient->medicine = $request->medicine;
        $patient->filename = $request->filename;
        if ($request->hasFile('filename')) {
            //
            $f = $request->file('filename')->extension();
            $file = request('filename');
            $image = time() . time() . '.' . $f;

            $target_path = public_path('/images/');
            $file->move($target_path, $image);
            $patient->filename = $image;
        }

        if ($patient->save()) {
            return response()->json(['message' => 'Profile Updated', 'patient' => $patient]);
        }
        return response()->json(['message' => 'Profile Did not Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function destroy(Patient $patient)
    {
        //
    }
}
