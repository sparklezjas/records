import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditAlbum = () => {
    const [album, setAlbum] = useState({
        albumName: '',
        artist: '',
        releaseYear: 1920,
        genre: 'Rock',
        explicit: false
    })
    const [errors, setErrors] = useState({})
    const {id} = useParams ()
    const navigate = useNavigate()

    const changeHandler = (e) => {
        if(e.target.name === 'explicit'){
            setAlbum({...album, explicit: e.target.checked})
        } else{
            setAlbum({...album, [e.target.name]: e.target.value})
        }
    }
    useEffect(() => {
      axios.get(`http://localhost:8000/api/oneAlbum/${id}`)
        .then((res) => {
          setAlbum(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/updateAlbum/${id}`, album)
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }
  return (
    <div>
        <h2>Edit your favorite album</h2>
        <form onSubmit={submitHandler}>
            <label>Album Name:</label>
            <input type="text" onChange={changeHandler} value={album.albumName} name='albumName'/>
            { errors.albumName?
            <p className='text-danger'>{errors.albumName.message}</p>: null}
            <br/>
            <label>Artist:</label>
            <input type="text" onChange={changeHandler} value={album.artist} name='artist'/>
            { errors.artist?
            <p className='text-danger'>{errors.artist.message}</p>: null}
            <br/>
            <label>Release Year:</label>
            <input type="text" onChange={changeHandler} value={album.releaseYear} name='releaseYear'/>
            { errors.releaseYear?
            <p className='text-danger'>{errors.releaseYear.message}</p>: null}
            <br/>
            <label>Genre:</label>
            <select name='genre' onChange={changeHandler} value={album.genre}>
                <option value="Rock">Rock</option>
                <option value="Alternative">Alternative</option>
                <option value="Hip-hop/rap">Hip-hop/rap</option>
                <option value="Pop">Pop</option>
                <option value="Classical">Classical</option>
                <option value="Metal">Metal</option>
                <option value="Blues">Blues</option>
                <option value="Jazz">Jazz</option>
                <option value="Country">Country</option>
                <option value="R&B/Soul">R&B/Soul</option>
            </select>
            { errors.genre?
            <p className='text-danger'>{errors.genre.message}</p>: null}
            <br/>
            <label>Explicit?</label>
            <input type="checkbox" name='explicit' onChange={changeHandler} checked={album.explicit}/>
            <br/>
            <button>Post Album</button>
        </form>
    </div>
  )
}

export default EditAlbum