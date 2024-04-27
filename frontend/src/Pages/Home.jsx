
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchMemory } from "../api";

const Home = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    Veri();
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };


    document.addEventListener("click", handleClickOutside);


    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [])
  const Veri = () => {
    fetchMemory().then((response) => setData(response.data))
      .catch((error) => console.log(error))
  }

  const mystyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    paddingRight: "10px"
  };
  const [search, setSearch] = useState("")
  const handleItemClick = () => {
    setShowDropdown(false);
    setSearch("");
  };
  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setShowDropdown(true);
  };
  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      // Handle the Enter key press here, for example:
      console.log('Enter key pressed!');
      // Add your logic for handling the Enter key press
    }
  }; const Navigate = useNavigate();
  const Exıt = () => {

    Navigate("/giris-yap");
    localStorage.removeItem("user");
  }
  return (
    <>
      <div className="p-0 m-0" style={{ position: "relative" }}>
        <nav className="navbar navbar-expand-lg  container-fluid" style={{
          transition: "background 0.2s linear",
          position: "fixed", zIndex: "99999", backgroundColor: "transparent !important",
          color: "#fff"
        }}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/netflix">
              <img src="/images/logo.webp" alt="..." />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li><Link to="/netflix" style={mystyle} >Ana Sayfa</Link></li>
                <li><Link to="/fimler" style={mystyle}>Filmler</Link></li>
                <li><Link to="/diziler" style={mystyle} >Diziler</Link></li>
                <li><Link to="/top10" style={mystyle}>Top10</Link></li>
                <li><Link to="/vizyondakiler" style={mystyle} >Vizyondakiler</Link></li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control mr-sm-2 search"
                  type="search"
                  placeholder="Arama"
                  value={search}
                  aria-label="Search"
                  style={{ border: "none" }}
                  onChange={handleInputChange}
                  onKeyDown={handleEnterPress}
                  required
                />
                <>
                  {data
                    .filter((memory) => {
                      if (search === "") {
                      } else if (
                        memory.baslik
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      ) {
                        return memory;
                      }
                    })
                    .map((memory) => {
                      return (
                        <div className="row">
                          <div
                            className="list"
                            onClick={handleItemClick}
                            style={{
                              position: "absolute",
                              top: "100%",
                              right: "-10%",
                              width: "100%",
                              background: "#141414",

                              borderBottomRightRadius: "5px",
                              borderBottomLeftRadius: "5px",
                              borderTop: "none",
                            }}
                          >
                            <ul>
                              <li className="yzi" style={{ color: "white" }}>
                                {" "}
                                <Link
                                  to={`/film-detay/${memory._id}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  {memory.baslik}{" "}
                                </Link>{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                </>

              </form>
              <div className="row">

                <div className="col-1 p-0 m-0" >
                  <Link
                    to="/favoriler"

                  >   <i className="fas fa-heart pt-2" style={{ color: "#ffffff", float: "right" }}></i>           </Link>{" "}
                </div>
                <div className="col-11 p-0 m-0 ">

                  <li className="nav-item dropdown" style={{ listStyle: "none" }}>
                    <Link className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{
                      width: "200px",
                      background: "transparent",
                      color: "white",
                      border: "none",
                      outline: "none",
                      height: "40px",
                      boxShadow: "none"
                    }}>
                        <img src={user.result.selectedFile}style={{width:"40px", height:"40px",borderRadius:"100px"}} alt="User Avatar" /> &nbsp;
                    </Link>
                    <ul className="dropdown-menu">
                      <li onClick={Exıt} className="dropdown-item">
                        Çıkış Yap</li>
                      <li className="dropdown-item">

                      <Link to={`/profil/${user.result.email}`} style={{ color: "black" }}><b>Profil Güncelle</b></Link>
</li>
 </ul>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="container-fluid view p-0" >
          {props.content && props.content}
        </div>
        <footer>
          <div className="container">
            <hr />
            <div className="footer-bottom">
              <div className="row">
                <div className="col-sm-4">
                </div>
                <div className="col-sm-8">
                  <p> @ 2024 Tüm Haklar Saklıdır.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home
