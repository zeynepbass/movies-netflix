import React,{ useEffect, useState } from 'react';
import { fetchMemory } from '../api';
const Top10 = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    Veri();
  })
  const Veri = () => {
    fetchMemory().then((response) => setData(response.data))
      .catch((error) => console.log(error))
  }
  const top10 = data.filter((h) => h.top10 === "top10").slice(0, 12);
  return (
    <>
      <div className="container-fluid  " style={{ paddingTop: "10%" }}>
        <p className="text-white"> <b>Top10</b> </p>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="container-fluid" style={{ position: " relative", overflow: "visible" }}>
            <div className="row">
              {top10.map((newmovies) => {
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
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Top10
