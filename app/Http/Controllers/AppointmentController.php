<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Patient;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Twilio\Jwt\AccessToken;
use Twilio\Jwt\Grants\VideoGrant;

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
        $user = User::where('id', Auth::id())->with('patients')->with('doctors')->first();
        if ($user->role == 0) {
            $appointments = Appointment::where('patient_id', '=', $user->patients->id)
                ->with('doctor', 'doctor.user')
                ->with('patient', 'patient.user')
                ->orderBy('date', 'ASC')
                ->orderBy('time', 'ASC')
                ->get();
            return response()->json(['appointment' => $appointments , 'role' => $user->role]);
        }
        if ($user->role == 1) {
            $appointments = Appointment::where('doctor_id', '=', $user->doctors->id)
                ->with('doctor', 'doctor.user')
                ->with('patient', 'patient.user')
                ->orderBy('date', 'ASC')
                ->orderBy('time', 'ASC')
                ->get();
            return response()->json(['appointment' => $appointments , 'role' => $user->role]);
        }
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

    public function token()
    {
        //


        // // Substitute your Twilio AccountSid and ApiKey details
        // $accountSid = 'AC2ea396faca0e2faefbd776a568edb342';
        // $apiKeySid = 'SKacd0f3a5819afc6508edd280a01c2fee';
        // $apiKeySecret = 'wO66YGo4TQlsQbDsWfIr50c2bAtNdkXQ';

        // $identity = 'example-user';

        // // Create an Access Token
        // $token = new AccessToken(
        //     $accountSid,
        //     $apiKeySid,
        //     $apiKeySecret,
        //     3600,
        //     $identity
        // );

        // // Grant access to Video
        // $grant = new VideoGrant();
        // $grant->setRoom('cool room');
        // $token->addGrant($grant);

        // // Serialize the token as a JWT
        // echo $token->toJWT();
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
