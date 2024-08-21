import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Home from "./Pages/Home.jsx";
import Panel from "./Pages/Panel.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Ekle from "./Pages/Ekle.jsx";
import Duzenle from "./Pages/Duzenle.jsx";
import Kullanici from "./Pages/Users.jsx";
import Veri from "./Pages/Veri.jsx";
import FilmDetay from "./Pages/FilmDetay.jsx";
import Filmler from "./Pages/Filmler.jsx";
import Netflix from "./Pages/Netflix.jsx";
import Top10 from "./Pages/Top10.jsx";
import Yeni from "./Pages/Yeni.jsx";
import Hakkimda from "./Pages/Hakkimda.jsx";
import Favoriler from "./Pages/Favoriler.jsx";
import Profil from "./Pages/Hesap.jsx";
import Error from "./Pages/Error.jsx";
import KullaniciDuzenle from "./Pages/Kullanici.jsx";
import ProfilDuzenle from "./Pages/ProfılGuncelle.jsx";
import Admin from "./Pages/Admin.jsx";
import "./Pages/style.css";
import "./Pages/responsive.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/kayit-ol" element={<Register />}></Route>
        <Route path="/giris-yap" element={<Login />}></Route>
        <Route path="/profil/:email" element={<ProfilDuzenle />}></Route>
       
        <Route path="/" element={<Hakkimda />}></Route>
        <Route path="/veriler" element={<Panel content={<Veri />} />}></Route>

        <Route
          path="/panel"
          element={<Panel content={<Dashboard />} />}
        ></Route>
        <Route path="/ekle" element={<Panel content={<Ekle />} />}></Route>
        <Route
          path="/duzenle/:id"
          element={<Panel content={<Duzenle />} />}
        ></Route>
        <Route
          path="/kullanici-duzenle/:email"
          element={<Panel content={<KullaniciDuzenle />} />}
        ></Route>
        <Route
          path="/kullanicilar"
          element={<Panel content={<Kullanici />} />}
        ></Route>

        <Route path="/netflix" element={<Home content={<Netflix />} />}></Route>
        <Route path="/hesap" element={<Home content={<Profil />} />}></Route>
        <Route path="/filmler" element={<Home content={<Filmler />} />}></Route>
        <Route path="/top10" element={<Home content={<Top10 />} />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route
          path="/favoriler"
          element={<Home content={<Favoriler />} />}
        ></Route>
        <Route
          path="/vizyondakiler"
          element={<Home content={<Yeni />} />}
        ></Route>
        <Route
          path="/film-detay/:id"
          element={<Home content={<FilmDetay />} />}
        ></Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
