import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserDuzenle, fetchUserDuzGetır } from '../api';
const Kullanici = () => {
    const { email } = useParams();
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        selectedFile: "",
    })

    useEffect(() => {
        fetchUserDuzenle(email)
            .then((response) => { setData(response.data); console.log(response.data) })
            .catch({})
    }, [email])
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const Navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = fetchUserDuzGetır(email, data)
            // localStorage.setItem('token', response.data.token);
            Navigate("/kullanicilar")

            console.log('Registration successful:', response.data);
        } catch (error) {

            console.error('Registration failed:', error.message);
        }
    };

    return (
        <>
            <div className="container mt-5">
                <form style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', color: 'black', maxWidth: "none" }} className='col-12' onSubmit={onSubmit}>
                    <h4 className='text-center' style={{ color: "black" }}>Kullanıcı Düzenle</h4>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="form-group">

                                <input
                                    className="form-control"
                                    type="text"
                                    name="firstName"
                                    onChange={onChange}
                                    value={data.firstName}

                                />
                            </div></div>
                        <div className='col-md-6'>       <div className="form-group">

                            <input
                                className="form-control"

                                type="text"
                                name="lastName"
                                onChange={onChange}
                                value={data.lastName}

                            />
                        </div></div>

                        <div className='col-md-6'>     <div className="form-group">
                            <input type="email" className='form-control' name="email" onChange={onChange} value={data.email} />
                        </div></div>










                        <div className='col-md-3'>
                            <div className="form-group p-3" style={{ border: "1px solid red", borderRadius: "10px" }}>
                                <label htmlFor="exampleInputPassword1">Resim:</label><br></br>
                                <img src={data.selectedFile} alt="" width="100" height="100" className='mb-1' style={{ borderRadius: "10px" }}></img><br></br>
                                <FileBase
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) =>
                                        setData({ ...data, selectedFile: base64 })
                                    }
                                />
                            </div>
                        </div>



                    </div>
                    <button type="submit" className="btn btn-danger d-block mx-auto col-3" style={{background:"red"}} >Düzenle</button>
                </form >
            </div >
        </>
    )
}

export default Kullanici
