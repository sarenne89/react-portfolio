import React from 'react';
import axios from 'axios';
import '../styles/Contact.css'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
  resetForm(){
    this.setState({name: "", email: "", message: ""})
  }
  render() {
    return(
      <div className="container-fluid background d-flex justify-content-center align-items-center m-0">
          <div className="container-fluid m-5 p-5 form shadow-lg">
              <h1 className="display-5">//Contact</h1>
              <div className="container-fluid">
                  <div className="row align-items-center text-center my-5">
                    <div className="col-4">
                        <a target="_blank" href="https://www.linkedin.com/in/matt-dunmore-082168250/"><i className="fa-brands fa-linkedin fa-4x"></i></a>
                    </div>
                    <div className="col-4">
                        <a target="_blank" href="https://www.github.com/sarenne89"><i className="fa-brands fa-github fa-4x"></i></a>
                    </div>
                    <div className="col-4">
                        <a href="mailto: mdunmore89@gmail.com"><i className="fa-solid fa-envelope fa-4x"></i></a>
                    </div>
                  </div>
                  <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                  <div className="form-groupm my-2">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                  </div>
                  <div className="form-group my-2">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                  </div>
                  <div className="form-group my-2">
                      <label htmlFor="message">Message</label>
                      <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
              </div>
          </div>
      </div>
    );
  }
  onNameChange(event) {
	  this.setState({name: event.target.value})
  }
  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }
  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default Contact