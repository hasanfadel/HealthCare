import React, { Component } from 'react';
import axios from 'axios';

class DoctorCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bio: '',
            education: '',
            experience: '',
            filename: '',
            user: '',
            specialties: '',
        };
        this.handleModalChange = this.handleModalChange.bind(this);
        this.handleModalSubmit = this.handleModalSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.props.doctor);
        this.setState({
            bio: this.props.doctor.bio,
            education: this.props.doctor.education,
            experience: this.props.doctor.experience,
            filename: this.props.doctor.filename,
            user: this.props.doctor.user,
            specialties: this.props.doctor.specialties,
        })
    }

    handleModalChange(event) {
        console.log(this.state);
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }
    handleModalSubmit(event) {
        event.preventDefault();

        $("#modal-".concat(this.props.doctor.id)).modal('hide');
    }

    doctor() {

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
        let gender = "";
        if (this.props.doctor.user.gender === 0) {
            gender = "male";
        } else {
            gender = "female";
        }
        let image = this.props.doctor.filename;

        let modalId = "modal-".concat(this.props.doctor.id);
        let modalBtn = "#modal-".concat(this.props.doctor.id);
        return (
            <div className="col-lg-4">
                <div className="card card-project">
                    <div className="card-body">
                        {/* <a className="dropdown-item" href="#" data-toggle="modal" data-target={modalBtn}>Edit</a>
                                <a className="dropdown-item text-danger" href="#" onClick={() => this.props.delete(this.props.doctor)}>Delete</a> */}
                        <div>
                            {image ? <img alt="Image" src={image} class="img-thumbnail rounded-circle w-40 mb-3" />
                                : <img alt="Image" src="/images/avatar-doc-male.png" class="img-thumbnail rounded-circle w-40 mb-3" />
                            }

                        </div>
                        <div className="card-title">
                            <a href="#" onClick={this.doctor}>
                                <h5 data-filter-by="text">{this.props.doctor.user.name} </h5>
                            </a>
                        </div>
                        <div className="card-meta d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <span className="text">Specialties: </span>
                            </div>
                        </div>
                        {this.renderSpecialties()}
                    </div>
                    <div class="card-footer bg-transparent">
                        <a href="#" data-toggle="modal" data-target={modalBtn} class="btn btn-primary">Schedule Meeting</a>
                    </div>
                </div>

                <div className="modal fade" id={modalId} tabIndex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    
                    
                </div>
            </div>
        )
    }
}

export default DoctorCard;