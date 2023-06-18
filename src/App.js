import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Nav from './components/Nav';
import CreateAlbum from './components/CreateAlbum';
import OneAlbum from './components/OneAlbum';
import EditAlbum from './components/EditAlbum';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Display/>}/>
          <Route path="/createAlbum/form" element={<CreateAlbum/>}/>
          <Route path='/oneAlbum/:id' element={<OneAlbum/>}/>
          <Route path='/editAlbum/:id' element={<EditAlbum/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
