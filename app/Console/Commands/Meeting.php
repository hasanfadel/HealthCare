<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\User;
use Twilio\Rest\Client;
use Twilio\Jwt\AccessToken;
use Twilio\Jwt\Grants\VideoGrant;

class Meeting extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'Meeting:create';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a video meeting';

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

        $user = User::where('id', '1')->first();

        // Substitute your Twilio AccountSid and ApiKey details
        $accountSid = 'AC2ea396faca0e2faefbd776a568edb342';
        $apiKeySid = 'SKacd0f3a5819afc6508edd280a01c2fee';
        $apiKeySecret = 'wO66YGo4TQlsQbDsWfIr50c2bAtNdkXQ';

        $identity = 'user' . $user->id;

        // Create an Access Token
        $token = new AccessToken(
            $accountSid,
            $apiKeySid,
            $apiKeySecret,
            3600,
            $identity
        );

        // Grant access to Video
        $grant = new VideoGrant();
        $grant->setRoom('Appointment' . $user->id);
        $token->addGrant($grant);

        // Serialize the token as a JWT
        echo $token->toJWT();
    }
}
