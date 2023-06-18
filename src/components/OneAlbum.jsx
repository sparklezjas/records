import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const OneAlbum = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [oneAlbum, setOneAlbum] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAlbum/${id}`)
            .then((res) => {
                console.log(res)
                setOneAlbum(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteAlbum/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }
return (
    <div>
        <h2>{oneAlbum.albumName}</h2>
        <h2>{oneAlbum.artist}</h2>
        <h2>{oneAlbum.releaseYear}</h2>
        <h2>{oneAlbum.genre}</h2>
        <p>Explicit? {oneAlbum.explicit? "Yes": "No"} </p>
        <button onClick={() => deleteHandler(oneAlbum._id)}>Delete Album</button>
    </div>
)
}

export default OneAlbum