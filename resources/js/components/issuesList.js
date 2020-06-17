import React, { Component } from 'react';
import axios from 'axios';
import IssueCard from './issueCard';

class Issues extends Component {
    constructor(props) {
        super(props)
        this.state = {
            issues: [],
        };
    }

    getAllIssues() {
        axios.get('/api/Issue/')
            .then(response => {
                this.setState({ issues: response.data });
                console.log('IssuesList', response.data);
            });
    }

    componentDidMount() {
        // Get request for laravel api call
        this.getAllIssues();
    }

    renderNewIssues() {
        let today = new Date();
        return this.state.issues.map((iss) => {
            if (iss.closed == 0) {
                return (<IssueCard key={iss.id} closed={0} issue={iss} doctor={iss.doctor} />);
            }
        })
    }
    renderClosedIssues() {
        let today = new Date();
        return this.state.issues.map((iss) => {
            if (iss.closed == 1) {
                return (<IssueCard key={iss.id} closed={1} issue={iss} doctor={iss.doctor} />);
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
                                <h6>Issues</h6>
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
                                {this.renderNewIssues()}
                            </div>
                        </div>
                        <div class="card-list">
                            <div class="card-list-head">
                                <h6>Closed Issues</h6>
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
                                {this.renderClosedIssues()}
                            </div>
                        </div>
                    </div>


                </div >
            </div >
        )
    }
}


export default Issues;