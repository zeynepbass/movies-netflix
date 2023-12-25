
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Favoriler = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const fetchFavoriteMovies = () => {
    if (user) {
      const userFavoritesKey = `favoriteMovies_${user.result._id}`;
      const storedFavorites = JSON.parse(localStorage.getItem(userFavoritesKey)) || [];
      setFavoriteMovies(storedFavorites);
    }
  };

  useEffect(() => {

    fetchFavoriteMovies(); // Directly invoke the function

  }, []); // Specify user as a dependency

  const Delete = (id) => {
    if (user) {
      const userFavoritesKey = `favoriteMovies_${user.result._id}`;
      const updatedFavorites = favoriteMovies.filter(favorite => favorite.data._id !== id);
      localStorage.setItem(userFavoritesKey, JSON.stringify(updatedFavorites));
      setFavoriteMovies(updatedFavorites);
    }
  };
  return (
    <div className="container p-0" style={{ transform: "translateY(50%)" }}>
      <div className="row ">
        {favoriteMovies === "" ? (
          <h5 style={{ textTransform: "capitalize", color: "white" }}>
            Favorilerin de film yok,{" "}
            <b style={{ textTransform: "capitalize", color: "red" }}>
              {user.firstName}
            </b>{" "}
          </h5>
        ) : (
          <>
            {favoriteMovies.map((newmovies, index) => (
              <div className="col-md-3 mb-4 p-0" key={index}>
                <div className="card p-0" style={{ transform: "none" }}>
                  <i className="fas fa-window-close p-0" style={{ position: "absolute", color: "white", fontSize: "1.5rem", cursor: "pointer" }} onClick={() => Delete(newmovies.data._id)}></i>
                  <img src={newmovies.data.selectedFile} className="card-img-top" alt="..." style={{ objectFit: "cover" }} />

                  <div className="card-body">
                    <section className="d-flex justify-content-between">
                      <div>
                        <Link to={`/film-detay/${newmovies.data._id}`}><i className="bi bi-play-circle-fill card-icon"></i></Link>

                      </div>

                    </section>
                    <section className="d-flex align-items-center justify-content-between">
                      <p className="netflix-card-text m-0" style={{ color: "rgb(0, 186, 0)" }}>97% match</p>
                      <span className="m-2 netflix-card-text text-white">{newmovies.data.yeni} vizyon</span> <span className="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span className="netflix-card-text text-white">{newmovies.data.altbaslik}</span>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>


  );
};

export default Favoriler;
