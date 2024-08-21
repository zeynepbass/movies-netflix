import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchDetay, fetchDuzenle } from '../api';
const Duzenle = () => {
  const { id } = useParams();
  const [data, setData] = useState({
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
  })
  useEffect(() => {

    fetchDetay(id)
      .then((response) => { setData(response.data) })
      .catch({})
  }, [id])

  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate();
  const Duzenle = async (e) => {
    e.preventDefault();
    try {

      fetchDuzenle(data, id)

      navigate("/panel");

    } catch (error) {
      console.error('Düzenleme işlemi sırasında bir hata oluştu:', error);
      // Hata durumunda yapılacak işlemleri burada ekleyebilirsiniz.
    }
  };

  return (
    <>
      <div className="container mt-5">
        <form style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', color: 'black',maxWidth:"100%" }} onSubmit={Duzenle}>
          <h4 className='text-center'>Film Düzenle</h4>
          <div className='row'>
            <div className='col-md-6'>      <div className="form-group">
              <label htmlFor="exampleInputEmail1">Yeni:</label>
              <input type="text" className="form-control" name="yeni" onChange={onInputChange} value={data.yeni} />
            </div></div>
            <div className='col-md-6'>       <div className="form-group">
              <label htmlFor="exampleInputEmail1">Renk:</label>
              <input type="text" className="form-control" name="renk" onChange={onInputChange} value={data.renk} />
            </div></div>

            <div className='col-md-6'>     <div className="form-group">
              <label htmlFor="exampleInputEmail1">Top10:</label>
              <input type="text" className="form-control" name="top10" onChange={onInputChange} value={data.top10} />
            </div></div>
            <div className='col-md-6'>  <div className="form-group">
              <label htmlFor="exampleInputEmail1">Film:</label>
              <input type="text" className="form-control" name="film" onChange={onInputChange} value={data.film} />
            </div></div>
            <div className='col-md-6'>  <div className="form-group">
              <label htmlFor="exampleInputEmail1">Carousel:</label>
              <input type="text" className="form-control" name="carousel" onChange={onInputChange} value={data.carousel} />
            </div>
            </div>
            <div className='col-md-6' >
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Başlık:</label>
                <input type="text" className="form-control" name="baslik" onChange={onInputChange} value={data.baslik} />
              </div></div>

            <div className='col-md-6'>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Alt Başlık:</label>
                <input type="text" className="form-control" name="ufakbaslik" onChange={onInputChange} value={data.ufakbaslik} />
              </div> </div>
            <div className='col-md-6'>      <div className="form-group">
              <label htmlFor="exampleInputPassword1">Açıklama:</label>
              <input type="text" className="form-control" name="acikla" onChange={onInputChange} value={data.acikla} />
            </div></div>
            <div className='col-md-12'>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Alt Açıklama:</label>
                <textarea
                  rows="4"
                  className="form-control"
                  cols="50"
                  name="aciklaiki"
                  onChange={onInputChange}
                  style={{ height: "auto" }}
                  value={data && data.aciklaiki ? data.aciklaiki : <p>veri yok</p>}
                >

                </textarea>




              </div></div>
            <div className='col-md-3'>
              <div className="form-group p-3" style={{ border: "1px solid red", borderRadius: "10px" }}>
                <label htmlFor="exampleInputPassword1">Resim:</label><br></br>
                <img src={data.selectedFile} alt="" width="100" height="100" className='mb-1' style={{ borderRadius: "10px" }}></img><br></br>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setData({ ...data, selectedFile: base64 })
                  }
                />
              </div></div>
            <div className='col-md-6'>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Video:</label>
                <input type="text" className="form-control" name="video" onChange={onInputChange} value={data.video} />
              </div></div>


          </div>
          <button type="submit" className="btn btn-danger d-block mx-auto col-3" style={{background:"red"}} >Düzenle</button>
        </form>
      </div>
    </>
  )
}

export default Duzenle
