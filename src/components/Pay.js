import React, { Component } from 'react'
import './CSS/pay.css'



class Pay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            phoneNumber: "",
            amount: "",
            account:"",
           

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    phonehandler = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }
    amounthandler = (event) => {
        this.setState({
            amount: event.target.value
        })
    }
    accounthandler = (event) => {
        this.setState({
            account: event.target.value
        })
    }

    handleSubmit = (event) => {
        let number = this.state.phoneNumber;
        let amount = this.state.amount;
        let account = this.state.account;
        if (!(number)&& !(amount) && !(account)) {
            alert("Fields cannot be empty")}
        else if ((number) &&(amount) &&(account)) {
            alert("Payment successful")
        }
        else {
            alert("Fill all the fields")
        }
        
        console.log(this.state);
        this.setState({
            phoneNumber: "",
            amount: "",
            account: "",
        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                   
                    
                    <p>Phone Number</p> 
                    <input type="text" value={this.state.phoneNumber} onChange={this.phonehandler} placeholder="Enter in format 2547..." />   
                    <p>Amount</p> 
                    <input type="text" value={this.state.amount} onChange={this.amounthandler} placeholder="Enter Amount" />                 
                    <p>Account Number</p>
                    <select onChange={this.accounthandler} defaultValue="Choose Account Number">
                        <option defaultValue>Choose Account Number</option>
                        <option value="No.">KYG059</option>
                        <option value="No.">KBX890</option>
                    </select><br />
                    <p><input type="submit" value="Pay" /></p>
                   
                </form>

            </div>
            
        )
    }
}

export default Pay;