import React from "react";


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }
  render() {
    return (
    <div>
      <section className="contact-section">
          <h3>Contact</h3>
          <form className="form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div className="id">
                  <div className="name">
                      <label htmlFor="name">name</label>
                      <input id="name" type="text" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                  </div>
                  <div className="email" >
                      <label htmlFor="email">email</label>
                      <input id="email" type="text" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                  </div>
              </div>
              <div className="subject">
                  <label htmlFor="subject">subject</label>

                  <input id="subject" type="text" name="subject" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
              </div>
              <div className="message">
                  <label id="message" htmlFor="message">message</label>

                  <textarea name="message" id="" cols="25" rows="8"  value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                  

              </div>
              <div style={{ display: "flex", justifyContent: "space-between"}}>
              <span id="errorMsg" className="error" color="red"></span>
              <button type="submit">SUBMIT</button>
              </div>
          </form>
      </section>
    </div>
  )}
  onNameChange(event) {
    this.setState({name: event.target.value})
  }
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
  onSubjectChange(event) {
    this.setState({subject: event.target.value})
  }
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
  handleSubmit (event) {

    event.preventDefault()
    postEmail({
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      }
    )
 
  }
   
}

const postEmail = async (email) => {
  
  await fetch('/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(email)
    })
    .then((res) => res.text())
    .then((res) => {
      if (res === "OK" || res === "Accepted") {
        document.getElementById("errorMsg").style.color = "green"
        document.getElementById("errorMsg").textContent = "Message sent!"
      }
      else {
        throw new Error(res || "Something went wrong")
      }
    })
    .catch((err) => {
      console.log(err)
      document.getElementById("errorMsg").textContent = err.message
    })


}



export default ContactForm;
