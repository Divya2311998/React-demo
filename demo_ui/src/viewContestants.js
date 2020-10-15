import React, { Component } from 'react'
import axios from 'axios'
const url="http://localhost:1050/getDetails"

export class ViewContestants extends Component {
    constructor(props){
        super(props);
        this.state={
            contestantsDetails:[]
        }
        this.fetchDetails()
    }
    fetchDetails=()=>{
        console.log("inside fetch details")
        axios.get(url).then((res)=>{
            console.log(res)
            this.setState({contestantsDetails:res.data})
        })
    }
    render() {
        return (
            <div className="row" >
              {this.state.contestantsDetails.map((ele,index)=>{
                return(
                  <div className="card" style={{
                    marginLeft: '85px', width: '320px', marginBottom: '2rem',
                    backgroundColor: '#E2E8EC'
                  }}>
                    <div className="card-body" key={index}>
                      <h5 className="card-title">Name:&nbsp;{ele.name}</h5>
                      <p  className="card-subtitle mb-2">Age:&nbsp;{ele.age}</p>
                      <p  className="card-subtitle mb-2">Constact Number:&nbsp;{ele.contactNo}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        )
    }
}

export default ViewContestants
