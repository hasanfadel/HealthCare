import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Select from 'react-select'

class Issue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            doctors: [],
            refer: '',
            appointment: '',
            title: '',
            date: '',
            time: '',
            notes: '',
            startDate: '',
            doctorName: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleReferSubmit = this.handleReferSubmit.bind(this);
        this.handleIssueSubmit = this.handleIssueSubmit.bind(this);
        this.handleAppSubmit = this.handleAppSubmit.bind(this);
        this.renderComments = this.renderComments.bind(this);
        this.closeIssue = this.closeIssue.bind(this);
    }

    getAllComments() {
        axios.get('/api/Comment/' + this.props.issue.id)
            .then(response => {
                this.setState({
                    comments: response.data,
                });
                console.log('comment', response.data);
            });
    }

    getAllDoctors() {
        axios.get('/api/Doctor/')
            .then(response => {
                this.setState({
                    doctors: response.data.doctors,
                });
                console.log('doctors', response.data);
            });
    }

    componentDidMount() {
        console.log('Issue:', this.props);
        this.getAllComments();
        this.getAllDoctors();
        this.setState({
            doctorName: this.props.doctor.user.name
        })
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    handleReferChange(opt) {
        this.setState({
            refer: opt.value
        })
        console.log(this.state);
    }

    handleReferSubmit(event) {
        event.preventDefault();
        // let req = {};
        // req.id = this,state.refer;
        axios.put('/api/Issue/' + this.props.issue.id, { 'id': this.state.refer })
            .then(response => {
                console.log('Updated', response.data);
                this.setState({
                    doctorName: response.data.issue.doctor.user.name,
                })
            });
        $("#modal-refer").modal('hide');
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

    handleAppSubmit(event) {
        event.preventDefault();
        let appointment = {};
        appointment.doctor_id = this.state.refer;
        appointment.issue_id = this.props.issue.id;
        appointment.title = this.state.title;
        appointment.date = this.state.date;
        appointment.time = this.state.time;
        appointment.notes = this.state.notes;

        console.log('submitted', appointment);
        axios.post('/api/Appointment/', appointment)
            .then(response => {
                console.log('Updated', response.data);
            });
        $("#modal-meeting").modal('hide');
    }

    closeIssue() {
        console.log('closing issue');
        axios.put('/api/Issue/close/' + this.props.issue.id)
            .then(response => {
                console.log('Updated', response.data);
            });
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

    renderRefer() {

        const options = [];

        this.state.doctors.map((doc) => {
            options.push({ value: doc.id, label: doc.user.name })
        });

        return (<Select id='refer' options={options} onChange={opt => this.handleReferChange(opt)} />);

    }

    renderComments() {
        return this.state.comments.map((com) => {
            return (
                <div class="content-list-body">

                    <div class="card card-note">
                        <div class="card-header">
                            <div class="media align-items-center">
                                <div class="media-body">
                                    <h6 class="mb-0" data-filter-by="text">{com.doctors.user.name}</h6>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <span data-filter-by="text">{com.created_at}</span>
                                <div class="ml-1 dropdown card-options">
                                    <button class="btn-options" type="button" id="note-dropdown-button-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">more_vert</i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Edit</a>
                                        <a class="dropdown-item text-danger" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body" data-filter-by="text">
                            <p>{com.comment}</p>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
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

                    <div class="col-xl-9 col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="form-group row align-items-center">
                                    <label class="col-3">Title:</label>
                                    <div class="col">
                                        <input type="text" placeholder="First name" value={this.props.issue.title}
                                            name="title" class="form-control" readOnly />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-3">Description:</label>
                                    <div class="col">
                                        <textarea value={this.props.issue.description}
                                            name="description" class="form-control" readOnly></textarea>
                                    </div>
                                </div>

                                <div class="form-group row align-items-center">
                                    <label class="col-3">Date Issued:</label>
                                    <div class="col">
                                        <input type="date" value={this.props.issue.date}
                                            name="date" class="form-control" readOnly />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-3">Referenced Doctor:</label>
                                    <div class="col">
                                        <input type="text" value={this.state.doctorName}
                                            name="doctor" class="form-control" readOnly />
                                    </div>
                                </div>


                                {this.props.closed ?
                                    <></>
                                    :
                                    <div class="card-footer bg-transparent">

                                        <a href="#" class="btn btn-outline-primary" data-toggle="modal" data-target="#modal-refer">Refer to Other Doctor</a>
                                        <a href="#" class="btn btn-outline-success" data-toggle="modal" data-target="#modal-meeting">Shcedule Appointment</a>
                                        <a href="#" class="btn btn-outline-danger" onClick={this.closeIssue} >Close Issue</a>
                                    </div>
                                }
                            </div>
                        </div >

                        <div class="content-list" data-filter-list="content-list-body">
                            <div class="row content-list-head">
                                <div class="col-auto">
                                    <h3>Notes</h3>
                                    {/* <button class="btn btn-round" data-toggle="modal" data-target="#note-add-modal">
                                        <i class="material-icons">add</i>
                                    </button> */}
                                </div>

                            </div>
                            <div>
                                {this.renderComments()}
                            </div>
                            <div className="modal fade" id="modal-refer" tabIndex="-1" role="dialog"
                                aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Reference Other Doctor</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form onSubmit={this.handleReferSubmit}>
                                                <div >
                                                    <span > Select Preferred Doctor:</span>
                                                    {this.renderRefer()}
                                                </div>
                                                <button type="submit" className="btn btn-primary mt-3" > Refer </button>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="modal-meeting" tabIndex="-1" role="dialog"
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

                        </div >

                    </div >
                </div >
            </div>
        )
    }
}


export default Issue;