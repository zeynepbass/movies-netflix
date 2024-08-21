import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchRegister } from '../api';
const Register = () => {
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit =  (e) => {
        e.preventDefault();
        try {


     fetchRegister(formData)

       
            Navigate("/giris-yap");
        } catch (error) {
            console.error('Registration failed:', error.message);
        }
    };

    return (
        <div className='body '>
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


                        />
                        <label>Ad</label>
                    </div>
                    <div className='form-control
                '>
                        <input
                            className="form-control"

                            type="text"
                            name="lastName"
                            onChange={onChange}

                        />
                        <label>Soyad</label>
                    </div>
                    <div className="form-control">
                        <input type="email" className='form-control' name="email" onChange={onChange} />
                        <label>Email</label>
                    </div>

                    <div className="form-control">
                        <input type="password" className='form-control' name="password" onChange={onChange} />
                        <label>Parola</label>
                    </div>

                    <div className="form-control">
                        <input
                            className="form-control"
                            type="password"
                            name="confirmPassword"
                            onChange={onChange}

                        />
                        <label>Parola Tekrar</label>
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
    )
}

export default Register
