import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <div>
        <div style={{display: "flex", alignItems: "center"}}>
            <h1>Records Dot Com</h1>
            <Link style={{margin: "20px"}} to='/createAlbum/form'>Post an album</Link>
            <Link to={'/'}>Home</Link>
        </div>
        <hr/>
    </div>
  )
}

export default Nav