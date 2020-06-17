import React, { Component } from 'react';
import PressureGraph from './pressureGraph';
import HeartRateGraph from './heartRateGraph';
import axios from 'axios';

class Stats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stats: [],
            date: '',
            systolic: '',
            diastolic: '',
            heart: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    getStats() {
        axios.get('/api/Statistic/')
            .then(response => {
                this.setState({ stats: response.data });
                console.log(response.data);
                console.log('get stats', response.data)
            });
    }

    componentDidMount() {
        // Get request for laravel api call
        this.getStats();
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
        console.log('state', this.state);
    }

    handleSubmit(event) {
        event.preventDefault();
        let stat = {};
        stat.date = this.state.date;
        stat.systolic = this.state.systolic;
        stat.diastolic = this.state.diastolic;
        stat.heart = this.state.heart;

        axios.post('/api/Statistic/', stat)
            .then(response => {
                console.log('Updated', response.data);
                this.setState({
                    stats: response.data
                })
                alert("Uploaded Successfully");
            });
    }

    renderPressureGraph() {
        return (<PressureGraph stats={this.state.stats }/>);

    }
    renderHeartRateGraph() {
        return (<HeartRateGraph stats={this.state.stats }/>);

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
                <div class="card">
                    <div class="card-body">
                        <form id="stat" onSubmit={this.handleSubmit}>
                            <div class="form-group row align-items-center">
                                <label class="col-3">Date</label>
                                <div class="col">
                                    <input type="date" onChange={this.handleChange}
                                        name="date" max={today} class="form-control" required />
                                </div>

                                <label class="col-3">Systolic Pressure</label>
                                <div class="col">
                                    <input type="number" min="0" max="250" onChange={this.handleChange}
                                        name="systolic" class="form-control" required />
                                </div>
                            </div>
                            <div class="form-group row align-items-center">
                                <label class="col-3">Heart Rate</label>
                                <div class="col">
                                    <input type="number" min="0" max="250" onChange={this.handleChange}
                                        name="heart" class="form-control" required />
                                </div>

                                <label class="col-3">Diastolic Pressure</label>
                                <div class="col">
                                    <input type="number" min="0" max="250" onChange={this.handleChange}
                                        name="diastolic" class="form-control" required />
                                </div>

                            </div>


                            <div class="row justify-content-end">
                                <button type="submit" class="btn btn-primary">Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row justify-content-center mt-2">

                    <div class="col-lg-6 mb-3">
                        <div class="mb-4">
                            <div class="card">
                                <div class="card-body">
                                    <div id="pressure">
                                        {this.renderPressureGraph()}
                                    </div>

                                </div>
                            </div >
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-9">
                        <div class="card">
                            <div class="card-body">

                                <div id="heart">
                                    {this.renderHeartRateGraph()}
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        )
    }
}


export default Stats;