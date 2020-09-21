import React, { Component } from 'react'

class Headlines extends Component {
  constructor(props) {
    super(props)
    this.state = { userData: {} }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/katie-mcdonagh")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState( { userData: data }) 
      })
  }

  render() {
    return (
      <div className="info">
        {this.state.userData["name"]}
      </div>
    )
  }
}

export default Headlines