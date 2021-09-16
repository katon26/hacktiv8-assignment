import React from "react";

export default class Users extends React.Component {
    constructor() {
      super()
      this.state = {
        username: ''
      }
    }
  
    setUsername = () => {
        this.setState({
          username: 'user01'
        })
    }

    getUsername() {
      return this.state.username
    }
  
    render() {
      return (
          <div>
            <h1>{this.state.username}</h1>
            <br/>
            <button onClick={this.setUsername}>Set Username</button>
          </div>
        
      )
    }
  }