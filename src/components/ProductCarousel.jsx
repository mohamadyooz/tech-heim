import React, { useState, useEffect } from 'react';
import "/src/assets/css/ProductCarousel.css"
import axios from 'axios'; // ایمپورت axios

const ProductCarousel = () => {
    const [products, setProducts] = useState(null); // state برای نگهداری داده‌های محصول (ابتدا null)
    const [loading, setLoading] = useState(true); // state برای وضعیت بارگذاری
    const [error, setError] = useState(null); // state برای وضعیت خطا
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 3; // تعداد کارت های قابل مشاهده

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // شروع بارگذاری
            setError(null); // ریست کردن خطا

            try {
                const result = await axios(
                    'YOUR_API_ENDPOINT_HERE' // جایگزین کنید با endpoint API خود
                );
                setProducts(result.data); // ذخیره داده‌های دریافتی در state products
            } catch (error) {
                setError(error); // ذخیره خطای دریافتی در state error
            } finally {
                setLoading(false); // پایان بارگذاری (چه موفقیت چه خطا)
            }
        };

        fetchData();
    }, []); // [] به عنوان dependency array به معنی اجرای useEffect فقط یک بار بعد از اولین رندر


    const getVisibleProducts = () => {
        if (!products) return []; // اگر products هنوز null است، یک آرایه خالی برگردانید
        const startIndex = currentIndex;
        const visibleProductIndices = [];
        for (let i = 0; i < visibleCards; i++) {
            visibleProductIndices.push((startIndex + i) % products.length);
        }
        return visibleProductIndices.map(index => products[visibleProductIndices[index]]);
    };

    const visibleProducts = getVisibleProducts();

    const nextCard = () => {
        if (!products) return; // اگر products هنوز null است، کاری انجام ندهید
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevCard = () => {
        if (!products) return; // اگر products هنوز null است، کاری انجام ندهید
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    if (loading) {
        return <p>در حال بارگذاری محصولات...</p>; // نمایش پیام بارگذاری
    }

    if (error) {
        return <p>خطا در بارگذاری محصولات: {error.message}</p>; // نمایش پیام خطا
    }

    if (!products || products.length === 0) {
        return <p>محصولی یافت نشد.</p>; // نمایش پیام عدم وجود محصول
    }


    return (
        <div className="product-carousel-container">
            <h2 className="carousel-title">Products On Sale</h2>
            <div className="carousel-cards-container">
                <button className="carousel-button prev-button" onClick={prevCard} disabled={loading}> {/* غیرفعال کردن دکمه‌ها در حالت بارگذاری */}
                    &lt;
                </button>
                {visibleProducts.map((product, index) => (
                    <ProductCard
                        key={product.id || index}
                        product={product}
                        isActive={index === 1}
                    />
                ))}
                <button className="carousel-button next-button" onClick={nextCard} disabled={loading}> {/* غیرفعال کردن دکمه‌ها در حالت بارگذاری */}
                    &gt;
                </button>
            </div>
            <button className="shop-now-button" disabled={loading}>Shop Now</button> {/* غیرفعال کردن دکمه در حالت بارگذاری */}
        </div>
    );
};

const ProductCard = ({ product, isActive }) => {
    return (
        <div className={`product-card ${isActive ? 'active' : ''}`}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            {product.discount && <span className="discount-badge">{product.discount}</span>}
        </div>
    );
};

export default ProductCarousel;