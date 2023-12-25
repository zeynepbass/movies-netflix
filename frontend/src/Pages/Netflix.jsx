import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { fetchMemory } from '../api';

const Netflix = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([])
  useEffect(() => {
    Veri();

  }, [])
  const Veri =  () => {
    const başlangıçZamanı = performance.now();
    try {
      fetchMemory().then((response)=>{
        setData(response.data);
      })
   
    } catch (hata) {
      console.log(hata);
    } finally {
      const bitişZamanı = performance.now();
      const geçenZaman = bitişZamanı - başlangıçZamanı;
      console.log(`Veri işlevi ${geçenZaman} milisaniyede yürütüldü`);
    }
  };
  const datayeni = data.filter((h) => h.yeni === "yeni");
  const datafilm = data.filter((h) => h.yeni !== "korku");
  const handleFavoriteClick = (itemId) => {
    const clickedItem = data.find(item => item._id === itemId);

    if (user && user.result && user.result._id && clickedItem) {
      const userFavoritesKey = `favoriteMovies_${user.result._id}`;
      const existingData = JSON.parse(localStorage.getItem(userFavoritesKey)) || [];

      // Check if the clicked item ID already exists in favorites
      const existingFavorite = existingData.find(favorite => favorite.data._id === clickedItem._id);

      if (!existingFavorite) {
        // Item does not exist in favorites, add it
        const newData = {
          userId: user.result._id,
          data: clickedItem,
        };

        localStorage.setItem(userFavoritesKey, JSON.stringify([...existingData, newData]));
      } else {
        // Item already exists in favorites, handle as needed
        console.warn('Item already exists in favorites:', existingFavorite);
        // Optionally, you can update the existingFavorite or handle this case differently
      }
    } else {
      console.error('Invalid user object or clickedItem:', user, clickedItem);
    }
  };



  return (
    <>
      {user?.result.firstName ? (
        <>
          <div className="" >
            <section className="netflix-home-video">
              <div className="top"></div>
              <div className="bottom"></div>

              <video src="/video/video.mp4" autoPlay muted loop />

              <div className="content" style={{ left: "0" }}>
                <section className="left">
                  <img src="./images/image2.webp" alt="..." />

                  <div className="d-flex mt-2">
                    <button className="btn btn-light m-2" style={{ background: "red" }} > <i className="bi bi-play-fill" style={{ color: " black", padding: "0%" }}></i> İzle</button>
                  <Link to={`/film-detay/${data._id}`}><button className="btn btn-secondary m-2" style={{ background: "red" }}><i className="bi bi-info-circle p-0"></i> Detay</button></Link>  
                  </div>
                </section>

              </div>
            </section>

          </div>

          <div className="slider-box">
            <div className="container-fluid slider">
              <section className="d-flex justify-content-between margin-right">
                <p className="text-white"> <b>Filmler</b> </p>
                <div className="">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active tab-change-btn" aria-current="true" aria-label="Slide 1"></button>
                  <button className="tab-change-btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button className="tab-change-btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
              </section>
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner" style={{ position: "relative", overflow: "visible" }}>
                  <div className="carousel-item active">
                    <section className="d-flex" >
                      {datafilm.map((movies) => {
                        return (


                          <div className="card" key={movies._id}>

                            <img src={movies.selectedFile} className="card-img-top" alt="..." />
                            <div className="card-body">
                              <section className="d-flex justify-content-between">
                                <div>
                                  <Link to={`/film-detay/${movies._id}`} > <i className="bi bi-play-circle-fill card-icon"  ></i></Link>
                                  <i className="bi bi-plus-circle card-icon"></i>
                                </div>
                                <div>
                                  <i className="bi bi-arrow-down-circle card-icon"></i>
                                </div>
                              </section>
                              <section className="d-flex align-items-center justify-content-between" >
                                <p className="netflix-card-text m-0" style={{ color: "rgb(0, 186, 0)" }}>97% match</p>
                                <span className="m-2 netflix-card-text text-white">{movies.yeni} vizyon</span> <span className="border netflix-card-text p-1 text-white">HD</span>

                              </section>
                              <span className="netflix-card-text text-white">{movies.altbaslik}</span>
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

            <div className="container-fluid  slide2 ">
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

                          <div className="card"  key={newmovies._id}>

                            <img src={newmovies.selectedFile} className="card-img-top" alt="..." style={{ objectFit: "cover" }} />
                            <div className="card-body">
                              <section className="d-flex justify-content-between">
                                <div>
                                  <Link to={`/film-detay/${newmovies._id}`} >  <i className="bi bi-play-circle-fill card-icon"  ></i></Link>
                                  <Link to="/favoriler" onClick={() => handleFavoriteClick(newmovies._id)}><i className="bi bi-plus-circle card-icon"></i></Link>
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

          </div>

        </>
      ) : (<Login />)}

    </>
  )
}

export default Netflix
