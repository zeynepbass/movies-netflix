import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Pagination from './Pagination';
import { fetchMemory, fetchUsers, fetchDelete } from '../api';
import "./style.css";
const Dashboard = () => {
  const [data, setData] = useState([])
  const [user, setUser] = useState([])
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [postsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchData = async () => {
    try {
      const [postData, userData] = await Promise.all([
        fetchMemory().then((response) => response.data),
        fetchUsers().then((response) => response.data)



      ]);
      setData(postData);
      setUser(userData);
    } catch (error) {
      console.error('Veri alımında bir hata oluştu:', error);
    }
  };
  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  })
  const Delete = (id) => {
    try {
      fetchDelete(id);
      Swal.fire('Başarı', 'Silme işlemi başarıyla gerçekleştirildi.', 'success');
      // Silme işlemi tamamlandığında başarılı bir mesaj göster
    } catch (error) {
      console.error('Silme işlemi sırasında bir hata oluştu:', error);
      Swal.fire('Hata', 'Silme işlemi sırasında bir hata oluştu.', 'error');
      // Silme işlemi sırasında bir hata oluştuysa, hata mesajını göster
    }
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const datayeni = data.filter((h) => h.yeni === "yeni");
  return (
    <>
      <div className="box-info">
        <li>
          <div className='p-4' style={{ background: "wheat", borderRadius: "20px" }}> <img src="/images/pleased.webp" width="50" height="50" alt="" /> </div>
          <span className="text">
            <h3>{user.length}</h3>
            <p>Kullanıcılar</p>
          </span>
        </li>
        <li>
          <div className='p-4' style={{ background: " red", borderRadius: "20px" }}> <img src="/images/watching-a-movie.png" width="50" height="50" alt="" /></div>
          <span className="text">
            <h3>{data.length}</h3>
            <p>Filmler</p>
          </span>
        </li>
        <li>
          <div className='p-4' style={{ background: "orange", borderRadius: "20px" }}>  <img src="/images/popcorn.webp" width="50" height="50" alt="" /></div>
          <span className="text">
            <h3>
              {datayeni && datayeni.length > 0
                ? `Uzunluk: ${datayeni.length}`
                : <p>Veri yok veya uzunluk alınamıyor</p>
              }
            </h3>
            <p>Yeni</p>
          </span>
        </li>
      </div>
      <div className="table-data">
        <div className="order" style={{ backgroundColor: "white" }}>
          <div className="head">
            <h3>Filmler</h3>
            <form action="#">
              <div className="search-box d-flex">
                <input type="text" className="input-search p-1" placeholder=" Arama..." value={search}
                  aria-label="Search"

                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  style={{ outline: "none", border: "none", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", background: "var(--grey)", height: "40px" }} />
                <button className="btn-search p-0 m-0" style={{
                  border: "none",
                  width: "40px",
                  height: "40px"
                }}><i className="fas fa-search p-0"></i></button>
              </div>
            </form>
            <Link to="/ekle"><i className="fas fa-plus" style={{ color: "red" }}></i></Link>
          </div>
          <table>
            <thead>
              <tr>
                <th >ID</th>
                <th >Yeni </th>
                <th >Renk</th>
                <th >Top10</th>
                <th >Film</th>
                <th >Carousel</th>
                <th >Başlık</th>
                <th >Alt Başlık</th>
                <th >Açıklama</th>
                <th >Alt Açıklama</th>
                <th >Resim</th>
                <th style={{ textAlign: "center" }}>
                  Video
                </th>
                <th>İşlem</th>
              </tr>
            </thead>
            {loading ? (<p className='p-2'><b>Yükleniyor...</b></p>) : (
              <tbody>
                {currentPosts
                  .filter((memory) => {
                    if (search === "") {
                      return true; // Eğer arama yoksa, tüm verileri göster
                    } else if (
                      memory.baslik.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return true; // Eğer arama kelimesi başlık içinde bulunuyorsa, o veriyi göster
                    } else {
                      return false; // Eğer arama kelimesi başlık içinde bulunmuyorsa, o veriyi filtrele
                    }
                  })
                  .map((veri, index) => {
                    return (
                      <>
                        <tr key={index}>
                          <td>
                            {veri._id.slice(0, 2)}
                          </td>
                          <td>
                            {veri.yeni} </td>
                          <td>{veri.renk}</td>
                          <td>{veri.top10}</td>
                          <td>{veri.film}</td>
                          <td>{veri.carousel}</td>
                          <td>{veri.baslik}</td>
                          <td>{veri.ufakbaslik.slice(0, 4) + "..."}</td>
                          <td>{veri.acikla.slice(0, 4) + "..."}</td>
                          <td>{veri.aciklaiki.slice(0, 12) + "..."}</td>
                          <td><img src={veri.selectedFile} alt="" /></td>
                          <td>{veri.video}</td>
                          <td>
                            <ul className='ul' style={{ listStyle: "none", display: "flex" }}>
                              <li><i className="fa-solid fa-trash" style={{ color: "red", cursor: "pointer" }} onClick={() => { Delete(veri._id) }}></i></li>
                              <Link to={`/duzenle/${veri._id}`}><li><i className="fa-solid fa-pencil" style={{ color: "red" }}></i></li></Link>
                              <li></li>
                            </ul>
                          </td>
                        </tr>
                      </>
                    )
                  })}
              </tbody>)}
          </table>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  )
}

export default Dashboard
