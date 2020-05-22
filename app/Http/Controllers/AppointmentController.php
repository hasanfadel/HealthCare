<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $doctors = Appointment::where('patient_id', '=', Auth::id())
            ->with('doctor', 'doctor.user')
            ->orderBy('date', 'ASC')
            ->orderBy('time', 'ASC')
            ->get();
        return response()->json($doctors);
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
        $patient = Patient::where('user_id', Auth::id())->first();
        $appointment = new Appointment();
        $appointment->doctor_id = $request->doctor_id;
        $appointment->patient_id = $patient->id;
        $appointment->title = $request->title;
        $appointment->date = $request->date;
        $appointment->time = $request->time;
        $appointment->notes = $request->notes;

        if ($appointment->save()) {
            return response()->json(['message' => 'Appointment has been scheduled', 'appointment' => $appointment]);
        }
        return response()->json(['message' => 'Appointment not saved']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Appointment $appointment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Appointment $appointment)
    {
        //
    }
}
