import React, { Component } from 'react'
import Success from './Success'
import axios from 'axios'
const url="http://localhost:1050/addDetails"
export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contestantDetails: [],
            form: {
                name: "",
                age: "",
                contactNo: "",
            },
            formErrorMessage: {
                nameError: "",
                ageError: "",
                contactNoError: ""
            },
            formValid: {
                nameValid: false,
                ageValid: false,
                contactNoValid: false,
                buttonActive: false
            },
            successMessage: "",
            errorMessage:""

        }
    }

    handleSubmit =(event) => {
        event.preventDefault()
        let details=this.state.contestantDetails
        details.push(this.state.form)
        this.setState({successMessage:"Registered Successfully!!", contestantDetails:details})
        axios.post(url,this.state.form).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            if(err.response){
                this.setState({errorMessage:err.response.data.message})
            }else{
                this.setState({errorMessage:"server error"})
            }
        })
        
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const { form } = this.state;
        this.setState({ form: { ...form, [name]: value } });
        this.validateField(name,value)
    };

    validateField(name,value){
        const formValid = this.state.formValid
        const formErrorMessage = this.state.formErrorMessage
        switch (name) {
            case "name":
                if(value===""){
                    formErrorMessage.nameError="Field Required"
                    formValid.nameValid=false
                }else if(!value.match(/^[a-zA-Z]{1,15}$/)){
                    formErrorMessage.nameError="Name should contains only Alphabets"
                    formValid.nameValid=false
                }else{
                    formErrorMessage.nameError=""
                    formValid.nameValid=true
                }
                break;
            case "age":
                if(value===""){
                    formErrorMessage.ageError="Field Required"
                    formValid.ageValid=false
                }else if(!(value>15 && value<25)){
                    formErrorMessage.ageError="Age should be between 15 and 25"
                    formValid.ageValid=false
                }else{
                    formErrorMessage.ageError=""
                    formValid.ageValid=true
                }
                break;
            case "contactNo":
                if(value===""){
                    formErrorMessage.contactNoError="Field Required"
                    formValid.contactNoValid=false
                }else if(!value.match(/^[6789]{1}[0-9]{9}$/)){
                    formErrorMessage.contactNoError="Please enter a valid mobile no"
                    formValid.contactNoValid=false
                }else{
                    formErrorMessage.contactNoError=""
                    formValid.contactNoValid=true
                }
                break;
            default:
                break;
        }
        formValid.buttonActive= formValid.nameValid && formValid.ageValid && formValid.contactNoValid
        this.setState({formErrorMessage:formErrorMessage, formValid:formValid})
    }


    render() {
        if(this.state.contestantDetails.length!==0){
            return <Success details={this.state.contestantDetails}></Success>
        }else{
            return (
                <div  >
                    <React.Fragment>
                        <div className="container">
                            <div className="row mt-4">
                                <div className="col-lg-4 offset-lg-1 col-md-3">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name" className="form-label">Name of the contestant</label>
                                            <input type="text" name="name" id="name" autoComplete="off" className="text form-control" placeholder="Enter your Name" value={this.state.form.name} onChange={this.handleChange} />
                                            <span name="nameError" className="text-danger">
                                                {this.state.formErrorMessage.nameError}
                                            </span>
                                        </div>
    
                                        <div className="form-group">
                                            <label htmlFor="age" className="form-label">Age</label>
                                            <input type="number" name="age" id="age" autoComplete="off" className="text form-control" placeholder="Enter your Age" value={this.state.form.age} onChange={this.handleChange} />
                                            <span name="ageError" className="text-danger">
                                                {this.state.formErrorMessage.ageError}
                                            </span>
                                        </div>
    
                                        <div className="form-group">
                                            <label htmlFor="contactNo" className="form-label">Contact Number</label>
                                            <input type="text" name="contactNo" id="contactNo" autoComplete="off" className="text form-control" placeholder="Enter your Contact Number" value={this.state.form.contactNo} onChange={this.handleChange} />
                                            <span name="ageError" className="text-danger">
                                                {this.state.formErrorMessage.contactNoError}
                                            </span>
                                        </div>
    
                                        <button name="register" type="submit" className="btn btn-info btn-block" disabled={!this.state.formValid.buttonActive} >Register</button>
    
                                    </form>
                                    <span name="successMessage" className="text-success text-bold">
                                        {this.state.successMessage}
                                    </span>
    
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                </div>
            )
        }
    }
}

export default Register
