<?php

namespace App\Http\Controllers;

use App\Issue;
use App\Patient;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class IssueController extends Controller
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
            $issues = Issue::where('patient_id', '=', $user->patients->id)
                ->with('doctors', 'doctors.user')
                ->with('doctor', 'doctor.user')
                ->orderBy('created_at', 'DESC')
                ->get();
            return response()->json($issues);
        }
        if ($user->role == 1) {
            $issues = Issue::where('doctor_id', '=', $user->doctors->id)
                ->with('doctors', 'doctors.user')
                ->with('doctor', 'doctor.user')
                ->orderBy('created_at', 'DESC')
                ->get();
            return response()->json($issues);
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
        $issue = new Issue();
        $issue->patient_id = $patient->id;
        $issue->doctor_id = $request->doctor_id;
        $issue->title = $request->title;
        $issue->date = $request->date;
        $issue->description = $request->description;

        if ($issue->save()) {
            $issue->doctors()->attach($request->doctor_id);
            return response()->json(['message' => 'Issue has been submitted', 'issue' => $issue]);
        }
        return response()->json(['message' => 'Issue not submitted']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Issue  $issue
     * @return \Illuminate\Http\Response
     */
    public function show(Issue $issue)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Issue  $issue
     * @return \Illuminate\Http\Response
     */
    public function edit(Issue $issue)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Issue  $issue
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $issue)
    {
        //
        $iss = Issue::where('id', '=', $issue)->first();
        $iss->doctor_id = $request->id;
        // dd($iss);
        if ($iss->save()) {
            $iss->doctors()->attach($request->id);
            return response()->json(['message' => 'Issue has been submitted', 'issue' => $iss->with('doctor', 'doctor.user')->first()]);
        }
        return response()->json(['message' => 'Issue not submitted']);
    }

    public function close(Request $request, $issue)
    {
        //
        $iss = Issue::where('id', '=', $issue)->first();
        $iss->closed = '1';
        if ($iss->save()) {
            return response()->json(['message' => 'Issue has been closed', 'issue' => $iss]);
        }
        return response()->json(['message' => 'Issue not updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Issue  $issue
     * @return \Illuminate\Http\Response
     */
    public function destroy(Issue $issue)
    {
        //
    }
}
