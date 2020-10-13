import React from 'react'

function Avatar(props) {
  return (
  <img alt="avatar" style={{ width: '140px' }} src={props.avatar} />
  )
}

export default Avatar 

  //<img alt="avatar" style={{ width: '140px' }} src={this.state.userData["avatar_url"]} />
