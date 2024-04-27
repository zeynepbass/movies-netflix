import React from 'react';
import { Link } from 'react-router-dom';
const Hakkimda = () => {
    return (
        <>
            <header className="showcase">
                <div className="showcase-top">
                    <img src="/images/logo.webp" alt="Netflix Logo" />
                    <Link to="/giris-yap" className="btn btn-rounded pt-2" style={{ backgroundColor: "red" }}>Giriş Yap</Link>

                </div>
                <div className="showcase-content">
                    <h1>Sınırsız film, dizi ve çok daha fazlası</h1>
                    <h3>İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.

                    </h3>
                    <p>İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta adresinizi girmek.</p>

                    <div className='row col-12'>
                        <div className='col-md-8'>   <input type="email" name="email" id="mail" placeholder="Email  adresiniz" /></div>
                        <div className='col-md-4 p-0 m-0'><Link className="btn pt-2" style={{ height: "3rem", background: "red", width: "100%", fontSize: "1.2rem" }}>Başlayın </Link></div>
                    </div>
                </div>
            </header>
            <section className="style-cards">
                <div className="card-0">
                    <img src="/images/2.jpeg" alt="Netflix Mobile" />
                    <div className="desc-0">
                        <h1>Çocuklar için profiller oluşturun.</h1>
                        <h3>Üyeliğinizle birlikte ücretsiz olarak kendileri için hazırlanmış bir alanda çocuklarınızı en sevdikleri karakterlerle maceralara gönderin.</h3>
                    </div>
                </div>
                <div className="card-1">
                    <div className="desc-1">
                        <h1 >TV'nizde keyfini çıkarın.</h1>
                        <h3>Akıllı TV'lerde, PlayStation'da, Xbox'ta, Chromecast'te, Apple TV'de, Blu-ray oynatıcılarda ve daha fazlasında izleyin.
                        </h3>
                    </div>
                    <img src="/images/tv.png" alt="Netflix TV" />
                    <video className="video-1" autoplay="" playsinline="" muted="" loop=""><source src="1.m4v" type="video/mp4" /></video>
                </div>
                <div className="card-2">
                    <img src="/images/3.jpeg" alt="Netflix Mobile" />
                    <div className="desc-2">
                        <h1>Çevrimdışı izlemek için programlarınızı indirin.</h1>
                        <h3>Favorilerinizi kolayca kaydedin ve her zaman izleyecek bir şeyiniz olsun.</h3>
                    </div>
                </div>
                <div className="card-3">
                    <div className="desc-3">
                        <h1>Her yeri izleyin.</h1>
                        <h3>Telefonunuzda, tabletinizde, dizüstü bilgisayarınızda ve TV'nizde sınırsız film ve TV şovu izleyin.</h3>
                    </div>
                    <img src="/images/4.webp" alt="Device-Pile-In" />

                </div>
            </section>
            <section className="lastsec questions container p-auto" style={{ width: "100%" }}>
                <div className='row'
                >
                    <div className='col-md-3'></div>
                    <div className="faq col-md-" >
                        <h1>Sıkça Sorulan Sorular</h1>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item" style={{ width: "100%" }}>
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ background: "none", outline: "none" }}>
                                        <b style={{ fontSize: "20px", color: "white" }}>Netflix Nedir</b>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" >
                                        Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir streaming hizmetidir.
                                        <br></br>
                                        Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler ekleniyor!
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item" style={{ width: "100%" }}>
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ background: "none", outline: "none" }}>
                                        <b style={{ fontSize: "20px", color: "white" }}>Netflix'in maliyeti nedir?</b>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Netflix'i akıllı telefonunuz, tabletiniz, Akıllı TV'niz, dizüstü bilgisayarınız veya yayın cihazınızda sabit bir aylık ücretle izleyin. Aylık plan ücretleri 99,99 TL ile 199,99 TL arasında değişmektedir. Ekstra maliyet yok, sözleşme yok.
                                    </div>
                                </div>


                            </div>
                            <div className="accordion-item" style={{ width: "100%" }}>
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ background: "none", outline: "none" }}>
                                        <b style={{ fontSize: "20px", color: "white" }}>Nerede İzleyebilirim?</b>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        İstediğiniz yerde, istediğiniz zaman izleyin. Bilgisayarınızda netflix.com adresinden veya akıllı TV'ler, akıllı telefonlar, tabletler, medya oynatıcılar ve oyun konsolları dahil Netflix uygulamasını sunan, internet bağlantılı herhangi bir cihazda anında izlemek için Netflix hesabınızla oturum açın.

                                        Favori içeriklerinizi iOS, Android veya Windows 10 uygulamasıyla da indirebilirsiniz. Seyahatteyken ve internet bağlantısı olmadan izlemek için indirilenleri kullanın. Netflix'i her yere beraberinizde götürün. </div>
                                </div>
                            </div>
                        </div>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className='row container p-0 m-0 justify-content-center'>
                            <div className='col-md-6 p-0 m-0'>
                                <input type="email" name="email" className='form-control' id="mail" placeholder="Email adresiniz" style={{ height: "3rem", width: "100%" }} />
                            </div>
                            <div className='col-md-3 p-0 m-0'>
                                <Link to="" className="btn btn-primary pt-2" style={{ height: "3rem", width: "100%", background: "red" }}>Başlayın</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </section>
            <footer className="footer " style={{ width: "100%", borderTop: "8px rgb(69, 69, 69) solid" }}>

                <div className="footer-cols">
                    <p style={{ color: "red" }}>@netflix</p>
                </div>
            </footer>

        </>
    )
}

export default Hakkimda
