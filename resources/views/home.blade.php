@extends('layouts.app')

@section('content')
<div class="layout layout-nav-side" id="all">
    <div class="navbar navbar-expand-lg bg-primary navbar-info sticky-top ">

        <div class="text-center">
            <img src="{{ asset('/images/avatar-male.png') }}" alt="" class="img-fluid rounded-circle w-50 mb-3">
            <h4 class="text-white">{{ Auth::user()->name }}</h4>
        </div>

        <hr>

        <div class="collapse navbar-collapse flex-column" id="navbar-collapse">
            <ul class="navbar-nav d-lg-primary">

                <li class="nav-item" id="li1">
                </li>
                <li class="nav-item" id="li2">
                </li>
                <li class="nav-item" id="li3">
                </li>
                <li class="nav-item" id="li4">
                </li>

            </ul>
            <div style="margin-top:auto">
                <a class="btn btn-primary" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                 document.getElementById('logout-form').submit();">
                    <i class="fas fa-sign-out-alt"></i> {{ __('Logout') }}
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                </form>
            </div>
        </div>
    </div>


    <div class="main-container p-3">
        <div class="container" id="root">

            {{-- <div>
                <p>Google Calendar API Quickstart</p>

                <!--Add buttons to initiate auth sequence and sign out-->
                <button id="authorize_button" style="display: none;">Authorize</button>
                <button id="signout_button" style="display: none;">Sign Out</button>

                <pre id="content" style="white-space: pre-wrap;"></pre>

                <script type="text/javascript">
                    // Client ID and API key from the Developer Console
                    var CLIENT_ID = '<907468807508-p2kj0j6ani80653rf32l268llrvh3t8f.apps.googleusercontent.com>';
                    var API_KEY = '<AIzaSyBH-ba3RzT_9831_6Nfaja6a-6ZBAPOO3E>';

                    // Array of API discovery doc URLs for APIs used by the quickstart
                    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

                    // Authorization scopes required by the API; multiple scopes can be
                    // included, separated by spaces.
                    var SCOPES = "https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar";

                    var authorizeButton = document.getElementById('authorize_button');
                    var signoutButton = document.getElementById('signout_button');

                    /**
                    *  On load, called to load the auth2 library and API client library.
                    */
                    function handleClientLoad() {
                        gapi.load('client:auth2', initClient);
                    }

                    /**
                    *  Initializes the API client library and sets up sign-in state
                    *  listeners.
                    */
                    function initClient() {
                        gapi.client.init({
                        apiKey: API_KEY,
                        clientId: CLIENT_ID,
                        discoveryDocs: DISCOVERY_DOCS,
                        scope: SCOPES
                        }).then(function () {
                        // Listen for sign-in state changes.
                        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

                        // Handle the initial sign-in state.
                        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                        authorizeButton.onclick = handleAuthClick;
                        signoutButton.onclick = handleSignoutClick;
                        }, function(error) {
                        appendPre(JSON.stringify(error, null, 2));
                        });
                    }

                    /**
                    *  Called when the signed in status changes, to update the UI
                    *  appropriately. After a sign-in, the API is called.
                    */
                    function updateSigninStatus(isSignedIn) {
                        if (isSignedIn) {
                        authorizeButton.style.display = 'none';
                        signoutButton.style.display = 'block';
                        listUpcomingEvents();
                        } else {
                        authorizeButton.style.display = 'block';
                        signoutButton.style.display = 'none';
                        }
                    }

                    /**
                    *  Sign in the user upon button click.
                    */
                    function handleAuthClick(event) {
                        gapi.auth2.getAuthInstance().signIn();
                    }

                    /**
                    *  Sign out the user upon button click.
                    */
                    function handleSignoutClick(event) {
                        gapi.auth2.getAuthInstance().signOut();
                    }

                    /**
                    * Append a pre element to the body containing the given message
                    * as its text node. Used to display the results of the API call.
                    *
                    * @param {string} message Text to be placed in pre element.
                    */
                    function appendPre(message) {
                        var pre = document.getElementById('content');
                        var textContent = document.createTextNode(message + '\n');
                        pre.appendChild(textContent);
                    }

                    /**
                    * Print the summary and start datetime/date of the next ten events in
                    * the authorized user's calendar. If no events are found an
                    * appropriate message is printed.
                    */
                    function listUpcomingEvents() {
                        gapi.client.calendar.events.list({
                        'calendarId': 'primary',
                        'timeMin': (new Date()).toISOString(),
                        'showDeleted': false,
                        'singleEvents': true,
                        'maxResults': 10,
                        'orderBy': 'startTime'
                        }).then(function(response) {
                        var events = response.result.items;
                        appendPre('Upcoming events:');

                        if (events.length > 0) {
                            for (i = 0; i < events.length; i++) {
                            var event = events[i];
                            var when = event.start.dateTime;
                            if (!when) {
                                when = event.start.date;
                            }
                            appendPre(event.summary + ' (' + when + ')')
                            }
                        } else {
                            appendPre('No upcoming events found.');
                        }
                        });
                    }

                </script>

                <script async defer src="https://apis.google.com/js/api.js"
                    onload="this.onload=function(){};handleClientLoad()"
                    onreadystatechange="if (this.readyState === 'complete') this.onload()">
                </script>

            </div> --}}
            
        </div>
        <div id="local-media">

        </div>

    </div>
</div>
@endsection