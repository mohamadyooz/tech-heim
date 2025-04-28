import React from "react";
import laImage from "/src/assets/img/home/row-5-1.svg";
import chicagoImage from "/src/assets/img/logo.svg";
import nyImage from "/src/assets/img/home/image.jpg";
import ProductCarousel from "../../components/ProductCarousel";
const Home = () => {
    return (
        <div className="container ">
            <section className="row (1)">
                <article className="col-6 desktop-only"
                    style={{
                        paddingLeft: '33px'
                    }}>
                    <h1 style={{ color: '#042352', fontSize: '4.2rem', marginTop: '23px' }}>Tech Heim</h1>
                    <p style={{ color: '#042352', fontSize: '2rem', fontWeight: '500' }}>"Join the
                        <span style={{ color: '#F45E0C' }}> digital revolution "</span>
                    </p><br></br>
                    <button className="rounded-3"
                        style={{
                            marginTop: '100px',
                            border: 'none',
                            boxShadow: 'none',
                            backgroundColor: '#F45E0C',
                            color: '#ffffff',
                            width: '45%',
                            padding: '14px'
                        }}>Explore More</button>
                </article>
                <article className="col-6 desktop-only"
                    style={{
                        position: 'relative',
                        bottom: '23px',
                        right: '60px',
                        width: '50%'
                    }}>
                    <img src="src\assets\img\home\row-1.svg" alt="" />
                </article>

                {/*mobile only*/}

                <article className="col-5 mobile-only ">

                    <h1 style={{ color: '#042352', fontSize: '1.89rem', padding: '0' }}>Tech Heim</h1>
                    <p style={{ color: '#042352', fontSize: '0.71rem', fontWeight: '600' }}>"Join the
                        <span style={{ color: '#F45E0C' }}> digital revolution"</span>
                    </p><br></br>
                    <button className="rounded-2"
                        style={{
                            fontSize: '0.8rem',
                            border: 'none',
                            boxShadow: 'none',
                            backgroundColor: '#F45E0C',
                            color: '#ffffff',
                            width: '75%',
                            padding: '10px',
                            marginTop: '20px'
                        }}>Explore More</button>
                </article>
                <article className="col-7 mobile-only ">
                    <img src="src\assets\img\home\row-1.svg" alt="" style={{
                        width: '150%',
                        float: 'right',
                        position: 'relative',
                        left: '30px',
                        bottom: '17px'
                    }} />
                </article>
            </section>
            <section className="row (2) mb-5">
                <article className="col-2 " style={{
                    padding: '5px',
                    margin: '0',
                    fontSize: '1rem',
                    textAlign: 'center',
                }}>
                    <div className="card "
                        style={{
                            width: '95%',
                            height: '190px',
                            border: 'none'
                        }}>
                        <div className="card-body">
                            <a href="#" className="">
                                <img className="card-img-top" src="src\assets\img\home\row-1.svg" alt="Card image"
                                    style={{
                                        height: '140px',
                                        width: '100%'
                                    }} /></a>
                            <p className="card-title">Accessories</p>
                        </div>
                    </div>
                </article>
                <article className="col-2 " style={{
                    padding: '5px',
                    margin: '0',
                    fontSize: '1rem',
                    textAlign: 'center',
                }}>
                    <div className="card "
                        style={{
                            width: '95%',
                            height: '190px',
                            border: 'none'
                        }}>
                        <div className="card-body">
                            <a href="#" className="">
                                <img className="card-img-top" src="src\assets\img\home\row-1.svg" alt="Card image"
                                    style={{
                                        height: '140px',
                                        width: '100%'
                                    }} /></a>
                            <p className="card-title">Camera</p>
                        </div>
                    </div>
                </article>
                <article className="col-2 " style={{
                    padding: '5px',
                    margin: '0',
                    fontSize: '1rem',
                    textAlign: 'center',
                }}>
                    <div className="card "
                        style={{
                            width: '95%',
                            height: '190px',
                            border: 'none'
                        }}>
                        <div className="card-body">
                            <a href="#" className="">
                                <img className="card-img-top" src="src\assets\img\home\row-1.svg" alt="Card image"
                                    style={{
                                        height: '140px',
                                        width: '100%'
                                    }} /></a>
                            <p className="card-title">Laptop</p>
                        </div>
                    </div>
                </article>
                <article className="col-2 " style={{
                    padding: '5px',
                    margin: '0',
                    fontSize: '1rem',
                    textAlign: 'center',
                }}>
                    <div className="card "
                        style={{
                            width: '95%',
                            height: '190px',
                            border: 'none'
                        }}>
                        <div className="card-body">
                            <a href="#" className="">
                                <img className="card-img-top" src="src\assets\img\home\row-1.svg" alt="Card image"
                                    style={{
                                        height: '140px',
                                        width: '100%'
                                    }} /></a>
                            <p className="card-title">Smart Phone</p>
                        </div>
                    </div>
                </article>
                <article className="col-2 " style={{
                    padding: '5px',
                    margin: '0',
                    fontSize: '1rem',
                    textAlign: 'center',
                }}>
                    <div className="card "
                        style={{
                            width: '95%',
                            height: '190px',
                            border: 'none'
                        }}>
                        <div className="card-body">
                            <a href="#" className="">
                                <img className="card-img-top" src="src\assets\img\home\row-1.svg" alt="Card image"
                                    style={{
                                        height: '140px',
                                        width: '100%'
                                    }} /></a>
                            <p className="card-title">Gaming</p>
                        </div>
                    </div>
                </article>
                <article className="col-2 " style={{
                    padding: '5px',
                    margin: '0',
                    fontSize: '1rem',
                    textAlign: 'center',
                }}>
                    <div className="card "
                        style={{
                            width: '95%',
                            height: '190px',
                            border: 'none'
                        }}>
                        <div className="card-body">
                            <a href="#" className="">
                                <img className="card-img-top" src="src\assets\img\home\row-1.svg" alt="Card image"
                                    style={{
                                        height: '140px',
                                        width: '100%'
                                    }} /></a>
                            <p className="card-title">Smart Watch</p>
                        </div>
                    </div>
                </article>
            </section>
            <section className="row (3) ">
                <article className="col-12 ">
                    <ProductCarousel/>
                </article>
            </section>

            <section className="row (4)">
                <div style={{
                    paddingBottom: '10px',
                    borderBottom: '2px solid #B4B4B4',
                    marginBottom: '10px'
                }}>
                    <h3 className="float-end"
                        style={{
                            width: '250px',

                        }}>New Products</h3>
                    <button className="float-start"
                        style={{
                            backgroundColor: 'inherit',
                            border: 'none',
                            width: '100px',
                            marginTop: '5px'
                        }}>View all <img src="src\assets\img\home\icon\arrow-circle-right.svg" alt="" /></button>
                </div>
                <article className="col-lg-3 col-6">

                    <div className="card" >
                        <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text">Some example text.</p>
                            <a href="#" className="btn btn-primary">See Profile</a>
                        </div>
                    </div>

                </article>
            </section>
        </div>

    )
}

export default Home