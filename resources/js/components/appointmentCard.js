import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Video from './Video';
class AppointmentCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
        this.renderVideo = this.renderVideo.bind(this);
    }

    componentDidMount() {
        // Get request for laravel api call
    }

    renderVideo() {
        console.log('appointment: ', this.props.appointment);
        if (document.getElementById("root")) {
            // ReactDOM.render(<Video appointment={this.props.appointment} role={this.props.role} />, document.getElementById("root"));
        }
    }

    render() {
        console.log(this.props);
        let n = this.props.new;

        return (
            <div class="card card-task">
                <div class="progress">
                    <div class={n ? "progress-bar bg-primary" : "progress-bar bg-success"} role="progressbar" style={{ width: '100%' }}
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="card-body">
                    <div class="card-title">
                        <a href="#" onClick={n ? this.renderVideo : ""}>
                            <h6 data-filter-by="text">{this.props.appointment.title}</h6>
                        </a>
                        <span class="text-small">{this.props.appointment.doctor.user.name}</span>
                    </div>
                    <div class="card-meta">
                        <ul class="avatars">

                        </ul>
                        <div class="d-flex align-items-center">
                            {/* <i class="material-icons">playlist_add_check</i> */}
                            <span> {this.props.appointment.date}/{this.props.appointment.time} </span>
                        </div>

                        {n ?
                            <div class="dropdown card-options">
                                <button class="btn-options" type="button" id="task-dropdown-button-2"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="material-icons">more_vert</i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item text-danger" href="#">Delete</a>
                                </div>
                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default AppointmentCard;