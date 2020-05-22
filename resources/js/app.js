require("./bootstrap");

import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/profile'
import DoctorsList from './components/doctorsList'
import Appointments from './components/appointments'

require('jquery')

// Pull in the module, ES2015 imports also works:
// import TimekitBooking from 'timekit-booking';
// // require('timekit-booking')

// // Booking.js is now available as local variable TimekitBooking instead of global window.timekitBooking
// let widget = new TimekitBooking();

// class TestApp extends React.Component {
//     componentDidMount() {
//         var widget = new TimekitBooking();
//         widget.init({
//             app_key: 'test_widget_key_SpQT2DeN02Aw66qmxCNFIFq0BRkWo2Qw',
//             project_id: 'e14b132b-1669-4883-8176-042d5fbc5ec9'
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Widget:</h2>
//                 <div id="bookingjs"></div>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<TestApp />, document.getElementById("root"));


// let Makeplans = require('makeplans');

// let mp = new Makeplans("12ab78000cceb2bcf9a807384d4e0b53" , "HealthCare");

// var Makeplans = require('makeplans');

// var MAKEPLANS_ACCOUNT_NAME = process.env.MAKEPLANS_ACCOUNT_NAME;
// var MAKEPLANS_API_KEY = process.env.MAKEPLANS_API_KEY;

// var mp = new Makeplans("12ab78000cceb2bcf9a807384d4e0b53" , "HealthCare", true);


// function exec(fn){
//    fn().then(function(result){
//       console.log(result);
//    }).catch(function(error){
//       console.error(error);
//    });
// }

// let request = new XMLHttpRequest()
// request.open('POST', 'https://api.eyeson.team/rooms', true)
// request.setRequestHeader("Authorization", "VvSxsfnyjCX830UlbYvpaJM9u4pggdmS4yxNqr26Kx")
// request.onload = function () {
//     // Begin accessing JSON data here
//     let data = JSON.parse(this.response)

//     if (request.status >= 200 && request.status < 400) {
//         console.log(data)
//     } else {
//         console.log('error', request.status)
//     }
// }
// let params = {
//     "user[name]": "hasan",
// };
// request.send(JSON.stringify({"user": "Hasan"}));

// axios.post('https://api.eyeson.team/rooms', {user: 'Finn'}, {headers: {'Authorization': 'VvSxsfnyjCX830UlbYvpaJM9u4pggdmS4yxNqr26Kx'}})
// .then(response => {
//     console.log(response);
//     console.log(response.data);
//     });


// let AccessToken = require('twilio').jwt.AccessToken;
// let VideoGrant = AccessToken.VideoGrant;

// // Substitute your Twilio AccountSid and ApiKey details
// let ACCOUNT_SID = 'AC2ea396faca0e2faefbd776a568edb342';
// let API_KEY_SID = 'SKacd0f3a5819afc6508edd280a01c2fee';
// let API_KEY_SECRET = 'wO66YGo4TQlsQbDsWfIr50c2bAtNdkXQ';

// // Create an Access Token
// let accessToken = new AccessToken(
//   ACCOUNT_SID,
//   API_KEY_SID,
//   API_KEY_SECRET
// );

// // Set the Identity of this token 
// accessToken.identity = 'example-user';
 
// // Grant access to Video
// let grant = new VideoGrant();
// grant.room = 'cool room';
// accessToken.addGrant(grant);

// // Serialize the token as a JWT
// let jwt = accessToken.toJwt();
// console.log("JWT", jwt);


// const { connect } = require('twilio-video');

// connect(jwt, { name:'my-new-room' }).then(room => {
//   console.log(`Successfully joined a Room: ${room}`);
//   room.on('participantConnected', participant => {
//     console.log(`A remote Participant connected: ${participant}`);
//   });
// }, error => {
//   console.error(`Unable to connect to Room: ${error.message}`);
// });

// const accountSid = 'AC2ea396faca0e2faefbd776a568edb342';
// const authToken = '1f01984f0a62898c2133366cad5732de';
// const client = require('twilio')(accountSid, authToken);

// client.video.rooms.create({uniqueName: 'DailyStandup'})
//                   .then(room => console.log(room.sid));



if (document.getElementById("root")) {
    ReactDOM.render(<Profile />, document.getElementById("root"));

}


let li = document.getElementById("li1");
let a = document.createElement("button");
a.className = "btn btn-primary";
let i = document.createElement("i");
// i.className = "far fa-user-circle";
a.textContent = "Profile   ";
a.appendChild(i);
li.appendChild(a);
a.addEventListener("click", () => {
    if (document.getElementById("root")) {
        ReactDOM.render(<Profile />, document.getElementById("root"));
    }

});

let li2 = document.getElementById("li2");
let a2 = document.createElement("button");
a2.className = "btn btn-primary";
let i2 = document.createElement("i");
// i2.className = "fas fa-sitemap";
a2.textContent = "Doctors   ";
a2.appendChild(i2);
li2.appendChild(a2);
a2.addEventListener("click", () => {
    if (document.getElementById("root")) {
        ReactDOM.render(<DoctorsList />, document.getElementById("root"));
    }
});

let li3 = document.getElementById("li3");
let a3 = document.createElement("button");
a3.className = "btn btn-primary";
let i3 = document.createElement("i");
// i3.className = "fas fa-sitemap";
a3.textContent = "Appointments   ";
a3.appendChild(i3);
li3.appendChild(a3);
a3.addEventListener("click", () => {
    if (document.getElementById("root")) {
        ReactDOM.render(<Appointments />, document.getElementById("root"));
    }
});

let li4 = document.getElementById("li4");
let a4 = document.createElement("button");
a4.className = "btn btn-primary";
let i4 = document.createElement("i");
// i4.className = "fas fa-sitemap";
a4.textContent = "Reports   ";
a4.appendChild(i4);
li4.appendChild(a4);
a4.addEventListener("click", () => {
    if (document.getElementById("root")) {
    }
});

