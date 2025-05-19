import React, { useState } from 'react';
import axios from 'axios';

function FavoriteButton({ product, isParentHovering }) {
  // State برای مدیریت وضعیت مورد علاقه بودن
  // فرض می‌کنیم مقدار اولیه بر اساس داده‌های محصول از API تعیین می‌شود یا به صورت پیش‌فرض false است
  const [isFavorite, setIsFavorite] = useState(product.isFavorite || false);
  // State برای مدیریت وضعیت بارگذاری API
  const [isSavingFavorite, setIsSavingFavorite] = useState(false);
  // State برای مدیریت خطای API
  const [saveFavoriteError, setSaveFavoriteError] = useState(null);

  // هندلر رویداد برای کلیک روی دکمه مورد علاقه
  const handleFavoriteClick = async (event) => {
    event.stopPropagation(); // جلوگیری از انتشار رویداد کلیک به عناصر والد

    if (isSavingFavorite) {
      return;
    }

    setIsSavingFavorite(true);
    setSaveFavoriteError(null);

    // شما باید آدرس API واقعی خود را جایگزین کنید.
    // این آدرس فرضی است.
    const endpoint = 'http://localhost:3001/favorites'; // آدرس API برای افزودن/حذف مورد علاقه
    const method = isFavorite ? 'delete' : 'post'; // اگر مورد علاقه است، حذف کن، در غیر این صورت اضافه کن

    try {
      const response = await axios({
        method: method,
        url: endpoint,
        data: { productId: product.id }, // ارسال ID محصول در بدنه درخواست
      });

      // فرض کنید API در صورت موفقیت، وضعیت جدید مورد علاقه بودن را برمی‌گرداند
      // یا فقط کد موفقیت (مثلاً 200 یا 201) را برمی‌گرداند.
      // در اینجا ما فقط فرض می‌کنیم که درخواست موفقیت آمیز بوده است.

      setIsFavorite(!isFavorite); // تغییر وضعیت مورد علاقه بودن در UI
      console.log(`Favorite status updated for product ${product.id}`);
    } catch (error) {
      setSaveFavoriteError(error);
      console.error(`Error saving favorite status for product ${product.id}:`, error);
      // می‌توانید در اینجا پیام خطا را به کاربر نمایش دهید
    } finally {
      setIsSavingFavorite(false);
    }
  };

  // دکمه فقط زمانی نمایش داده می‌شود که isParentHovering درست باشد یا اگر مورد علاقه شده باشد
  // این منطق نمایش را می‌توانید بر اساس نیاز خود تنظیم کنید.
  // مثلاً اگر می‌خواهید فقط در Hover نمایش داده شود، فقط isParentHovering را بررسی کنید.
  const shouldShowButton = isParentHovering || isFavorite;


  return (
    <> {/* استفاده از Fragment برای برگرداندن دو عنصر (دکمه و پیام خطا) */}
      {shouldShowButton && (
        <button
          className="favorite-button" // کلاسی برای استایل دهی دکمه (در فایل CSS)
          onClick={handleFavoriteClick}
          disabled={isSavingFavorite} // غیرفعال کردن دکمه هنگام ارسال درخواست
          style={{
             // این استایل ها بهتر است در فایل CSS تعریف شوند.
             // در اینجا برای سادگی به صورت inline آورده شده‌اند.
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            border: 'none',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: isSavingFavorite ? 'progress' : 'pointer',
            zIndex: 2, // اطمینان از اینکه دکمه روی عناصر دیگر قرار می‌گیرد
          }}
        >
          {/* نمایش لودینگ یا آیکون قلب */}
          {isSavingFavorite ? (
            // می‌توانید اینجا یک Spinner یا آیکون لودینگ قرار دهید
            <div className="spinner" style={{ width: '15px', height: '15px', border: '2px solid #f3f3f3', borderTop: '2px solid #3498db', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          ) : (
            // SVG آیکون قلب
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19.6501C10.69 19.6501 10.39 19.6101 10.14 19.5201C6.32 18.2101 0.25 13.5601 0.25 6.6901C0.25 3.1901 3.08 0.350098 6.56 0.350098C8.25 0.350098 9.83 1.0101 11 2.1901C12.17 1.0101 13.75 0.350098 15.44 0.350098C18.92 0.350098 21.75 3.2001 21.75 6.6901C21.75 13.5701 15.68 18.2101 11.86 19.5201C11.61 19.6101 11.31 19.6501 11 19.6501ZM6.56 1.8501C3.91 1.8501 1.75 4.0201 1.75 6.6901C1.75 13.5201 8.32 17.3201 10.63 18.1101C10.81 18.1701 11.2 18.1701 11.38 18.1101C13.68 17.3201 20.26 13.5301 20.26 6.6901C20.26 4.0201 18.1 1.8501 15.45 1.8501C13.93 1.8501 12.52 2.5601 11.61 3.7901C11.33 4.1701 10.69 4.1701 10.41 3.7901C9.48 2.5501 8.08 1.8501 6.56 1.8501Z"
                fill={isFavorite ? 'red' : '#063A88'} // رنگ بر اساس وضعیت مورد علاقه بودن
              />
            </svg>
          )}
        </button>
      )}

      {/* نمایش پیام خطا در صورت وجود */}
      {saveFavoriteError && (
        <div className='error-favoritebotton'
           style={{ // این استایل ها نیز بهتر است در CSS باشند
             position: 'absolute',
             bottom: '5px',
             left: '5px',
             right: '5px',
             textAlign: 'center',
             color: 'red',
             fontSize: '0.8rem',
             zIndex: 3 // بالاتر از دکمه مورد علاقه
           }}
        >
          خطا در ارسال به لیست مورد علاقه ها
        </div>
      )}
    </> // بسته شدن Fragment
  );
}

export default FavoriteButton;