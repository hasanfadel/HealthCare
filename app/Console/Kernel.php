<?php

namespace App\Console;

use App\Appointment;
use Carbon\Carbon;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Auth;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
        Commands\SendNot::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();

        $meeting = Appointment::select('date', 'time')->where('patient_id', '=', '1')->get();
        foreach ($meeting as $value) {
            date_default_timezone_set('Asia/Jerusalem');
            $dateInDatabase = $value->date;
            $time = $value->time;
            $dateTime = substr($dateInDatabase . " " . $time, 0, -3);
            // echo($dateTime);
            $schedule->command('SendNot:reminder')->when(function () use ($dateTime) {
                echo ($dateTime);
                echo("  ");
                $date = date("Y-m-d H:i");
                $time = strtotime($date);
                $time = $time + (15 * 60);
                $date = date("Y-m-d H:i", $time);
                echo($date);
                echo("  ");
                return ($dateTime === $date);
            });
        }
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
