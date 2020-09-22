import React, { Component } from 'react'
import './CSS/pay.css'



class Subscribe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            phoneNumber: "",
            package: "",
           

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    phonehandler = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }
    packagehandler = (event) => {
        this.setState({
            package: event.target.value
        })
    }

    handleSubmit = (event) => {
        let number = this.state.phoneNumber;
        let pack = this.state.package;
        if (!(number)&& !(pack)) {
            alert("Fields cannot be empty")}
        else if ((number) &&(pack)) {
            alert("Subscription successful")
        }
        else {
            alert("Fill all the fields")
        }
        
        console.log(this.state);
        this.setState({
            phoneNumber: "",
            package: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                   
                    
                    <p>Phone Number</p> 
                    <input type="text" value={this.state.phoneNumber} onChange={this.phonehandler} placeholder="Enter in format 2547..." /> <br />                   
                    <p>Package</p>
                    <select onChange={this.packagehandler} defaultValue="Select Package">
                        <option defaultValue>Select Subscription package</option>
                        <option value="bungoma">Bungoma Line | Ksh 2500 | 7 days. (4 scans per day)</option>
                        <option value="bungoma">Bungoma Line Three | Ksh 1000 | 7 days. (2 scans per day)</option>
                        <option value="bungoma">Bungoma Line Three | Ksh 2500 | 30 days. (3 scans per day)</option>
                        <option value="bungoma">Bungoma Line Three | Ksh 2000 | 30 days. (2 scans per day)</option>
                    </select><br />
                    <p><input type="submit" value="Subscribe" /></p>
                   
                </form>

            </div>
            
        )
    }
}

export default Subscribe;