import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import "../Pages/landing.css";
const Panel = (props) => {
  const manager = JSON.parse(localStorage.getItem("manager"));
  const Navigate = useNavigate();
  const Cikisyap = () => {
    Navigate("/admin")
    localStorage.removeItem("manager")

  }
  return (
    <>
      {manager?.email ? (
        <>
          <section className="sidebar " >
            <Link to="" className="logo">
              <i className="fab fa-slack"></i>
              <span className="text">Admin Panel</span>
            </Link>
            <ul className="side-menu top">
              <li>
                <Link to="/veriler" className="nav-link" >
                  <i className="fas fa-ticket-alt"></i>
                  <span className="text">Veriler</span>
                </Link>
              </li>
              <li>
                <Link to="/panel" className="nav-link" >
                  <i className="fas fa-ticket-alt"></i>
                  <span className="text">Filmler</span>
                </Link>
              </li>
              <li>
                <Link to="/diziler" className="nav-link" activeClassName="active">
                  <i className="fa fa-film" aria-hidden="true"></i>
                  <span className="text">Diziler</span>
                </Link>
              </li>
              <li>
                <Link to="/yorumlar" className="nav-link" activeClassName="active">
                  <i className="fas fa-comments"></i>
                  <span className="text">Yorumlar</span>
                </Link>
              </li>
              <li>
                <Link to="/kullanicilar" className="nav-link" activeClassName="active">
                  <i className="far fa-user-circle"></i>
                  <span className="text">Kullanıcılar</span>
                </Link>
              </li>

            </ul>
            <ul>
              <li onClick={Cikisyap}>
                <i className="fas fa-right-from-bracket " style={{ color: "black" }}></i> &nbsp;
                <span className="text" style={{ color: "black", cursor: "pointer" }}>Çıkış Yap</span>
              </li>
            </ul>
          </section>
          <section className="content">
            <nav>
              <form action="#">
                <div className="form-input">
                  <input type="search" placeholder="arama..." />
                  <button className="search-btn mb-4">
                    <i className="fas fa-search search-icon "></i>
                  </button>
                </div>
              </form>
            </nav>
          </section>
          <section className="content">
            <main>
              <div className="head-title">
                <div className="left">
                  <h1>NETFLİX</h1>
                  <ul className="breadcrumb">
                    <li>
                      <Link to="">Ana Sayfa</Link>
                    </li>
                    <i className="fas fa-chevron-right"></i>
                    <li>
                      <Link to="" className="active">Ana Sayfa</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {props.content && props.content}
            </main>
          </section>
        </>
      ) : (
        <>
          <h1 className="pt-4" style={{ textAlign: "center" }}>
            İzinsiz Giriş
          </h1>
        </>
      )
      }
    </>
  );
};

export default Panel
