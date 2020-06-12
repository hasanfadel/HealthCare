import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Doctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appointment: '',
            title: '',
            date: '',
            time: '',
            notes: '',
            startDate: '',
            titlei: '',
            description: '',
            datei: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAppSubmit = this.handleAppSubmit.bind(this);
        this.handleIssueSubmit = this.handleIssueSubmit.bind(this);
    }

    componentDidMount() {

        // let AccessToken = require('twilio').jwt.AccessToken;
        // let VideoGrant = AccessToken.VideoGrant;

        // // Substitute your Twilio AccountSid and ApiKey details
        // let ACCOUNT_SID = 'AC2ea396faca0e2faefbd776a568edb342';
        // let API_KEY_SID = 'SKacd0f3a5819afc6508edd280a01c2fee';
        // let API_KEY_SECRET = 'wO66YGo4TQlsQbDsWfIr50c2bAtNdkXQ';

        // // Create an Access Token
        // let accessToken = new AccessToken(
        //     ACCOUNT_SID,
        //     API_KEY_SID,
        //     API_KEY_SECRET
        // );

        // // Set the Identity of this token
        // accessToken.identity = 'patient' + this.props.doctor.id;

        // // Grant access to Video
        // let grant = new VideoGrant();
        // grant.room = 'Appointment';
        // accessToken.addGrant(grant);

        // // Serialize the token as a JWT
        // let jwt = accessToken.toJwt();
        // console.log(jwt);



        // const { connect, createLocalVideoTrack } = require('twilio-video');

        // // Option 1
        // connect(jwt, {
        //     audio: true,
        //     name: 'Appointment',
        //     video: { width: 640 }

        // }).then(room => {
        //     console.log(`Successfully joined a Room: ${room}`);
        //     console.log(`Connected to Room: ${room.name}`);
        //     console.log("participants", room.participants);
        //     room.participants.forEach(participant => {
        //         participant.tracks.forEach(publication => {
        //             if (publication.track) {
        //                 document.getElementById('local-media').appendChild(track.attach());
        //             }
        //         });

        //         participant.on('trackSubscribed', track => {
        //             document.getElementById('local-media').appendChild(track.attach());
        //         });
        //     });

        //     room.on('participantConnected', participant => {
        //         console.log(`Participant "${participant.identity}" connected`);

        //         participant.on('trackSubscribed', track => {
        //             document.getElementById('local-media').appendChild(track.attach());
        //         });
        //         room.once('participantConnected', participant => {
        //             console.log(`Participant "${participant.identity}" has connected to the Room`);
        //         });
        // }, error => {
        //     console.error(`Unable to connect to Room: ${error.message}`);
        // });

        // });


        //-------------------------------------------------------------------
        // const Video = require('twilio-video');

        // Video.connect(jwt, {
        //     name: 'room-name',
        //     audio: true,
        //     maxAudioBitrate: 16000, //For music remove this line
        //     video: { height: 720, frameRate: 24, width: 1280 }

        // }).then(room => {
        //     console.log('Connected to Room "%s"', room.name);

        //     room.participants.forEach(participantConnected);
        //     room.on('participantConnected', participantConnected);

        //     room.on('participantDisconnected', participantDisconnected);
        //     room.once('disconnected', error => room.participants.forEach(participantDisconnected));
        // }, error => {
        //     console.error(`Unable to connect to Room: ${ error.message }`);
        // });


        // function participantConnected(participant) {
        //     console.log('Participant "%s" connected', participant.identity);

        //     const div = document.createElement('div');
        //     div.id = participant.sid;
        //     div.innerText = participant.identity;

        //     participant.on('trackSubscribed', track => trackSubscribed(div, track));
        //     participant.on('trackUnsubscribed', trackUnsubscribed);

        //     participant.tracks.forEach(publication => {
        //         if (publication.isSubscribed) {
        //             trackSubscribed(div, publication.track);
        //         }
        //     });

        //     document.body.appendChild(div);
        // }

        // function participantDisconnected(participant) {
        //     console.log('Participant "%s" disconnected', participant.identity);
        //     document.getElementById(participant.sid).remove();
        // }

        // function trackSubscribed(div, track) {
        //     div.appendChild(track.attach());
        // }

        // function trackUnsubscribed(track) {
        //     track.detach().forEach(element => element.remove());
        // }


    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    handleAppSubmit(event) {
        event.preventDefault();
        let appointment = {};
        appointment.doctor_id = this.props.doctor.id;
        appointment.title = this.state.title;
        appointment.date = this.state.date;
        appointment.time = this.state.time;
        appointment.notes = this.state.notes;

        console.log('submitted', appointment);
        axios.post('/api/Appointment/', appointment)
            .then(response => {
                console.log('Updated', response.data);
            });
        $("#modal").modal('hide');
    }

    handleIssueSubmit(event) {
        event.preventDefault();
        let issue = {};
        issue.doctor_id = this.props.doctor.id;
        issue.title = this.state.titlei;
        issue.date = this.state.datei;
        issue.description = this.state.description;

        console.log('submitted', issue);
        axios.post('/api/Issue/', issue)
            .then(response => {
                console.log('Updated', response.data);
            });
        $("#modali").modal('hide');
    }

    renderTime() {
        let start = new Date("December 25, 1995 " + this.props.doctor.start);
        let end = new Date("December 25, 1995 " + this.props.doctor.end);
        let startHour = start.getHours();
        let endHour = end.getHours();
        let items = [];
        for (let i = startHour; i < endHour; i++) {
            let val = "" + i + ":00:00";
            let val1 = "" + i + ":30:00";
            items.push(<option value={val}>{i}:00</option>);
            items.push(<option value={val1}>{i}:30</option>);
        }
        items.push(<option value={"" + endHour + ":00:00"}>{endHour}:00</option>);
        return items;
    }

    renderSpecialties() {
        return this.props.doctor.specialties.map((spec) => {
            return (<div className="card-meta d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <span className="text">{spec.name} </span>
                </div>
            </div>)
        })
    }

    render() {
        console.log(this.props.doctor);
        let gender = "";
        if (this.props.doctor.user.gender === 0) {
            gender = "male";
        } else {
            gender = "female";
        }
        let image = this.props.doctor.filename;

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = yyyy + '-' + mm + '-' + dd;

        return (
            <div className="main-container">
                <div class="row justify-content-center mt-2">
                    <div class="col-lg-4 mb-3">
                        <div class="mb-4">
                            <div>
                                {image ? <img alt="Image" src={image} class="img-fluid rounded-circle w-60 mb-3" />
                                    : <img alt="Image" src="/images/avatar-doc-male.png" class="img-fluid rounded-circle w-60 mb-3" />
                                }

                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-9">
                        <div class="card">
                            <div class="card-body">
                                <div class="form-group row align-items-center">
                                    <label class="col-3">Name</label>
                                    <div class="col">
                                        <input type="text" placeholder="First name" value={this.props.doctor.user.name}
                                            name="name" class="form-control" readOnly />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-3">Email</label>
                                    <div class="col">
                                        <input type="email" value={this.props.doctor.user.email}
                                            name="email" class="form-control" readOnly />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-3">Gender</label>
                                    <div class="col">
                                        <input type="text" value={gender}
                                            name="gender" class="form-control" readOnly />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-3">Date of Birth</label>
                                    <div class="col">
                                        <input type="date"
                                            name="birth" class="form-control" readOnly />
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-3">Specialties</label>
                                    <div class="col">
                                        {this.renderSpecialties()}
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-3">Education</label>
                                    <div class="col">
                                        <input type="textarea" value={this.props.doctor.education}
                                            name="education" class="form-control" readOnly />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-3">Experience</label>
                                    <div class="col">
                                        <input type="number" value={this.props.doctor.experience}
                                            name="experience" class="form-control" readOnly />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-3">Bio</label>
                                    <div class="col">
                                        <textarea value={this.props.doctor.bio}
                                            name="bio" class="form-control" readOnly></textarea>
                                    </div>
                                </div>
                                <div class="card-footer bg-transparent">
                                    {/* <a href="#" class="btn btn-outline-primary" data-toggle="modal" data-target="#modal">Schedule Meeting</a> */}
                                    <a href="#" class="btn btn-outline-success" id="join" data-toggle="modal" data-target="#modali">Submit Issue</a>
                                </div>
                            </div>
                        </div >

                        <div className="modal fade" id="modal" tabIndex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true" >
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">New Appointment</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={this.handleAppSubmit}>
                                            <div >
                                                <span > Title:</span>
                                                <input name="title" type="text" className="form-control" placeholder="Brief Description About the Meeting"
                                                    onChange={this.handleChange} required />
                                            </div>
                                            <div >
                                                <span> Date:</span>
                                                <input type="date" className="form-control"
                                                    name="date" min={today} onChange={this.handleChange} required />
                                            </div>

                                            <div >
                                                <span>Time:</span>
                                                <select name="time" className="form-control" onChange={this.handleChange} required >
                                                    {this.renderTime()}
                                                </select>
                                            </div>
                                            <div >
                                                <span>Additional Notes:</span>
                                                <textarea type="text" className="form-control" placeholder="Additional Notes For Doctor"
                                                    name="notes" onChange={this.handleChange} />
                                            </div>
                                            <button type="submit" className="btn btn-primary mt-3" > Schedule </button>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="modali" tabIndex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true" >
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">New Issue</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={this.handleIssueSubmit}>
                                            <div >
                                                <span > Title:</span>
                                                <input name="titlei" type="text" className="form-control" placeholder="Brief Description About the Meeting"
                                                    onChange={this.handleChange} required />
                                            </div>
                                            <div >
                                                <span> Date:</span>
                                                <input type="date" className="form-control"
                                                    name="datei" onChange={this.handleChange} required />
                                            </div>

                                            <div >
                                                <span>Description:</span>
                                                <textarea type="text" className="form-control" placeholder="Detailed Description About The Issue"
                                                    name="description" onChange={this.handleChange} />
                                            </div>
                                            <button type="submit" className="btn btn-primary mt-3" > Submit </button>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >

                </div >
            </div >
        )
    }
}


export default Doctor;