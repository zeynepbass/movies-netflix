import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { fetchSignin } from '../api';
const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        try {

           fetchSignin(form).then((response) => {
                localStorage.setItem('user', JSON.stringify(response.data));
                navigate("/netflix")
            })
                .catch((error) => {


                });


        } catch (error) {

        }
    };
    return (
        <div className='body'>
            <nav>
                <img src="./images/logo.webp" alt="logo" style={{ width: "120px", height: "60px" }} />
            </nav>
            <div className="form-wrapper text-center">
                <h2>Giriş Yap</h2>
                <form action="#" onSubmit={onSubmit} className='mx-auto'>
                    <div className="form-control">
                        <input type="email" className='form-control' id="email" name="email"
                            onChange={onChange} />
                        <label>Email</label>
                    </div>
                    <div className="form-control">
                        <input type="password" className='form-control' id="password" name='password' onChange={onChange} />
                        <label>Parola</label>
                    </div>
                    <button type="submit" >Giriş yap</button>

                    <div className="p-0 m-0 justify-content-between">
                        <Link to="/kayit-ol" >  Kayıt Ol</Link> &nbsp;&nbsp;
                        <Link to="" className='pt-2 '>Sana nasıl yardımcı olabilirim ?</Link>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default Login
