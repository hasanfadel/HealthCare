<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Mail\Reminder;
use App\User;

class SendNot extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'SendNot:reminder';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send a reminder for upcoming meetings';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //
        // mail("hasanfadel77@gmail.com", "test", "test from php");
        // $data = array('name' => "Virat Gandhi");
        // Mail::send('emails.reminder', $data, function ($message) {
        //     $message->to('hasanfadel25@gmail.com', 'Tutorials Point')->subject('Laravel Basic Testing Mail');
        //     $message->from('hasanfadel77@gmail.com', 'Virat Gandhi');
        // });
        $user = User::where('id', '1')->first();
        Mail::to($user)->send(new Reminder);
    }
}
