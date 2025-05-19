import React, { useState, useEffect, useRef } from 'react';
import "/src/assets/css/ProductCarousel.css";
import axios from 'axios';
import ErrorMessage from '../pages/Site/home/ErrorMessage';
const ProductCarousel = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 9;

    // Stateهای جدید برای مدیریت Drag
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await axios('http://localhost:3001/products');
                setProducts(result.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const getVisibleProducts = () => {
        if (!products) return [];
        const startIndex = currentIndex;
        const visibleProductIndices = [];
        for (let i = 0; i < visibleCards; i++) {
            visibleProductIndices.push((startIndex + i) % products.length);
        }
        return visibleProductIndices.map(index => products[index]);
    };

    const visibleProducts = getVisibleProducts();

  

    // Event Handlerهای Mouse برای Drag
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX);
        setScrollLeft(carouselRef.current.scrollLeft);
      
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX) * 1.5;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };


    if (loading) {
        return <p>در حال بارگذاری محصولات...</p>;
    }

    if (error) {
        return  <div><ErrorMessage/><p>خطا در بارگذاری محصولات: {error.message}</p></div>;
    }

    if (!products || products.length === 0) {
        return <p>محصولی یافت نشد.</p>;
    }

    return (
        <div className="product-carousel-container">
            <div className="carousel-title">
                <p>Products On Sale</p>
                <p className='pragraph-carousel-title'>Shop Now !</p>
                <button className="shop-now-button" disabled={loading}>view all &gt;</button> {/* دکمه Shop Now! */}
            </div>
            <div
                className="carousel-cards-container"
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {/* استفاده از کامپوننت ProductCard اصلاح شده در پایین */}
                {visibleProducts.map((product, index) => (
                    <ProductCard
                        key={product.id ? product.id : `product-${index}`}
                        product={product}
                        isActive={index === 1} // isActive فعلاً در ProductCard استفاده نشده، اما نگه داشته شده است
                    />
                ))}
            </div>
        </div>
    );
};

// کامپوننت ProductCard با منطق برش متن
const ProductCard = ({ product}) => {
    const [truncatedName, setTruncatedName] = useState(product.name);    // اضافه شدن state و ref برای مدیریت برش متن
    const nameRef = useRef(null);
    const estimatedCharsPerTwoLines = 30;    // تعداد تقریبی کاراکترها که در دو خط جای می گیرند (این عدد باید تنظیم شود)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    useEffect(() => {
        const truncateText = () => {
            const nameElement = nameRef.current;
            if (!nameElement || !product.name) return;

            // منطق ساده برش بر اساس تعداد کاراکتر
            if (isMobile>768,product.name.length > estimatedCharsPerTwoLines) {
                const shortened = product.name.substring(0, estimatedCharsPerTwoLines) + '...';
                setTruncatedName(shortened);
            }
            else {
                setTruncatedName(product.name);
            }
        };
        truncateText();

    }, [product.name, estimatedCharsPerTwoLines ]); // وابستگی ها: نام محصول و تعداد تقریبی کاراکتر

    const [isHovering, setIsHovering] = useState(false);    // تغییرات از کد اولیه شما: اضافه شدن state برای مدیریت وضعیت hover

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <>
        <div
            className={`product-card desktop-only ${isHovering ? 'active' : ''}`}
            style={{ width: '200px',  }}
            // تغییرات از کد اولیه شما: اضافه شدن هندلرهای onMouseEnter و onMouseLeave
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
             {product.discount && <span className="discount-badge" >{product.discount}</span>}
            <img src={product.image} alt={product.name} className="product-image"
                style={{ width: '100%',zIndex:'1' , }}/>
            <h3 className="product-name" ref={nameRef}>    {/* استفاده از رفرنس و نمایش نام بریده شده */}
                {truncatedName}
            </h3>
            <p className="product-price" style={{float:'right'}}>{product.price}</p>
            <p className="product-price" style={{float:'left'}}><del>{product.saleprice}</del></p>
        </div>
        <div
            className={`product-card mobile-only ${isHovering ? 'active' : ''}`}
            style={{ width: '100px',  }}
            // تغییرات از کد اولیه شما: اضافه شدن هندلرهای onMouseEnter و onMouseLeave
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
             {product.discount && <span className="discount-badge" >{product.discount}</span>}
            <img src={product.image} alt={product.name} className="product-image"
                style={{ width: '100%',zIndex:'1' , }}/>
            <h3 className="product-name" ref={nameRef}>    {/* استفاده از رفرنس و نمایش نام بریده شده */}
                {truncatedName}
            </h3>
            <p className="product-price" style={{float:'right'}}>{product.price}</p>
            <p className="product-price" style={{float:'left'}}><del>{product.saleprice}</del></p>
        </div>
        </>  
    );
};

export default ProductCarousel; 