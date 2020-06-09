<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $comments = Comment::where('patient_id', '=', Auth::id())
            ->with('doctors')
            ->orderBy('created_at', 'ASC')
            ->get();
        return response()->json($comments);
    }

    public function get($issue)
    {
        //
        $comments = Comment::where('issue_id', '=', $issue)
            ->with('doctors', 'doctors.user')
            ->with('patients', 'patients.user')
            ->orderBy('created_at', 'ASC')
            ->get();
        return response()->json($comments);
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
        $commnet = new Comment();
        $commnet->patient_id = $patient->id;
        $commnet->doctor_id = $request->doctor_id;
        $commnet->issue_id = $request->issue_id;
        $commnet->comment = $request->comment;

        if ($commnet->save()) {
            return response()->json(['message' => 'Comment has been saved', 'comment' => $commnet]);
        }
        return response()->json(['message' => 'Comment not submitted']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
