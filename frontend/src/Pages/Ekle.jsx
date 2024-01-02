import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileBase from 'react-file-base64';
import { fetchPost } from '../api';
import "./style.css";
const Ekle = () => {
  const Navigate = useNavigate();
  const [post, SetPost] = useState({
    baslik: "",
    ufakbaslik: "",
    acikla: "",
    aciklaiki: "",
    selectedFile: "",
    video: "",
    carousel: "",
    renk: "",
    film: "",
    top10: "",
    yeni: ""
  });
  const onInputChange = (e) => {
    SetPost({ ...post, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {

    e.preventDefault();
    fetchPost(post)
    Navigate("/panel")


  };

  return (
    <>
      <div className="container mt-5">
        <form style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', color: 'black',maxWidth:"100%" }} onSubmit={onSubmit}>
          <h4 className='text-center'>Film Ekle</h4>
          <div className='row'>
            <div className='col-md-6'>      <div className="form-group">
              <label htmlFor="exampleInputEmail1">Yeni:</label>
              <input type="text" className="form-control" name="yeni" onChange={onInputChange} />
            </div></div>
            <div className='col-md-6'>       <div className="form-group">
              <label htmlFor="exampleInputEmail1">Renk:</label>
              <input type="text" className="form-control" name="renk" onChange={onInputChange} />
            </div></div>

            <div className='col-md-6'>     <div className="form-group">
              <label htmlFor="exampleInputEmail1">Top10:</label>
              <input type="text" className="form-control" name="top10" onChange={onInputChange} />
            </div></div>
            <div className='col-md-6'>  <div className="form-group">
              <label htmlFor="exampleInputEmail1">Film:</label>
              <input type="text" className="form-control" name="film" onChange={onInputChange} />
            </div></div>
            <div className='col-md-6'>  <div className="form-group">
              <label htmlFor="exampleInputEmail1">Carousel:</label>
              <input type="text" className="form-control" name="carousel" onChange={onInputChange} />
            </div>
            </div>
            <div className='col-md-6' >
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Başlık:</label>
                <input type="text" className="form-control" name="baslik" onChange={onInputChange} />
              </div></div>

            <div className='col-md-6'>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Alt Başlık:</label>
                <input type="text" className="form-control" name="ufakbaslik" onChange={onInputChange} />
              </div> </div>
            <div className='col-md-6'>      <div className="form-group">
              <label htmlFor="exampleInputPassword1">Açıklama:</label>
              <input type="text" className="form-control" name="acikla" onChange={onInputChange} />
            </div></div>
            <div className='col-md-12'>    <div className="form-group">
              <label htmlFor="exampleInputPassword1">Alt Açıklama:</label>
              <textarea rows="4" className='form-control' cols="50" name="aciklaiki" onChange={onInputChange} style={{ height: "auto" }}> </textarea>

            </div></div>
            <div className='col-md-3'>             <div className="form-group p-3" style={{ border: "1px solid red", borderRadius: "10px" }}>
              <label htmlFor="exampleInputPassword1">Resim:</label><br></br>

              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  SetPost({ ...post, selectedFile: base64 })
                }
              />
            </div></div>
            <div className='col-md-6'>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Video:</label>
                <input type="text" className="form-control" name="video" onChange={onInputChange} />
              </div></div>


          </div>
          <button type="submit" className="btn btn-danger d-block mx-auto col-3" style={{background:"red"}}>Ekle</button>
        </form>



      </div>
    </>
  )
}

export default Ekle
