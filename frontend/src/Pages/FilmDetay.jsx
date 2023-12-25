import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import { fetchMemory,fetchDetay } from "../api";
const FilmDetay = () => {
    const { id } = useParams();
    const [memoryData, setMemoryData] = useState({});
    const [yorum, setyorum] = useState("");
    const [comments, setyorums] = useState([]);
    const [data, setData] = useState([])
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {

        axios.get("/user/users")
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error));
    }, []); // The empty dependency array ensures that the effect runs only once

    useEffect(() => {
        // Check local storage for email and find the matching user
        const userEmail = JSON.parse(localStorage.getItem('user'));

        if (userEmail) {
            const foundUser = users.find(user => user.email === userEmail.result.email);

            if (foundUser) {
                setSelectedUser(foundUser);
            }
        }
    }, [users]); // Triggered whenever the users state changes
    const fetchData = async () => {

        try {

            const [postData, memoryData] = await Promise.all([
                fetchMemory().then((response) => response.data),
              
                fetchDetay(id).then((response) => response.data),


            ]);


            setData(postData);
            setMemoryData(memoryData);



        } catch (error) {
            console.error('Veri alımında bir hata oluştu:', error);
        }
    };


    const handleyorum = () => {
        axios
            .post(`/post/detay/${id}`, { yorum })
            .then((response) => {
                setyorums([...comments, response.data]);//oncekı yorumları state tuttuk bu kısmı murata sor gerke var mı
                setyorum(""); //TEMİZLEDİK İNPUTLARI
            }).catch(error => {

            })
    };
    useEffect(() => { fetchData() })
    const top10 = data.filter((h) => h.top10 === "top10").slice(0, 4)

    return (
        <>
            <div className="container-fluid pt-5">
                <div className="" style={{ width: "100%" }}>
                    <img
                        src={memoryData.selectedFile}
                        alt=""
                        className="pb-4 opacity"
                        style={{ width: "100%", height: "100%" }}
                    ></img>
                </div>

                <div className="container  " style={{ paddingTop: "5%" }} >
                    <div className="row  ">
                        <div className="col-md-6 pt-4 pl-4" style={{ zIndex: "9999999" }}>
                            {memoryData.selectedFile && (
                                <img
                                    src={memoryData.selectedFile}
                                    alt=""
                                    className=""
                                    style={{ width: "100%", borderRadius: "10%", zIndex: "99999999", display: "block" }}
                                ></img>
                            )}
                        </div>
                        <div className="col-md-6">

                            <div className="card crdhvr p-2" style={{ width: "25rem", height: "auto", transform: "none" }}>
                                {memoryData.top10 ? <p style={{ textAlign: "right", color: "white" }}>TOP10  <i className="fa-solid fa-star p-0 m-0 " style={{ color: "#fcff42", fontSize: "2rem" }}></i></p> : null}

                                <div className="card-body p-2" style={{ display: "block", position: "static" }}>

                                    <h1 className="card-title" style={{ color: "white" }}>

                                        <b>{memoryData.baslik}</b>

                                    </h1>

                                    <p className="card-text " style={{ color: "white" }}>{memoryData.ufakbaslik}</p>
                                    <p className="card-text mt-4" style={{ color: "white" }} >{memoryData.acikla}</p>
                                    <p className="card-text mt-3" style={{ color: "white" }}>
                                        {memoryData.aciklaiki}
                                    </p>

                                    <button
                                        type="button"
                                        className="btn btn-light col-md-6 mt-3 mr-2"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        style={{ backgroundColor: "red", color: "white" }}

                                    >
                                        {" "}
                                        <i
                                            className="fa-solid fa-play "
                                            style={{ color: "white", fontSize: "1.5rem" }}
                                        ></i>
                                        <b> &nbsp;Filmi izle</b>{" "}
                                        &nbsp;
                                        &nbsp;
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-light col-md-5 mt-3 "
                                        style={{ background: "#293133", border: "none", marginLeft: "5px" }}
                                    // onClick={() => addToCart(memoryData)}
                                    >
                                        {" "} <i
                                            className="fa-solid fa-plus"
                                            style={{ color: "white", fontSize: "1.5rem" }}
                                        ></i>   </button>


                                    <ul
                                        style={{
                                            listStyle: "none",
                                            display: "inline-flex",
                                            paddingTop: "40px",
                                        }}
                                    >
                                        <li>
                                            <Link to="/favoriler">  <i
                                                className="fa-solid fa-heart"
                                                // onClick={() => likePost(memoryData._id)}
                                                style={{
                                                    fontSize: "1.7rem",
                                                    marginRight: "auto",
                                                    color: "red",
                                                }}
                                            >

                                            </i></Link>
                                        </li>{" "}
                                        &nbsp;&nbsp; &nbsp;&nbsp;
                                        <li>
                                            <i
                                                className="fa-regular fa-paper-plane"
                                                style={{ fontSize: "1.7rem", color: "white" }}
                                            ></i>
                                        </li>{" "}
                                        &nbsp;&nbsp; &nbsp;&nbsp;
                                        <li>
                                            <i
                                                className="fa-solid fa-eye p-0"
                                                style={{ fontSize: "1.7rem", color: "white" }}
                                            ></i>
                                            <span style={{ fontSize: "20px", color: "white" }}>{memoryData.goruntuCount}{" "}</span>

                                        </li>


                                    </ul>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                {/* ... your modal JSX ... */}
            </div>
            <div className="container">
                <div className="d-flex row">
                    <div className="accordion-item flex-fill col-md-5">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <h4 style={{ color: "white" }}>Top10</h4>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className=" accordion-collapse collapse show">
                            <div className="accordion-body">
                                <div className="row">
                                    {top10.map((movies) => {
                                        return (


                                            <div className="card detay col-3 " key={movies._id} style={{ border: "none" }}>
                                                <Link to={`/film-detay/${movies._id}`} >
                                                    <img src={movies.selectedFile} className="card-img-top " alt="..." /></Link>



                                            </div>

                                        )

                                    })}
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="accordion-item flex-fill col-md-7 " style={{ height: "auto", overflow: "hidden", }}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <h4 style={{ color: memoryData.renk }}>Yorumlar</h4>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className=" accordion-collapse collapse">
                            <div className="accordion-body">
                                <div className="container col-8p-0">
                                    {memoryData.comments && memoryData.comments.length > 0 ? (
                                        <div className="pl-4" style={{ height: "150px", overflow: "auto" }}>
                                            {memoryData.comments.map((c) => (
                                                <div key={c._id} style={{ color: "white" }}>


                                                    <img src={selectedUser.selectedFile} alt="" style={{ width: "30px", height: "30px", borderRadius: "100px" }} /> : {c}



                                                </div>

                                            ))}
                                        </div>
                                    ) : (
                                        <h5>Yorum Bulunamadı</h5>
                                    )}

                                    <form className="ui form" onSubmit={(e) => {
                                        e.preventDefault();
                                        handleyorum();
                                    }}>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                name="yorum"

                                                value={yorum}
                                                onChange={(e) => setyorum(e.target.value)}
                                                className="form-control mt-2 comment"
                                                style={{ color: "white" }}
                                            />
                                            <div className="input-group-append">
                                                <button
                                                    className="btn  mt-2 ml-1"
                                                    type="submit"
                                                    style={{ backgroundColor: memoryData.renk, height: "40px" }}
                                                >
                                                    Yorum yap
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default FilmDetay;
