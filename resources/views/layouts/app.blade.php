<!doctype html>
<html lang="en">

<head>

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-52115242-14"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-52115242-14');
    </script>


    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Health Care</title>


    <link href="{{ asset('css/layout.css') }}" rel="stylesheet">
    <link href="assets/img/favicon.ico" rel="icon" type="image/x-icon">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Gothic+A1" rel="stylesheet">
    <link href="assets/css/theme.css" rel="stylesheet" type="text/css" media="all" />

    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css">
    <script type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js">
    </script>

    <script src="https://kit.fontawesome.com/41e7fe63fb.js" crossorigin="anonymous"></script>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="//cdn.timekit.io/booking-js/v2/booking.min.js" defer></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-52115242-14"></script>
    <script src="//media.twiliocdn.com/sdk/js/video/releases/2.4.0/twilio-video.min.js"></script>

    <script type="text/javascript" src="assets/js/jquery.min.js"></script>
    <script type="text/javascript" src="assets/js/popper.min.js"></script>
    <script type="text/javascript" src="assets/js/bootstrap.js"></script>
    {{-- API SID: SKacd0f3a5819afc6508edd280a01c2fee      Secret: wO66YGo4TQlsQbDsWfIr50c2bAtNdkXQ --}}


    {{-- 7ih3p2et5d3k1tyf  --}}

    {{-- ttdfayrfezjhbrqc --}}

    <!-- The core Firebase JS SDK is always required and must be listed first -->
    {{-- <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-analytics.js"></script> --}}

    {{-- <script>
        // Your web app's Firebase configuration
        let firebaseConfig = {
        apiKey: "AIzaSyBCu2eNHET6PeSSeMTW_neX9r0lLdCIW80",
        authDomain: "healthcare-277011.firebaseapp.com",
        databaseURL: "https://healthcare-277011.firebaseio.com",
        projectId: "healthcare-277011",
        storageBucket: "healthcare-277011.appspot.com",
        messagingSenderId: "907468807508",
        appId: "1:907468807508:web:86b0ba31a49d39a6913cc1",
        measurementId: "G-EZ7WS1JF1G"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        firebase.database().ref('chat/').set({
            test: 'test',
        });
    </script> --}}
</head>

<body>

    <div id="app">
        @yield('content')
    </div>



</body>

</html>