import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUserDuzenle, fetchUserDuzGetır } from "../api";
import { Link } from "react-router-dom";
const Kullanici = () => {

  const { email } = useParams();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",

  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUserDuzGetır(email);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        // Handle the error, you may want to set an error state or log it.
      }
    };
  
    fetchData();
  }, [email]);
  
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const Navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = fetchUserDuzenle(email, data);
      // localStorage.setItem('token', response.data.token);
      Navigate("/kullanicilar");

      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };


  return (
    <>
      <div className='body'>
            <nav>
                <img src="./images/logo.webp" alt="logo" style={{ width: "120px", height: "60px" }} />
            </nav>
            <div className="form-wrapper " >
                <h2 >Kayıt Ol</h2>
                <form action="#" onSubmit={onSubmit} className="mx-auto">
                    <div className="form-control">
                    <input
                  className="form-control"
                  type="text"
                  name="firstName"
                  onChange={onChange}
                  value={data.firstName}
                />
                        <label>Ad</label>
                    </div>
                    <div className='form-control
                '> <input
                className="form-control"
                type="text"
                name="lastName"
                onChange={onChange}
                value={data.lastName}
              />
                        <label>Soyad</label>
                    </div>
                    <div className="form-control">
                        <input type="email" className='form-control' name="email" onChange={onChange}      value={data.email} />
                        <label>Email</label>
                    </div>

                    <div className="form-control">
                    <input
                  className="form-control"
                  type="text"
                  name="password"
                  onChange={onChange}
                  value={data.password}
                />
                        <label>Parola</label>
                    </div>
                    <div
                className="form-group p-3"
                style={{ border: "1px solid red", borderRadius: "10px" }}
              >
                <label htmlFor="exampleInputPassword1">Resim:</label>
                <br></br>
                <img
                  src={data.selectedFile}
                  alt=""
                  width="100"
                  height="100"
                  className="mb-1"
                  style={{ borderRadius: "10px" }}
                ></img>
                <br></br>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setData({ ...data, selectedFile: base64 })
                  }
                />
              </div>
                   
                    <button type="submit">Kayıt Ol</button>
                    <Link to="/giris-yap"> Giris Yap</Link>
                    <div className="form-help">
                        <div className="remember-me ">
                        </div>
                        <Link to="">Sana nasıl yardımcı olabilirim ?</Link>
                    </div>
                </form>

            </div >
        </div >
     
    </>
  );
};

export default Kullanici;
