import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Display = (props) => {
    const [allAlbums, setAllAlbums] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/allAlbums')
        .then((res) => {
            console.log(res)
            setAllAlbums(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
  return (
    

    <div>
        {
          allAlbums.map((album) => (
            <div key={album._id}>
              <h2>{album.albumName}</h2>
              <h2>{album.artist}</h2>
              <h2>{album.releaseYear}</h2>
              <p>Explicit? {album.explicit? "Yes": "No"} </p>
              <Link to={`/oneAlbum/${album._id}`}>Details</Link>
              <Link to={`/editAlbum/${album._id}`}>Edit</Link>
            </div>
          ))
        }
    </div>
  )
}

export default Display