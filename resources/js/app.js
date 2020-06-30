require("./bootstrap");
require('jquery')

import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/profile'
import DoctorsList from './components/doctorsList'
import Appointments from './components/appointments'
import Issues from './components/issuesList'
import Stats from './components/statistics'
import Router1 from './router'

let firebase = require('firebase');
// const firebase = require('firebase/app');
// require('firebase/<database>');

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




// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }



// if (document.getElementById("all")) {
//     ReactDOM.render(<Router1 />, document.getElementById("all"));

// }
if (document.getElementById("root")) {
    ReactDOM.render(<Profile path="/" />, document.getElementById("root"));

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
        ReactDOM.render(<Profile path="/" />, document.getElementById("root"));
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
        ReactDOM.render(<DoctorsList path="/Doctors" />, document.getElementById("root"));
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
        ReactDOM.render(<Appointments path="/Appointments" />, document.getElementById("root"));
    }
});

// let li4 = document.getElementById("li4");
// let a4 = document.createElement("button");
// a4.className = "btn btn-primary";
// let i4 = document.createElement("i");
// // i4.className = "fas fa-sitemap";
// a4.textContent = "Reports   ";
// a4.appendChild(i4);
// li4.appendChild(a4);
// a4.addEventListener("click", () => {
//     if (document.getElementById("root")) {
//     }
// });

let li5 = document.getElementById("li5");
let a5 = document.createElement("button");
a5.className = "btn btn-primary";
let i5 = document.createElement("i");
// i4.className = "fas fa-sitemap";
a5.textContent = "Health Problems   ";
a5.appendChild(i5);
li5.appendChild(a5);
a5.addEventListener("click", () => {
    if (document.getElementById("root")) {
        ReactDOM.render(<Issues path="/Appointments" />, document.getElementById("root"));
    }
});

let li6 = document.getElementById("li6");
let a6 = document.createElement("button");
a6.className = "btn btn-primary";
let i6 = document.createElement("i");
// i4.className = "fas fa-sitemap";
a6.textContent = "Charts   ";
a6.appendChild(i6);
li6.appendChild(a6);
a6.addEventListener("click", () => {
    if (document.getElementById("root")) {
        ReactDOM.render(<Stats path="/Appointments" />, document.getElementById("root"));
    }
});

