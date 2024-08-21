import React,{ useEffect, useState }  from 'react';
import { fetchMemory } from '../api';
const Filmler = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    Veri();

  },)
  const Veri = () => {
    fetchMemory().then((response) => setData(response.data))
      .catch((error) => console.log(error))
  }
  const datayeni = data.filter((h) => h.yeni === "yeni").slice(0, 12);
  const datafilm = data.filter((h) => h.top10 === "top10").slice(0, 12);
  return (
    <>


      <div className="container-fluid  " style={{ paddingTop: "10%" }}>
        <section className="d-flex justify-content-between margin-right margin-title">
          <p className="text-white"> <b>Vizyondakiler</b> </p>
          <div className="">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active tab-change-btn" aria-current="true" aria-label="Slide 1"></button>
            <button className="tab-change-btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button className="tab-change-btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        </section>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-inner" style={{ position: " relative", overflow: "visible" }}>
            <div className="carousel-item active">
              <section className="d-flex" >
                {datayeni.map((newmovies) => {
                  return (


                    <div className="col-md-3 pt-md-2"  >

                      <img src={newmovies.selectedFile} className="card-img-top p-3" alt="..." style={{ objectFit: "cover" }} />
                      <div className="card-body">
                        <section className="d-flex justify-content-between">
                          <div>
                            <i className="bi bi-play-circle-fill card-icon"  ></i>
                            <i className="bi bi-plus-circle card-icon"></i>
                          </div>
                          <div>
                            <i className="bi bi-arrow-down-circle card-icon"></i>
                          </div>
                        </section>
                        <section className="d-flex align-items-center justify-content-between" >
                          <p className="netflix-card-text m-0" style={{ color: "rgb(0, 186, 0)" }}>97% match</p>
                          <span className="m-2 netflix-card-text text-white">{newmovies.yeni} vizyon</span> <span className="border netflix-card-text p-1 text-white">HD</span>

                        </section>
                        <span className="netflix-card-text text-white">{newmovies.altbaslik}</span>
                      </div>
                    </div>


                  )
                })}
              </section>
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid  ">
        <section className="d-flex justify-content-between margin-right margin-title2">
          <p className="text-white"> <b>Diziler</b> </p>
          <div className="">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active tab-change-btn" aria-current="true" aria-label="Slide 1"></button>
            <button className="tab-change-btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button className="tab-change-btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        </section>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-inner" style={{ position: " relative", overflow: "visible" }}>
            <div className="carousel-item active">
              <section className="d-flex " >
                {datafilm.map((newhorror) => {
                  return (

                    <div className="card" >
                      <img src={newhorror.selectedFile} className="card-img-top" alt="..." style={{ objectFit: "cover" }} />
                      <div className="card-body">
                        <section className="d-flex justify-content-between">
                          <div>
                            <i className="bi bi-play-circle-fill card-icon"  ></i>
                            <i className="bi bi-plus-circle card-icon"></i>
                          </div>
                          <div>
                            <i className="bi bi-arrow-down-circle card-icon"></i>
                          </div>
                        </section>
                        <section className="d-flex align-items-center justify-content-between" >
                          <p className="netflix-card-text m-0" style={{ color: "rgb(0, 186, 0)" }}>97% match</p>
                          <span className="m-2 netflix-card-text text-white">{newhorror.yeni} vizyon</span> <span className="border netflix-card-text p-1 text-white">HD</span>

                        </section>
                        <span className="netflix-card-text text-white">{newhorror.altbaslik}</span>
                      </div>
                    </div>


                  )
                })}
              </section>
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>

  )
}

export default Filmler
