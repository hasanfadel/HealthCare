import React, { Component } from 'react';
import axios from 'axios';

class IssueCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    componentDidMount() {
        // Get request for laravel api call
    }

    render() {
        let n = this.props.new;

        return (
            <div class="card card-task">
                <div class="progress">
                    <div  class={n ?"progress-bar bg-primary" : "progress-bar bg-success"} role="progressbar" style={{ width: '100%' }}
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="card-body">
                    <div class="card-title">
                        <a href="#">
                            <h6 data-filter-by="text">{this.props.issue.title}</h6>
                        </a>
                        <span class="text-small">{this.props.issue.description}</span>
                    </div>
                    <div class="card-meta">
                        <ul class="avatars">

                        </ul>
                        <div class="d-flex align-items-center">
                            {/* <i class="material-icons">playlist_add_check</i> */}
                            <span> {this.props.issue.date} </span>
                        </div>

                        {n ?
                            <div class="dropdown card-options">
                                <button class="btn-options" type="button" id="task-dropdown-button-2"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="material-icons">more_vert</i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#">Edit</a>
                                    <div class="dropdown-divider"></div>
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


export default IssueCard;