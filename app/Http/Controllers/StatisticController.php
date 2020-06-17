<?php

namespace App\Http\Controllers;

use App\Patient;
use App\Statistic;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StatisticController extends Controller
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
            $stats = Statistic::where('patient_id', '=', $user->patients->id)
                ->orderBy('date', 'ASC')
                ->get();
            return response()->json($stats);
        }
        if ($user->role == 1) {

            return response()->json(['message' => 'No statistics available']);
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
        $stat = new Statistic();
        $stat->patient_id = $patient->id;
        $stat->systolic = $request->systolic;
        $stat->diastolic = $request->diastolic;
        $stat->heart = $request->heart;
        $stat->date = $request->date;

        if ($stat->save()) {
            $user = User::where('id', Auth::id())->with('patients')->with('doctors')->first();
            $stats = Statistic::where('patient_id', '=', $user->patients->id)
                ->orderBy('date', 'ASC')
                ->get();
            return response()->json($stats);
        }
        return response()->json(['message' => 'stat not submitted']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Statistic  $statistic
     * @return \Illuminate\Http\Response
     */
    public function show(Statistic $statistic)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Statistic  $statistic
     * @return \Illuminate\Http\Response
     */
    public function edit(Statistic $statistic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Statistic  $statistic
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Statistic $statistic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Statistic  $statistic
     * @return \Illuminate\Http\Response
     */
    public function destroy(Statistic $statistic)
    {
        //
    }
}
