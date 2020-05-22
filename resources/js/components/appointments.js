import React, { Component } from 'react';
import axios from 'axios';
import AppointmentCard from './appointmentCard'

class Appointments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appointments: [],
        };
    }

    getAllAppointments() {
        axios.get('/api/Appointment/')
            .then(response => {
                this.setState({ appointments: response.data });
                console.log(response.data);
            });
    }

    componentDidMount() {
        // Get request for laravel api call
        this.getAllAppointments();
    }

    renderNewAppointments() {
        let today = new Date();
        return this.state.appointments.map((app) => {
            let appDate = new Date("" + app.date + " " + app.time);
            if (appDate > today) {
                return (<AppointmentCard key={app.id} new={1} appointment={app} />);
            }
        })
    }
    renderOldAppointments() {
        let today = new Date();
        return this.state.appointments.map((app) => {
            let appDate = new Date("" + app.date + " " + app.time);
            if (appDate <= today) {
                return (<AppointmentCard key={app.id} new={0} appointment={app} />);
            }
        })
    }

    render() {
        return (
            <div className="main-container">
                <div className="tab-content">

                    <div class="content-list-body">
                        <div class="card-list">
                            <div class="card-list-head">
                                <h6>Upcoming Appointments</h6>
                                {/* <div class="dropdown">
                                    <button class="btn-options" type="button" id="cardlist-dropdown-button-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">more_vert</i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Rename</a>
                                        <a class="dropdown-item text-danger" href="#">Archive</a>
                                    </div>
                                </div> */}
                            </div>
                            <div class="card-list-body">
                                {this.renderNewAppointments()}
                            </div>
                        </div>
                    </div>
                    <div class="content-list-body">
                        <div class="card-list">
                            <div class="card-list-head">
                                <h6>Previous Appointments</h6>
                                {/* <div class="dropdown">
                                    <button class="btn-options" type="button" id="cardlist-dropdown-button-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">more_vert</i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Rename</a>
                                        <a class="dropdown-item text-danger" href="#">Archive</a>
                                    </div>
                                </div> */}
                            </div>
                            <div class="card-list-body">
                                {this.renderOldAppointments()}
                            </div>
                        </div>
                    </div>

                </div >
            </div >
        )
    }
}


export default Appointments;