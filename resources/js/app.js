require("./bootstrap");

import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/profile'
import DoctorsList from './components/doctorsList'
import Appointments from './components/appointments'
import Router1 from './router'


require('jquery')

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
