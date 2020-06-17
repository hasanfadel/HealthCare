import React, { Component } from 'react';
import axios from 'axios';
import DoctorCard from './doctorCard'

class DoctorsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            doctors: [],
            specialties: [],
            filter: '',
            patient_id: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    }

    getAllDoctors() {
        axios.get('/api/Doctor/')
            .then(response => {
                this.setState({ 
                    doctors: response.data.doctors,
                    patient_id: response.data.patient_id    
                });
                console.log('doctors', response.data);
            });
    }

    getAllSpecialties() {
        axios.get('/api/Specialty/')
            .then(response => {
                this.setState({ specialties: response.data });
                console.log('specialties', response.data);
            });
    }

    componentDidMount() {
        // Get request for laravel api call
        this.getAllSpecialties();
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

    handleFilterSubmit() {
        if(this.state.filter == ''){
            this.getAllDoctors();
            return;
        }
        axios.get('/api/Specialty/' + this.state.filter)
            .then(response => {
                this.setState({ doctors: response.data[0].doctors });
                console.log('doctorsFiltered', response.data[0].doctors);
            });
    }

    renderDoc() {
        return this.state.doctors.map((doc) => {
            return (<DoctorCard key={doc.id} doctor={doc} patient_id={this.state.patient_id} />)
        })
    }

    renderFilter() {
        let items = [];
        items.push(<option value=''>View All</option>);
        this.state.specialties.map((spec) => {
            items.push(<option value={spec.id}>{spec.name}</option>);
        });
        return items;
    }

    render() {
        return (
            <div className="main-container">
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="projects" role="tabpanel" data-filter-list="content-list-body">
                        <div className="content-list">
                            <br />
                            <div className="row content-list-head">
                                <div className="col-xl-8">
                                    <h4>Doctors</h4>
                                </div>
                                    <div className="col-xl-4 align-right">
                                        <select name="filter" className="form-control-right" onChange={this.handleChange} required >
                                            {this.renderFilter()}
                                        </select>
                                        <button type="submit" onClick={this.handleFilterSubmit} className="btn btn-primary" > Filter </button>
                                    </div>
                            </div>
                            <hr />

                            <div className="content-list-body row">
                                {this.renderDoc()}
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}


export default DoctorsList;