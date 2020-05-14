import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: [],
            user: [],
            height: '',
            weight: '',
            birth: '',
            disease: '',
            medicine: '',
            filename: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this);

    }

    getProfile() {
        axios.get('/api/Patient/get')
            .then(response => {
                this.setState({
                    profile: response.data,
                    user: response.data.user
                });
                console.log(response.data);
                this.setState({
                    height: this.state.profile.height,
                    weight: this.state.profile.weight,
                    birth: this.state.profile.birth,
                    disease: this.state.profile.disease,
                    medicine: this.state.profile.medicine,
                    filename: this.state.profile.filename,
                })
            });

    }

    componentDidMount() {
        // Get request for laravel api call
        this.getProfile();
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    handleSubmit(event) {
        event.preventDefault();
        let patient = {};
        patient.id = this.state.profile.id;
        patient.birth = this.state.birth;
        patient.height = this.state.height;
        patient.weight = this.state.weight;
        patient.disease = this.state.disease;
        patient.medicine = this.state.medicine;

        console.log('submitted', patient);
        axios.put('/api/Patient/' + this.state.profile.id, patient)
            .then(response => {
                console.log('Updated', response.data);
                this.setState({
                    profile: response.data,
                })
            });
    }

    handlePhotoSubmit(event) {
        const value = event.target.files[0];
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    render() {
        let gender = "";
        if (this.state.user.gender === 0) {
            gender = "male";
        } else {
            gender = "female";
        }
        let image = this.state.profile.filename;
        return (
            <div className="main-container">
                <div class="row justify-content-center mt-2">
                    <div class="col-lg-4 mb-3">
                        <div class="mb-4">
                            <div>
                                {image ? <img alt="Image" src={image} class="img-fluid rounded-circle w-60 mb-3" />
                                    : <img alt="Image" src="/images/avatar-male.png" class="img-fluid rounded-circle w-60 mb-3" />
                                }

                            </div>
                            <div>
                                <div class="custom-file custom-file-naked d-block mb-1">
                                    <input type="file" name="filename" onChange={this.handlePhotoSubmit}
                                        class="custom-file-input d-none" id="filename" />
                                    <label class="custom-file-label position-relative" for="filename">
                                        <span class="btn btn-primary">
                                            Update photo
                                        </span>

                                    </label>
                                    <span>
                                        {image}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-9">
                        <div class="card">
                            <div class="card-body">
                                <div class="form-group row align-items-center">
                                    <label class="col-3">Name</label>
                                    <div class="col">
                                        <input type="text" placeholder="First name" value={this.state.user.name}
                                            name="name" class="form-control" readOnly />
                                    </div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <label class="col-3">Email</label>
                                    <div class="col">
                                        <input type="email" value={this.state.user.email}
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
                                <form id="profile" onSubmit={this.handleSubmit}>
                                    <div class="form-group row align-items-center">
                                        <label class="col-3">Date of Birth</label>
                                        <div class="col">
                                            <input type="date" value={this.state.birth} onChange={this.handleChange}
                                                name="birth" class="form-control" required />
                                        </div>
                                    </div>

                                    <div class="form-group row align-items-center">
                                        <label class="col-3">Height</label>
                                        <div class="col">
                                            <input type="number" min="0" value={this.state.height} onChange={this.handleChange}
                                                name="height" class="form-control" required />
                                        </div>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <label class="col-3">Weight</label>
                                        <div class="col">
                                            <input type="number" min="0" value={this.state.weight} onChange={this.handleChange}
                                                name="weight" class="form-control" required />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-3">Chronic Disease</label>
                                        <div class="col">
                                            <textarea value={this.state.disease} onChange={this.handleChange}
                                                name="disease" class="form-control" rows="3"></textarea>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-3">Chronic Medicine</label>
                                        <div class="col">
                                            <textarea value={this.state.medicine} onChange={this.handleChange}
                                                name="medicine" class="form-control" rows="2"></textarea>
                                        </div>
                                    </div>
                                    <div class="row justify-content-end">
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        )
    }
}


export default Profile;