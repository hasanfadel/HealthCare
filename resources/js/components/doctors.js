import React, { Component } from 'react';
import axios from 'axios';
import DoctorCard from './doctorCard'

class Doctors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            doctors: [],
        };
    }

    getAllDoctors() {
        axios.get('/api/Doctor/')
            .then(response => {
                this.setState({ doctors: response.data });
                console.log(response.data);
            });
    }

    componentDidMount() {
        // Get request for laravel api call
        this.getAllDoctors();
    }

    renderDoc() {
        return this.state.doctors.map((doc) => {
            return (<DoctorCard key={doc.id} doctor={doc} />)
        })
    }

    render() {
        return (
            <div className="main-container">
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="projects" role="tabpanel" data-filter-list="content-list-body">
                        <div className="content-list">
                            <br />
                            <div className="row content-list-head">
                                <div className="col-auto">
                                    <h4>Doctors</h4>
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


export default Doctors;