import React from 'react';

function CategoryCard({ title, imageUrl }) {
  return (
    <article
      className="col-3 col-lg-2"
      style={{
        padding:'0',
        margin: '0',
        textAlign: 'center',
      }}
    >
      <div
        className="card py-4"
        style={{
          width: '110px',
          border: 'none',
          padding:'0'
        }}
      >
        <div className="" >
          <a href="#" className="">
            <img
              className="card-img-top"
              src={imageUrl}
              alt={`تصویر ${title}`}
              style={{
                width: '100%',
                objectFit: 'cover',
                height:'80px'
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