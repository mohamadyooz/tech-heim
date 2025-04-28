import React, { useState, useEffect, useRef } from 'react';

function NewProductCard({ product }) {
  
      const [truncatedName, setTruncatedName] = useState(product.name);    // اضافه شدن state و ref برای مدیریت برش متن
      const nameRef = useRef(null);
      const estimatedCharsPerTwoLines = 50;    // تعداد تقریبی کاراکترها که در دو خط جای می گیرند (این عدد باید تنظیم شود)
  
      useEffect(() => {
          const truncateText = () => {
              const nameElement = nameRef.current;
              if (!nameElement || !product.name) return;
  
              // منطق ساده برش بر اساس تعداد کاراکتر
              if (product.name.length > estimatedCharsPerTwoLines) {
                  const shortened = product.name.substring(0, estimatedCharsPerTwoLines) + '...';
                  setTruncatedName(shortened);
              }
              else {
                  setTruncatedName(product.name);
              }
          };
          truncateText();
  
      }, [product.name, estimatedCharsPerTwoLines ]); // وابستگی ها: نام محصول و تعداد تقریبی کاراکتر
  return (
    <article className="col-lg-3 col-6 mb-4 "> {/* اضافه کردن mb-4 برای فاصله بین ردیف‌ها */}
      <div className="card card-NewProoduct border-0" >
        <img
          className="card-img-top px-4" style={{ maxHeight: '220px'}}
          src={product.image || 'img_placeholder.png'} // استفاده از imageUrl از داده محصول
          alt={product.title || 'Product Image'}
        />
        <div className="card-body px-4 w-100">
          <p className="card-title-product" ref={nameRef}>{truncatedName}</p>
          <br/><br/>
          <p className="card-text " style={{color:'initial',float:'left'}}>{product.price}</p>
          <p className="card-text " style={{color:'initial', float:'right'}}>{product.price}</p>
        </div>
      </div>
    </article>
  );
}

export default NewProductCard;