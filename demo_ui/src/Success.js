import React, { Component } from 'react'

export class Success extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: this.props.details
        }
        console.log(this.props.details)
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className=" text-light">
                                <div>
                                    <h4 className="text-success">Registered Successfully!!</h4>
                                    <h5 className="text-dark">Name:&nbsp;{this.state.details[0].name}</h5>
                                    <h5 className="text-dark">Age:&nbsp;{this.state.details[0].age}</h5>
                                    <h5 className="text-dark">ContactNo:&nbsp;{this.state.details[0].contactNo}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Success
