import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import {fetchUsers} from "../api/index";
const Users = () => {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUser();
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  })
  const fetchUser =  () => {
    try {
       fetchUsers().then((response)=>{
        setUser(response.data);
      })
     
    } catch (error) {
      console.error('Veri alımında bir hata oluştu:', error);
    }
  };
  const Sil = async (email) => {
    try {
      await axios.delete(`/user/users/${email}`);
      Swal.fire('Başarı', 'Silme işlemi başarıyla gerçekleştirildi.', 'success');

    } catch (error) {
      console.error('Silme işlemi sırasında bir hata oluştu:', error);
      Swal.fire('Hata', 'Silme işlemi sırasında bir hata oluştu.', 'error');

    }
  };
  return (
    <>
      <div className="table-data">
        <div className="order" style={{ borderRadius: "20px" }}>
          <div className="head">
            <h3 style={{ color: "black" }}>Kullanıcılar</h3>
            <i className="fas fa-search" style={{ color: "red" }}></i>
          </div>
          <table >
            <thead>
              <tr>
                <th>ID</th>
                <th>Kullanıcı Adı</th>
                <th>Kullanıcı Soyadı</th>
                <th>Kullanıcı Şifre</th>
                <th>Email</th>
                <th>Resim</th>
                <th>İşlem</th>
              </tr>
            </thead>
            {loading ? (
              <p className='p-2'><b>Yükleniyor...</b></p>
            ) : (
              <tbody>
                {user.map((veri, index) => (
                  <tr key={index}>
                    <td>{veri._id.slice(0, 2)}</td>
                    <td>{veri.firstName}</td>
                    <td>{veri.lastName}</td>
                    <td>{veri.password}</td>
                    <td>{veri.email}</td>
                    <td>
                      <img src={veri.selectedFile} alt=""></img>
                    </td>
                    <td>
                      <ul className='ul' style={{ listStyle: "none", display: "flex" }}>
                        <ul className='ul' style={{ listStyle: "none", display: "flex" }}>
                          <li>
                            <i
                              className="fa-solid fa-trash"
                              style={{ color: "red", cursor: "pointer" }}
                              onClick={() => { Sil(veri.email) }}
                            ></i>
                          </li>
                          <Link to={`/kullanici-duzenle/${veri.email}`}><li><i className="fa-solid fa-pencil" style={{ color: "red" }}></i></li></Link>
                        </ul>
                        <li></li>
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  )
}

export default Users
