// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';

// class Video extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//         };
//         this.renderMeeting = this.renderMeeting.bind(this);
//     }



//     componentDidMount() {


//     }

//     joinMeeting() {
//         let AccessToken = require('twilio').jwt.AccessToken;
//         let VideoGrant = AccessToken.VideoGrant;

//         // Substitute your Twilio AccountSid and ApiKey details
//         let ACCOUNT_SID = 'AC2ea396faca0e2faefbd776a568edb342';
//         let API_KEY_SID = 'SKacd0f3a5819afc6508edd280a01c2fee';
//         let API_KEY_SECRET = 'wO66YGo4TQlsQbDsWfIr50c2bAtNdkXQ';

//         // Create an Access Token
//         let accessToken = new AccessToken(
//             ACCOUNT_SID,
//             API_KEY_SID,
//             API_KEY_SECRET
//         );

//         // Set the Identity of this token
//         if (this.props.role == 0) {
//             accessToken.identity = 'user' + this.props.appointment.patient.user_id;
//         }
//         if (this.props.role == 1) {
//             accessToken.identity = 'user' + this.props.appointment.doctor.user_id;
//         }


//         // Grant access to Video
//         let grant = new VideoGrant();
//         grant.room = 'Appointment' + this.props.appointment.id;
//         accessToken.addGrant(grant);

//         // Serialize the token as a JWT
//         let jwt = accessToken.toJwt();
//         console.log(jwt);

//         const { connect, createLocalVideoTrack } = require('twilio-video');

//         // Option 1
//         connect(jwt, {
//             audio: true,
//             video: true,
//             name: 'Appointment' + this.props.appointment.id,
//             video: { width: 640 }

//         }).then(room => {
//             console.log(`Successfully joined a Room: ${room}`);
//             console.log(`Connected to Room: ${room.name}`);
//             console.log("participants", room.participants);
//             room.participants.forEach(participant => {
//                 participant.tracks.forEach(publication => {
//                     if (publication.track) {
//                         document.getElementById('video-meeting').appendChild(track.attach());
//                     }
//                 });

//                 participant.on('trackSubscribed', track => {
//                     document.getElementById('video-meeting').appendChild(track.attach());
//                 });
//             });

//             room.on('participantConnected', participant => {
//                 console.log(`Participant "${participant.identity}" connected`);

//                 participant.on('trackSubscribed', track => {
//                     document.getElementById('video-meeting').appendChild(track.attach());
//                 });
//                 room.once('participantConnected', participant => {
//                     console.log(`Participant "${participant.identity}" has connected to the Room`);
//                 });
//             }, error => {
//                 console.error(`Unable to connect to Room: ${error.message}`);
//             });

//         });
//     }

//     renderNotYet() {
//         return (
//             <span><h4> You cannot join this meeting yet</h4></span>
//         )
//     }

//     renderMeeting() {
//         return (
//             <>
//                 {this.joinMeeting()}
//                 <div>
//                     <a href="" class="btn btn-outline-danger" >Leave Meeting</a>
//                 </div>
//             </>
//         );
//     }

//     render() {
//         let min_minutes = function (dt, minutes) {
//             return new Date(dt.getTime() - minutes * 60000);
//         }
//         let today = new Date();
//         let dateTime = new Date('' + this.props.appointment.date + ' ' + this.props.appointment.time);
//         let sss = min_minutes(dateTime, 30);
//         let flag = 0;
//         if (today < sss) {
//             flag = 1;
//         }
//         else { flag = 0 }
//         return (
//             <div id="video-meeting">
//                 {flag ? this.renderMeeting()
//                     : this.renderNotYet()
//                 }
//             </div>
//         )
//     }
// }


// export default Video;