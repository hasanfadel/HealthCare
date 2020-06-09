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
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleReferSubmit = this.handleReferSubmit.bind(this);
        this.handleIssueSubmit = this.handleIssueSubmit.bind(this);
        this.renderComments = this.renderComments.bind(this);
        this.closeIssue = this.closeIssue.bind(this);
    }

    getAllComments() {
        axios.get('/api/Comment/' + this.props.issue.id)
            .then(response => {
                this.setState({
                    comments: response.data,
                });
                console.log(response.data);
            });
    }

    getAllDoctors() {
        axios.get('/api/Doctor/')
            .then(response => {
                this.setState({
                    doctors: response.data,
                });
                console.log('doctors', response.data);
            });
    }

    componentDidMount() {
        this.getAllComments();
        this.getAllDoctors();
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
        axios.put('/api/Issue/' + this.props.issue.id, {'id' : this.state.refer})
            .then(response => {
                console.log('Updated', response.data);
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

    closeIssue() {
        console.log('closing issue');
        axios.put('/api/Issue/close/' + this.props.issue.id)
            .then(response => {
                console.log('Updated', response.data);
            });
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
        return (
            <div className="main-container">
                <div class="row justify-content-center mt-2">

                    <div class="col-xl-8 col-lg-12">
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
                                        <input type="text" value={this.props.doctor.user.name}
                                            name="doctor" class="form-control" readOnly />
                                    </div>
                                </div>


                                {this.props.closed ?
                                    <></>
                                    :
                                    <div class="card-footer bg-transparent">

                                        <a href="#" class="btn btn-outline-primary" data-toggle="modal" data-target="#modal-refer">Refer to Other Doctor</a>
                                        <a href="#" class="btn btn-outline-success" data-toggle="modal" data-target="#modal-meeting">shcedule Meeting</a>
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

                            {/* <div className="modal fade" id="modali" tabIndex="-1" role="dialog"
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
                            </div> */}
                        </div >

                    </div >
                </div >
            </div>
        )
    }
}


export default Issue;