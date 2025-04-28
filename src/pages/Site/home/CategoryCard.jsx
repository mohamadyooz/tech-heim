// CategoryCard.js
import React from 'react';

function CategoryCard({ title, imageUrl }) {
  return (
    <article
      className="col-2 "
      style={{
        padding: '5px',
        margin: '0',
        fontSize: '1rem',
        textAlign: 'center',
      }}
    >
      <div
        className="card "
        style={{
          width: '95%',
          height: '190px',
          border: 'none',
        }}
      >
        <div className="card-body">
          <a href="#" className="">
            <img
              className="card-img-top"
              src={imageUrl}
              alt="Card image"
              style={{
                height: '140px',
                width: '100%',
              }}
            />
          </a>
          <p className="card-title">{title}</p>
        </div>
      </div>
    </article>
  );
}

export default CategoryCard;