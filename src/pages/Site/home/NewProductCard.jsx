import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
function NewProductCard({ product }) {
  const [isHovering, setIsHovering] = useState(false);    // State برای مدیریت وضعیت hover
  const [isFavorite, setIsFavorite] = useState(false);    // State برای مدیریت وضعیت مورد علاقه بودن
  const [isSavingFavorite, setIsSavingFavorite] = useState(false);    // State جدید برای مدیریت وضعیت بارگذاری API (اختیاری، برای نمایش لودینگ روی دکمه)
  const [saveFavoriteError, setSaveFavoriteError] = useState(null);    // State جدید برای مدیریت خطای API (اختیاری، برای نمایش پیام خطا)

  // هندلرهای رویداد برای mouse enter و mouse leave
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };


  // هندلر رویداد برای کلیک روی دکمه مورد علاقه (آسنکرون شده)
  const handleFavoriteClick = async (event) => {
    event.stopPropagation();// جلوگیری از انتشار رویداد کلیک به عناصر والد (مثل خود کارت)

    //کاری نکن اگر در حال حاضر در حال ارسال درخواست هستیم 
    if (isSavingFavorite) {
      return;
    }

    setIsSavingFavorite(true);// شروع وضعیت بارگذاری
    setSaveFavoriteError(null);// پاک کردن خطای قبلی

    const endpoint = 'http://localhost:3001/products';// آدرس API شما برای افزودن/حذف مورد علاقه
    const method = isFavorite ? 'delete' : 'post'// اگر مورد علاقه است، حذف کن، در غیر این صورت اضافه کن

    try {
      const response = await axios({// استفاده از axios برای ارسال درخواست
        method: method,
        url: endpoint,
        data: { productId: product.id },// ارسال ID محصول در بدنه درخواست
      });
      // فرض کنید API در صورت موفقیت، وضعیت جدید مورد علاقه بودن را برمی‌گرداند
      // یا فقط کد موفقیت (مثلاً 200 یا 201) را برمی‌گرداند.
      // در اینجا ما فقط فرض می‌کنیم که درخواست موفقیت آمیز بوده است.

      setIsFavorite(!isFavorite);// تغییر وضعیت مورد علاقه بودن در UI
      console.log(`Favorite status updated for product ${product.id}`);
    }
    catch (error) {
      setSaveFavoriteError(error);
      console.error(`Error saving favorite status for product ${product.id}:`, error);
      // می‌توانید در اینجا پیام خطا را به کاربر نمایش دهید
    }
    finally {
      setIsSavingFavorite(false);// پایان وضعیت بارگذاری
    }
  };

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

  }, [product.name, estimatedCharsPerTwoLines]); // وابستگی ها: نام محصول و تعداد تقریبی کاراکتر
  return (
    <article className="col-lg-3 col-6 mb-4 "> {/* اضافه کردن mb-4 برای فاصله بین ردیف‌ها */}
      <div className="card card-NewProoduct border-0"
        style={{ position: 'relative', overflow: 'hidden' }} // اضافه کردن استایل برای موقعیت دهی دکمه مورد علاقه
        onMouseEnter={handleMouseEnter} // اضافه کردن هندلرهای mouse enter و mouse leave
        onMouseLeave={handleMouseLeave}
      >
        {/* دکمه مورد علاقه - نمایش داده می‌شود وقتی isHovering درست است */}
        {isHovering&&(
          <button className="favorite-button"
            onClick={handleFavoriteClick}
            disabled={isSavingFavorite} // غیرفعال کردن دکمه هنگام ارسال درخواست
          > 

        {/* نمایش لودینگ یا آیکون قلب */}
        {!isSavingFavorite &&(<svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="blue" // این fill روی خود svg است، رنگ شکل را path تعیین می‌کند
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11 19.6501C10.69 19.6501 10.39 19.6101 10.14 19.5201C6.32 18.2101 0.25 13.5601 0.25 6.6901C0.25 3.1901 3.08 0.350098 6.56 0.350098C8.25 0.350098 9.83 1.0101 11 2.1901C12.17 1.0101 13.75 0.350098 15.44 0.350098C18.92 0.350098 21.75 3.2001 21.75 6.6901C21.75 13.5701 15.68 18.2101 11.86 19.5201C11.61 19.6101 11.31 19.6501 11 19.6501ZM6.56 1.8501C3.91 1.8501 1.75 4.0201 1.75 6.6901C1.75 13.5201 8.32 17.3201 10.63 18.1101C10.81 18.1701 11.2 18.1701 11.38 18.1101C13.68 17.3201 20.26 13.5301 20.26 6.6901C20.26 4.0201 18.1 1.8501 15.45 1.8501C13.93 1.8501 12.52 2.5601 11.61 3.7901C11.33 4.1701 10.69 4.1701 10.41 3.7901C9.48 2.5501 8.08 1.8501 6.56 1.8501Z"
                    fill={isFavorite ? 'red' : '#063A88'} // رنگ بر اساس وضعیت مورد علاقه بودن: قرمز یا آبی اصلی SVG
                />
              </svg>
            )}
        </button>
        )}
             {product.discount && <span className="discount-badge-home" >{product.discount}</span>}
        {/* نمایش پیام خطا در صورت وجود */}
        {saveFavoriteError &&(
          <div className='error-favoritebotton'>خطا در ارسال به لیست مورد علاقه ها </div>
        )}
        <img
          className="card-img-top px-4" style={{ maxHeight: '220px' }}
          src={product.image || 'img_placeholder.png'} // استفاده از imageUrl از داده محصول
          alt={product.title || 'Product Image'}
        />
        <div className="card-body px-4 w-100">
          <p className="card-title-product" ref={nameRef}>{truncatedName}</p>
          <br /><br />
          <p className="card-text " style={{ color: 'initial', float: 'left' }}>{product.price}</p>
        {/* فرض بر این است که ویژگی discount نیز در داده محصول وجود دارد */}
        {product.score && (
             <p className="card-text " style={{ color: '#063A88', float: 'right',display:'flex'}}>
              <img src="src\assets\img\home\icon\Star.svg" alt="" style={{marginBottom:'14px'}}/><p style={{marginLeft:'5px',float:'right'}}>{product.score} </p>{/* نمایش مقدار تخفیف */}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default NewProductCard;