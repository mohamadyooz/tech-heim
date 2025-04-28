import React from 'react';

function HeroSection() {
  return (
    <section className="row (1)">
      <article
        className="col-6 desktop-only"
        style={{ paddingLeft: '33px' }}
      >
        <h1 style={{ color: '#042352', fontSize: '4.2rem', marginTop: '23px' }}>
          Tech Heim
        </h1>
        <p style={{ color: '#042352', fontSize: '2rem', fontWeight: '500' }}>
          "Join the
          <span style={{ color: '#F45E0C' }}> digital revolution </span>"
        </p>
        <br></br>
        <button
          className="rounded-3"
          style={{
            marginTop: '100px',
            border: 'none',
            boxShadow: 'none',
            backgroundColor: '#F45E0C',
            color: '#ffffff',
            width: '45%',
            padding: '14px',
          }}
        >
          Explore More
        </button>
      </article>
      <article
        className="col-6 desktop-only"
        style={{
          position: 'relative',
          bottom: '23px',
          right: '60px',
          width: '50%',
        }}
      >
        <img src="src\assets\img\home\row-1.svg" alt="" />
      </article>

      {/*mobile only*/}
      <article className="col-5 mobile-only ">
        <h1 style={{ color: '#042352', fontSize: '1.89rem', padding: '0' }}>
          Tech Heim
        </h1>
        <p style={{ color: '#042352', fontSize: '0.71rem', fontWeight: '600' }}>
          "Join the
          <span style={{ color: '#F45E0C' }}> digital revolution"</span>
        </p>
        <br></br>
        <button
          className="rounded-2"
          style={{
            fontSize: '0.8rem',
            border: 'none',
            boxShadow: 'none',
            backgroundColor: '#F45E0C',
            color: '#ffffff',
            width: '75%',
            padding: '10px',
            marginTop: '20px',
          }}
        >
          Explore More
        </button>
      </article>
      <article className="col-7 mobile-only ">
        <img
          src="src\assets\img\home\row-1.svg"
          alt=""
          style={{
            width: '150%',
            float: 'right',
            position: 'relative',
            left: '30px',
            bottom: '17px',
          }}
        />
      </article>
    </section>
  );
}

export default HeroSection;