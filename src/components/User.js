import React, { Component } from 'react'
import './CSS/user.css'



class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            role: "",
            status: "",
            password: "",
            


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    namehandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    rolehandler = (event) => {
        this.setState({
            role: event.target.value
        })
    }
    statushandler = (event) => {
        this.setState({
            status: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }


    handleSubmit = (event) => {
        let name = this.state.name;
        let email = this.state.email;
        let role = this.state.role;
        let status = this.state.status;
        let password = this.state.password;
        if (!(name)&& !(email) && !(role) && !(status) && !(password)) {
            alert("Fields cannot be empty")}
        else if ((name) &&(email) &&(role) &&(status) &&(password)) {
            alert("Created successful")
        }
        else  {
            alert("Fill all the fields")
        }
        console.log(this.state);
        this.setState({
            name: "",
            email: "",
            role: "",
            status: "",
            password: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>
                <div class="hero-image">
                <form onSubmit={this.handleSubmit}>
                    <h1>Create User</h1>
                    <p class="pusers">Name :</p> 
                    <input type="text" value={this.state.name} onChange={this.namehandler} placeholder="Enter Your Name..." />
                    <p class="pusers">Email :</p> 
                    <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Enter email..." />
                    <p class="pusers">Role :</p>
                    <select onChange={this.rolehandler} defaultValue="Choose Options">
                        <option defaultValue>Choose Options</option>
                        <option value="admin">Administrator</option>
                        <option value="sacco">Sacco</option>
                    </select><br />
                    <p class="pusers">Status :</p>
                    <select onChange={this.statushandler} defaultValue="Not Active">
                        <option defaultValue>Not Active</option>
                        <option value="active">Active</option>
                        <option value="notactive">Not Active</option>
                    </select><br />
                    <p class="pusers">Password :</p> 
                    <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    
                    <input type="submit" value="Create User" />
                </form>
                </div>
            </div>
            
        )
    }
}

export default User