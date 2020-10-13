import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Github extends Component {
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
        <Container maxWidth="sm">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
      {this.state.userData["name"]}
      <img alt="avatar" style={{ width: '140px' }} src={this.state.userData["avatar_url"]} />
      </Typography>
      </Container>
      </div>
    )
  }
}

export default Github