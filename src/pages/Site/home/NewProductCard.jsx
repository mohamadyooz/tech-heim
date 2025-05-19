import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios'; // axios دیگر در اینجا نیازی نیست، در FavoriteButton استفاده می‌شود
import FavoriteButton from '../../../components/FavoriteButton';

function NewProductCard({ product }) {
  // State برای مدیریت وضعیت hover (باید اینجا بماند چون hover روی خود کارت است)
  const [isHovering, setIsHovering] = useState(false);
  // State ها و هندلرهای مربوط به مورد علاقه بودن و API به FavoriteButton منتقل شده‌اند
  // const [isFavorite, setIsFavorite] = useState(false);
  // const [isSavingFavorite, setIsSavingFavorite] = useState(false);
  // const [saveFavoriteError, setSaveFavoriteError] = useState(null); // این state هم به FavoriteButton منتقل شده است

  // اضافه شدن state و ref برای مدیریت برش متن (باید اینجا بماند)
  const [truncatedName, setTruncatedName] = useState(product.name);
  const nameRef = useRef(null);
  const estimatedCharsPerTwoLines = 50;

  // هندلرهای رویداد برای mouse enter و mouse leave (باید اینجا بماند)
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // هندلر FavoriteClick به FavoriteButton منتقل شده است
  // const handleFavoriteClick = async (event) => { ... };

  // useEffect برای برش متن (باید اینجا بماند)
  useEffect(() => {
    const truncateText = () => {
      const nameElement = nameRef.current;
      if (!nameElement || !product.name) return;

      if (product.name.length > estimatedCharsPerTwoLines) {
        const shortened = product.name.substring(0, estimatedCharsPerTwoLines) + '...';
        setTruncatedName(shortened);
      } else {
        setTruncatedName(product.name);
      }
    };
    truncateText();

  }, [product.name, estimatedCharsPerTwoLines]);

  return (
    <article className="col-lg-3 col-6 mb-4 ">
      <div
        className="card card-NewProoduct border-0"
        style={{ position: 'relative', overflow: 'hidden' }} // نیاز به position: 'relative' برای موقعیت دهی مطلق دکمه در FavoriteButton
        onMouseEnter={handleMouseEnter} // هندلرهای mouse enter و mouse leave اینجا باقی می‌مانند
        onMouseLeave={handleMouseLeave}
      >
        {/* استفاده از کامپوننت FavoriteButton و پاس دادن prop ها */}
        <FavoriteButton product={product} isParentHovering={isHovering} />

        {/* پیام خطا اکنون در FavoriteButton مدیریت و نمایش داده می‌شود */}
        {/* {saveFavoriteError && ( ... )} */}

        {/* --- شروع بخش هایی که پرسیدید حذف شده اند (اینها حذف نشده اند و باید اینجا باشند) --- */}
        {product.discount && <span className="discount-badge-home" >{product.discount}</span>}
        {/* توجه: پیام خطای saveFavoriteError اکنون در FavoriteButton نمایش داده می‌شود */}

        <img
          className="card-img-top px-4"
          style={{ maxHeight: '220px' }}
          src={product.image || 'img_placeholder.png'} // استفاده از image از داده محصول
          alt={product.title || product.name || 'Product Image'} // استفاده از title یا name برای alt
        />
        <div className="card-body px-4 w-100">
          <p className="card-title-product" ref={nameRef}>
            {truncatedName}
          </p>
          <br />
          <br />
          <p className="card-text " style={{ color: 'initial', float: 'left' }}>
            {product.price}
          </p>
          {/* فرض بر این است که ویژگی score نیز در داده محصول وجود دارد */}
          {product.score && (
             <p className="card-text " style={{ color: '#063A88', float: 'right',display:'flex'}}>
              <img src="src\assets\img\home\icon\Star.svg" alt="" style={{marginBottom:'14px'}}/><p style={{marginLeft:'5px',float:'right'}}>{product.score} </p>
            </p>
          )}
        </div>
        {/* --- پایان بخش هایی که پرسیدید حذف شده اند (اینها حذف نشده اند و باید اینجا باشند) --- */}

      </div>
    </article>
  );
}

export default NewProductCard;